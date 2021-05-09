import React, {useContext,useState, useEffect} from 'react'
import { StyleSheet, ImageBackground, TextInput , Text, View, Image, TouchableOpacity,Dimensions,PermissionsAndroid } from 'react-native';
import { Avatar,Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import header2IMG from '../assets/header2.jpg';
import { AuthContext } from '../navigation/AuthProvider';
import {ActionSheet } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import userData from './DataUser';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;


export default function HeaderProfiles1() {
    const [av,setAv] = useState(null);
    const { user, setUser } = useContext(AuthContext);
    const {name,phone,email,uid,photoURL} = user;
    const currentUser = auth().currentUser;
    useEffect(async () => {
        const avatar = await AsyncStorage.getItem(uid);
        setAv(avatar);
    },[av])

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
                try {
                    if(uri){ 
                        await uploadPhoto(uri);
                    }
                } catch (error) {
                    
                }
            }) 
        }
    }

    const uploadPhoto = async (uri) => {
        setAv(uri);
        await AsyncStorage.setItem(uid,uri);
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
    }

    const choosePhoto = () => {
        launchImageLibrary({mediaType:'photo'}, async({uri}) => {
            try {
                if(uri){
                    await uploadPhoto(uri);
                }
            } catch (error) {
                
            }
        })
    }

    const onClickAddImage = () => {
        const BUTTONS = ['Take Photo','Choose Photo Library','Cancel'];
        ActionSheet.show(
            {options:BUTTONS,cancelButtonIndex:2,title:'Select a Photo'},(btnSelect) => {
                console.log(btnSelect);
                switch (btnSelect) {
                    case 0:
                        requestCameraPermission();
                        break;
                    case 1:
                        choosePhoto();
                        break;
                    default:
                        break;
                }
            }
        );
    }
    return (
        <View style={{backgroundColor:'#FFF',flex:1}}>
            <View style={styles.header}></View>
            <View style={styles.searchgra}>
               <View style={styles.card}>
                   {/* Info */}
                   <View style={styles.info}>
                       <Image
                            style={styles.iconContainer}
                            source={{
                                uri: av ? av : photoURL
                            }}
                        />
                        <View style={styles.userContainer}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#505052'}}>{name}</Text>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'#AAB5BE',marginVertical:4}}>Phục vụ</Text>
                            <View style={styles.accountContainer}>
                                <View style={styles.inv}>
                                    <Text style={styles.title}>📆 Dates</Text>
                                    <Text style={styles.val}>30/4</Text>
                                </View>
                                <View style={styles.inv}>
                                    <Text style={styles.title}>📇 Serves</Text>
                                    <Text style={styles.val}>35</Text>
                                </View>
                                <View style={styles.inv}>
                                    <Text style={styles.title}>🌟 Rating</Text>
                                    <Text style={styles.val}>4.5</Text>
                                </View>
                                
                                
                            </View>
                        </View>
                   </View>
                   {/* Button */}
                   <View style={styles.btnInfo}>
                    <Button
                        title="👦 Change Avatar"
                        type="outline"
                        onPress={onClickAddImage}
                        titleStyle={{fontSize:13}}
                    />

                    <Button
                        title="⚒ Edit Profile"
                        type="solid"
                        titleStyle={{fontSize:13}}
                    />
                   </View>
               </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#8995AF',
        height:'28%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        paddingHorizontal:20
    },
    searchgra: {
        left:0,
        right:0,
        height:90,
        marginTop:-110
    },
    card:{
        backgroundColor:"#FFF",
        paddingVertical:8,
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:15,
        marginTop:25,
        height:200,
        display:'flex',
        flexDirection:"column",
        elevation:5,
        
    },
    info:{
        display:'flex',
        flexDirection:'row',
        flex:2
    },
    iconContainer:{
        flex:1,
        marginTop:10, 
        borderRadius:10,
        backgroundColor:'#f5f5f5'
        
    },
    userContainer:{
        display:'flex',
        flex:2,
        flexDirection:'column',
        marginTop:10,
        paddingHorizontal:10
    },
    accountContainer:{
        display:'flex',
        flexDirection:'row',
        overflow:'hidden',
        backgroundColor:'#F2F5FA',
        flex:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    btnInfo:{
        display:'flex',
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    title:{
        fontSize:13,
        color:'#AAB5BE',
        margin:5
    },
    val:{
        fontSize:18,
        fontWeight:'bold',
        color:'#505052'
    },
    inv:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    }
})
