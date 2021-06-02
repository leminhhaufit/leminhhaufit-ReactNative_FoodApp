import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image,PermissionsAndroid } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NavContextAdmin } from '../navigation/AdminStack';
import CardUser from './CardUser';
import {ActionSheet } from "native-base";
import db from '@react-native-firebase/database';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
export default function ItemStaffManage(props) {
    const { stafflist } = props;
    //#375A45 green #E35929 red
    const { uid, name, address, phone, status, photoURL,type,active } = stafflist;
    let icon = "#375A45";
    if (status == true) {
        icon = "#E35929";
    }

    const {navigation} = props;



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

    const uploadPhoto = async (uri) => {
        //setAv(uri);
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


    const updateInfo = () => {
        navigation.navigate("FormStaff", { title: "Update Info Staff", type:"UPDATE",stafflist:stafflist })
    }


    return (
            <CardUser  uid={uid} format={true} name={name} type={type} avatar={photoURL} active={active} updateInfo={updateInfo} changeAvatar={onClickAddImage} />
            
            // <View style={styles.btn}>
            //     {/* <TouchableOpacity style={styles.btndel}>
            //         <FontAwesome5Icon name="trash" size={32} color="#FFF" style={styles.iconplus} />
            //     </TouchableOpacity>
            //     <NavContextAdmin.Consumer>
            //         {({ navigation }) =>
            //             <TouchableOpacity
            //                 onPress={() => navigation.navigate("FormStaff", { title: "Update Category" })}
            //                 style={styles.btndel}>
            //                 <FontAwesome5Icon name="pen-alt" size={32} color="#FFF" style={styles.iconplus} />
            //             </TouchableOpacity>}
            //     </NavContextAdmin.Consumer>  */}
    )
}
const styles = StyleSheet.create({
})
