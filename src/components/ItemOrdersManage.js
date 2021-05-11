import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemOrdersManage(props) {
    const { orderslist } = props;
    //#375A45 green #E35929 red
    const { id, ordersid, nameStaff, createDate, price } = orderslist;

    return (
        <TouchableOpacity style={styles.container} key={id}>
            <View style={styles.container2}>
                <Text style={styles.title}>{ordersid}</Text>
                <Text style={styles.content}>{nameStaff} </Text>
                <Text style={styles.content}>{createDate} </Text>
                <View style={styles.price}>
                    <Text style={styles.txtprice}>{price} <FontAwesome5Icon name="dollar-sign" size={20} color="black" /> </Text>
                </View>
            </View>
            <View style={styles.btn}>
                <View style={styles.btndel}>
                    <FontAwesome5Icon name="eye" solid size={32} color="#FFF" style={styles.iconplus} />
                </View>
            </View>
        </TouchableOpacity >
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
        right: -35,
        top: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
    },
    content: {
        fontSize: 16,
        fontWeight: '300',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        opacity: 0.5,
        height: 30,
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
        width: 150,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 22,
        marginLeft: 12,

    },

})
