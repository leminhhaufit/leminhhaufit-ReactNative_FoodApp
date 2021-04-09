import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemFoodManage(props) {
    const { foodlist } = props;

    const { id, title, description, price, material, status, url } = foodlist;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container2}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{material} </Text>
                <Image style={styles.image} source={url} />
                <View style={styles.price}>
                    <Text style={styles.txtprice}>{price} <FontAwesome5Icon name="dollar-sign" size={20} color="black" /> </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btndel}>
                    <FontAwesome5Icon name="trash" size={32} color="#FFF" style={styles.iconplus} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btndel}>
                    <FontAwesome5Icon name="pen-alt" size={32} color="#FFF" style={styles.iconplus} />
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
        marginTop: 40,
        marginRight: 40,
        borderRadius: 25,
        height: 140,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
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
        width: 150,
        height: 150,
        right: -45,
        top: -5,
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
        width: 100,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        bottom: 0,

    },
    btndel: {
        flex: 1,
        paddingTop: 5,
    },
    iconplus: {
        alignSelf: 'center',
        paddingTop: 5,

    },
    price: {
        position: 'absolute',
        bottom: 0,
        width: 100,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },

})
