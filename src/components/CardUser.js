import React from 'react'
import { StyleSheet, ImageBackground, TextInput ,Alert, Text, View, Image, TouchableOpacity,Dimensions,PermissionsAndroid } from 'react-native'
import { Button } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import SecondFirebaseApp from '../config/SecondFirebaseApp';
import Toast from 'react-native-toast-message';


const CardUser = ({format,name, avatar, changeAvatar,type,active,uid,updateInfo}) => {

    const userActivate = () => {
        Alert.alert(
            `Do you want to ${active ? 'DEACTIVATE' : 'ACTIVATE'} the account?`,
            "You can temporarily deactivate account and reactivate it later.s",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { 
                  text: "OK", 
                  onPress: async () => {
                      console.log('active');
                    const secondApp = await SecondFirebaseApp();
                    secondApp.database().ref('users/' + uid).update({
                        "active": !active
                    }).then(() => {
                        Toast.show({
                            type: 'success',
                            text1: `${active ? 'Deactivate ' + name : 'Activate ' + name } `  ,
                            autoHide: true,
                          });
                    })
                  } 
             }
            ]
          );
    }

    return (
        <View style={!format ? styles.searchgra : ''}>
            <View style={styles.card}>
                {/* Info */}
                <View style={styles.info}>
                <FastImage
                    style={styles.iconContainer}
                    source={{
                        uri: avatar ? avatar : 'https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg'
                    }}
                        resizeMode={FastImage.resizeMode.center}
                    />
                    <View style={styles.userContainer}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#505052' }}>{name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#AAB5BE', marginVertical: 4 }}></Text>
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
                        onPress={changeAvatar}
                        titleStyle={{ fontSize: 13 }}
                    />

                    <Button
                        title="⚒ Edit Profile"
                        type="solid"
                        onPress={updateInfo}
                        titleStyle={{ fontSize: 13 }}
                    />
                    {format &&
                        <Button
                            onPress={userActivate}
                            title={active ? '👌' : '❌'}
                            type="solid"
                            buttonStyle={{backgroundColor:`${active ? '#5CB85C' : '#CD6B7C'}`}}
                            titleStyle={{ fontSize: 13 }}
                        />
                    }  
                </View>
            </View>
        </View>
    );
}
export default CardUser;

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
        backgroundColor:'#f5f5f5',
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
   
    
})
