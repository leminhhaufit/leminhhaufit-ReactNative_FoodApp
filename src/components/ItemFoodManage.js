import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NavContextAdmin } from '../navigation/AdminStack';
import db from '@react-native-firebase/database';
import Toast from 'react-native-toast-message';
export default function ItemFoodManage(props) {
    const { foodlist } = props;
    //#375A45 green #E35929 red
    const { id : uid, name, description, price, material, active, photoURL,key } = foodlist;
    let icon = "#E35929";
    if (active == true) {
        icon = "#375A45";
    }

    const updateActiveFood = async () => {
        try {
            await db().ref(`foods/${key}`).update({
                active: !active
            });
            Toast.show({
                type: 'success',
                text1: `Update Active Successfully`,
                autoHide: true,
            });
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container} key={uid}>
            <View style={styles.container2}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.content}>{description} </Text>
                <Image style={styles.image} source={{uri:photoURL}} />
                <View style={styles.price}>
                    <Text style={styles.txtprice}>{price} <FontAwesome5Icon name="dollar-sign" size={15} color="black" /> </Text>
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btndel}>
                    <FontAwesome5Icon name="trash" size={20} color="#FFF" style={styles.iconplus} />
                </TouchableOpacity>
                <NavContextAdmin.Consumer>
                    {({ navigation }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("FormFood", { title: "Update Food", type: 'UPDATE', foodlist })}
                            style={styles.btndel}>
                            <FontAwesome5Icon name="pen-alt" size={20} color="#FFF" style={styles.iconplus} />
                        </TouchableOpacity>
                    }
                </NavContextAdmin.Consumer>
                <TouchableOpacity style={styles.btndel} onPress={updateActiveFood}>
                    <FontAwesome5Icon name="power-off" size={20} color={icon} style={styles.iconplus} />
                </TouchableOpacity>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 40,
        borderRadius: 25,
        height: 140,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        position:'relative',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: 10,
    },
    container2: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 140,

    },
    award: {
        fontSize: 16,
        fontWeight: '400',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 10,
        width: 200,
    },
    image: {
        position: 'absolute',
        width: 130,
        height: 130,
        right: -30,
        marginTop:5,
        borderRadius:100,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        width: 250,
    },
    content: {
        fontSize: 16,
        fontWeight: '300',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        opacity: 0.5,
        width: 250,
        height: 60,
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: "#FFC75F",
        width: 120,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'flex-start',
        position: 'absolute',
        justifyContent:'space-around',
        alignContent:'space-around',
        alignItems:'center',
        left: 0,
        bottom: 0,

    },
    btndel: {
       
    },
    iconplus: {
        alignSelf: 'center',

    },
    price: {
        position: 'absolute',
        bottom: 0,
        width: 100,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },

})
