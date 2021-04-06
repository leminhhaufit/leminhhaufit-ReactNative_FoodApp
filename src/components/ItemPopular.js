import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemPopular(props) {
    const { foodlist } = props;

    const { id, title, description, price, material, status, url } = foodlist;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container2}>
                <Text style={styles.award}><FontAwesome5Icon name="pizza-slice" size={16} color="#F59507" /> Top 1 week</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{material} </Text>
                <Image style={styles.image} source={url} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.btnadd}>
                <FontAwesome5Icon name="plus" size={16} color="black" style={styles.iconplus} />
            </TouchableOpacity>
            <View style={styles.price}>

                <Text style={styles.txtprice}>{price} <FontAwesome5Icon name="dollar-sign" size={20} color="black" /> </Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft: 40,
        marginTop: 10,
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
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        width: 240,
    },
    content: {
        fontSize: 16,
        fontWeight: '300',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        opacity: 0.5
    },
    btnadd: {
        backgroundColor: "#F59507",
        width: 100,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    iconplus: {
        alignSelf: 'center',
        paddingTop: 15,
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
        fontWeight: '800',
    }
})
