import React, {useContext,useState, useEffect} from 'react'
import { StyleSheet, FlatList, TextInput , Text, View, Image,Dimensions,PermissionsAndroid } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import {ActionSheet, Button } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import userData from './DataUser';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import ProfileButton from './ProfileButton';
import { signOut } from '../config/firebaseAPI';
import CardUser from './CardUser'
import { Overlay } from 'react-native-elements';
import _ from 'lodash';
import CardOrder from '../components/CardOrder';
import WaiterOrder from '../components/WaiterOrder';
const width = Dimensions.get('window').width;


export default function HeaderProfiles1() {
    const [av,setAv] = useState(null);
    const { user, setUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [ordersWaiter, setOrdersWaiter] = useState([]);

    const {name,phone,email,uid,photoURL,type} = user;
    const currentUser = auth().currentUser;


    const [open, setOpen] = useState(false);
    useEffect(async () => {
        const avatar = await AsyncStorage.getItem(uid);
        setAv(avatar);
    },[av])


    //  Start Use for Waiter and Chef

    useEffect(() => {   
        if (type != 1) {
            db().ref('/orders').on('value',async (data) => {
                const ordersJson = await data.toJSON();
                const orders = [];
                for (const [key, value] of Object.entries(ordersJson)) {     
                        orders.push({...value,key});
                  } 
                  setOrders(orders);
            })
        }
    },[])
    //  End Use for Waiter and Chef 


    //  Start only for Waiter 

    useEffect(() => {   
            db().ref('/orders').on('value',async (data) => {
                const ordersJson = await data.toJSON();
                console.log("Resl",ordersJson);
                const orders = [];
                for (const [key, value] of Object.entries(ordersJson)) { 
                        const realId = _.get(value,'uid');
                        if(type == 0){
                            orders.push({...value,key});
                        }
                        else if(type == 1){
                            if(realId == uid) {
                                orders.push({...value,key});
                            }
                        }
                  } 
                  setOrdersWaiter(orders);
            })
    },[])
    //  End  only for Waiter 



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
            launchCamera({mediaType:'photo',cameraType:'back',quality:0.5}, async({uri}) => {
                try {
                    if(uri){ 
                        await uploadPhoto(uri);
                    }
                } catch (error) {
                    
                }
            }) 
        }
    }

    // START FOR ORDER CHEF
    const showOrderChef = () => {
        setOpen(true);
    }




    // END FOR ORDER CHEF



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
            <CardUser format={false} name={name} avatar={av ? av : photoURL} changeAvatar={onClickAddImage} />
            {type == 0 ? 
            (<View style={styles.boxapp}>
                <ProfileButton text='Order' icon='file-alt' cb={signOut}/>
                <ProfileButton text='Settings' icon='info' cb={signOut}/>
                <ProfileButton text='Settings' icon='cogs' cb={signOut}/>
                <ProfileButton text='Log out' icon='sign-out-alt' cb={signOut} />
            </View>) : type == 1 ? 
            (<View style={styles.boxapp}>
                <ProfileButton text='Order' icon='file-alt' cb={showOrderChef}/>
                <ProfileButton text='Settings' icon='info' cb={signOut}/>
                <ProfileButton text='Settings' icon='cogs' cb={signOut}/>
                <ProfileButton text='Log out' icon='sign-out-alt' cb={signOut}
                 />

            <Overlay visible={open} fullScreen={false} overlayStyle={{height:'70%'}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#458', fontSize:16,fontWeight:'bold'}}>List Of Orders</Text>
                    <Text onPress={() => setOpen(false) }>❌</Text>
                </View>
                <FlatList data={ordersWaiter} showsVerticalScrollIndicator={false}
                    numColumns={1}
                    renderItem={({ item }) => <WaiterOrder foodlist={item} show={true} />}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                />
            </Overlay>

            </View>) : 
            (<>
            <View style={styles.boxapp}>
                <ProfileButton text='Cooks' icon='file-alt' cb={showOrderChef}/>
                <ProfileButton text='Settings' icon='info' cb={signOut}/>
                <ProfileButton text='Report' icon='cogs' cb={signOut}/>
                <ProfileButton text='Log out' icon='sign-out-alt' cb={signOut} />
            </View>
            <Overlay visible={open} fullScreen={false} overlayStyle={{height:'70%'}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#458', fontSize:16,fontWeight:'bold'}}>List Of Meals</Text>
                    <Text onPress={() => setOpen(false) }>❌</Text>
                </View>
                <FlatList data={orders} showsVerticalScrollIndicator={false}
                    numColumns={1}
                    renderItem={({ item }) => <CardOrder foodlist={item} show={true} />}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                />
            </Overlay>
    </>) }
            
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
        marginTop:-140
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
        
    },
    boxapp:{
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin:20
    },
    box:{
        backgroundColor:'#FFF',
        flexBasis: '40%',
        margin:5,
        flexShrink:1,
        height:100,
        borderRadius:5,
        elevation:2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#458',
        borderWidth:0.3
    },
    textProfile : {
        fontSize:15,
        fontWeight:'bold',
        color:'#AAB5BE',
        marginVertical:4
    },
    v1:{
        justifyContent:'center',
        alignItems:'center',
    },
    flatlist:{
        width:300,
        height:500,
        overflow:'hidden'
    }
})
