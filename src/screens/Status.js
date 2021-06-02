import React, { useState, useEffect, useContext, useRef } from 'react'
import { StyleSheet, View, FlatList, ScrollView, Text, Image,PermissionsAndroid  } from 'react-native'
import {save} from "@react-native-community/cameraroll";
import WaiterOrder from '../components/WaiterOrder';
import db from '@react-native-firebase/database';
import { toString } from 'qrcode';
import moment from "moment";
import storage from '@react-native-firebase/storage';
import { Button } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import formatter from '../config/Currency';
import { AuthContext } from '../navigation/AuthProvider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { captureRef } from "react-native-view-shot";

function useCapture() {
    const captureViewRef = useRef();


    async function requestPhotosPermission() {
        try {
            const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
            const hasPermission = await PermissionsAndroid.check(permission);
            if (hasPermission) {
                return true;
              }

            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              return true;
            } else {
              console.log("Photos permission denied")
              return false;
            }
        } catch (err) {
          console.warn(err)
        }
      }


    function onCapture(nav,orderID) {
      captureRef(captureViewRef, {
        format: "jpg",
        quality: 1
      }).then(async (uri) => {
            const granted = await requestPhotosPermission();
            if(granted){
                save(uri)
                .then(nav.navigate('Payment')) 
                .catch(err => console.log('err:', err))
            }
            await storage().ref(`orders/${orderID}/order.png`).putFile(uri);
            
        }, 
        error => alert("Oops, snapshot failed", error));
    }

    return {
      captureViewRef,
      onCapture
    };
  }


export default function Status({ route, navigation }) {
    const { curIdOrder } = route.params;
    const [foodTemp, setFoodTemp] = useState([]);
    const [xml, setXml] = useState(null);
    const { user: { uid, photoURL, name } } = useContext(AuthContext);
    const { captureViewRef, onCapture } = useCapture();

    console.log(navigation);
    const generateQRCode = async () => {
        try {
            const qr = await toString(curIdOrder, { type: 'svg', version: 10 });
            return setXml(qr);
        } catch (error) {
            return setVisible(true);
        }
    };


    useEffect(() => {
        db().ref('/orders').on('value', async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                if (curIdOrder == key) {
                    orders.push({ ...value, key });
                }
            }
            setFoodTemp(orders);
        })
        generateQRCode();
    }, [])


    if (foodTemp != null && foodTemp[0]) {
        return (
            <ScrollView>
                <View style={styles.container} ref={captureViewRef}>
                    <FlatList data={foodTemp} showsVerticalScrollIndicator={false}
                        numColumns={1}
                        renderItem={({ item }) => <WaiterOrder foodlist={item} show={true} />}
                        keyExtractor={item => item.id}
                        style={styles.flatlist}
                    />
                    <View style={styles.containerInfo}>
                        <View style={styles.header}>
                            <View style={styles.orderID}>
                                <Text style={{ fontWeight: 'bold', color: '#458' }}>Info </Text>
                            </View>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.svgLogo}>
                                <SvgXml xml={xml} width={150} height={150} />
                                <View style={{ borderColor: '#ddd', borderWidth: 2, position: 'absolute', width: 40, height: 40, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 5 }}>
                                    <Image style={{ width: 30, height: 30, borderRadius: 5, alignSelf: 'center', }} source={{ uri: photoURL }} />
                                </View>
                            </View>

                            <View style={{
                                borderStyle: 'dotted',
                                height: '100%',
                                borderLeftWidth: .2,
                                borderRadius: 1,
                            }} />

                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.body}>
                                    <Text style={styles.textStyle} >Cash:</Text>
                                    <Text style={styles.textContent} >{name}</Text>
                                </View>

                                <View style={styles.body}>
                                    <Text style={styles.textStyle} >Date:</Text>
                                    <Text style={styles.textContent} >{moment(foodTemp[0]['createDate']).format('MMM D, HH:mmA')}</Text>
                                </View>

                                <View style={styles.body}>
                                    <Text style={styles.textStyle} >Total:</Text>
                                    <Text style={styles.textContent} >{formatter.format(foodTemp[0]['total'])}</Text>
                                </View>

                                <View style={styles.body}>
                                    <Text style={styles.textStyle} >Status:</Text>
                                    <Button icon={<FontAwesome5 name="check" size={10} color="#FFF" />} buttonStyle={styles.btnadd} />
                                </View>
                            </View>


                        </View>

                    </View>
                </View>

                <Button onPress={() => onCapture(navigation,curIdOrder)} icon={<FontAwesome5 name="check" size={10} color="#FFF" style={{margin:5}} />} title='Done' buttonStyle={{width:'90%', alignSelf:'center', margin:10}} />
            </ScrollView>

        )
    }else{
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#F4F4F4',
        flex: 1
    },
    containerInfo: {
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        marginBottom: 15,
        minHeight: 150,
        display: 'flex',
        flexDirection: "column",
        elevation: .5,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderID: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    body: {
        flexDirection: 'row'
    },
    svgLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        margin: 5,
        fontWeight: 'bold',
        color: '#BBC0C4'
    },
    textContent: {
        margin: 5,
        fontWeight: 'normal',
        color: '#BBC0C4'
    },
    btnadd: {
        borderRadius: 15,
        width: 30,
        margin: 5,
        backgroundColor: 'green'
    }
})
