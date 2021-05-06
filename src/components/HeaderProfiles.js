import React, {useContext,useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions,PermissionsAndroid } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import header2IMG from '../assets/header2.jpg';
import { AuthContext } from '../navigation/AuthProvider';
import {ActionSheet } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import userData from './DataUser';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';

const width = Dimensions.get('window').width;


export default function HeaderProfiles() {
    const [av,setAv] = useState(null);
    const { user, setUser } = useContext(AuthContext);
    const {name,phone,email,uid,photoURL} = user;
    const currentUser = auth().currentUser;

    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Access permission",
              message:
                "Access permission to update your avatar",
                buttonPositive: "Continue"
              
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
            checkAndTakePhoto();
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

      const checkAndTakePhoto = async () => {
        const granted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.CAMERA);
        if(granted === true){
            launchCamera({mediaType:'photo',cameraType:'back'}, async({uri}) => {
                setAv(uri);
                await storage().ref(`${uid}/avatar.png`).putFile(uri);
                let imageRef = await storage().ref(`${uid}/avatar.png`);
                const url = await imageRef.getDownloadURL();
                currentUser.updateProfile({photoURL:url}).then(async () => {
                     db().ref('users/' + uid).update({
                        "photoURL": url
                      }).then(async () => {
                        const data = await db().ref('users/' + uid).once("value");
                        // setUser(data.val());
                        // setAv(null);
                      })
                });
            }) 
        }
    }

    const onClickAddImage = () => {
        const BUTTONS = ['Take Photo','Choose Photo Library','Cancel'];
        ActionSheet.show(
            {options:BUTTONS,cancelButtonIndex:2,title:'Select a Photo'},(btnSelect) => {
                console.log(btnSelect);
                switch (btnSelect) {
                    case 0:
                        requestCameraPermission();
                    case 1:
                        break;
                    default:
                        break;
                }
            }
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={header2IMG}
                    style={styles.imgcart} />
                <View style={styles.avatarCard} >
                    <View style={styles.avatar}>
                        <Avatar
                            size="large"
                            rounded
                            
                            activeOpacity={0}
                        />
                    </View>
                    <View style={styles.avatar2}>
                        <Avatar
                            size="large"
                            rounded
                            icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
                            source={{uri: av ? av : photoURL }}
                            overlayContainerStyle={{ backgroundColor: '#FFC75F'}}
                            onPress={onClickAddImage}
                            activeOpacity={0.95}
                        />

                    </View>
                </View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.infor}>
                    <FontAwesome5 name="map-marker-alt" size={16} color="#FFC75F" />
                    <Text style={styles.address}>Tp.HCM</Text>
                    <FontAwesome5 name="user-alt" size={16} color="#FFC75F" />
                    <Text style={styles.address}>Age: 22</Text>
                    <Text style={styles.roles}>Phục vụ</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginLeft: 5,
        marginRight: 5,
        elevation: 3,
    },
    card : {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    imgcart: {
        width: width,
        height: 150,
        alignSelf: 'stretch',
        borderRadius: 25,
    },
    avatarCard: {
        position:'relative',
        width:80,
        height:50,
        top:-50
    },
    avatar: {
        position:'absolute',
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#1a73e8',
        borderStyle: 'solid',
        opacity: 0.5,
        

    },
    avatar2: {
        position:'absolute',
        borderRadius: 50,
        padding:6
        
        
        

    },
    name: {  
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFC75F',
    },
    infor: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 20,
        paddingTop:10
    },
    address: {
        paddingRight: 10,
        color: 'black',
        paddingLeft: 10,
        opacity: 0.5,
        fontWeight: '300'
    },
    roles: {
        paddingRight: 10,
        color: '#e97067',
        paddingLeft: 10,
        //opacity: 0.4,
        fontWeight: 'bold',
        backgroundColor: '#ffe5e3',
        borderRadius: 20,
    },
})
