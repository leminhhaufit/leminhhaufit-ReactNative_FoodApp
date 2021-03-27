import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import tableImg from '../assets/table.png';
import dotredImg from '../assets/dotred.png';
import dotgreen from '../assets/dotgreen.png';


ItemFood.propTypes = {

};

function ItemFood(props) {
    const { foodlist, reserve } = props;

    const { id, title, description, price, material, status, url } = foodlist;
    let urlstatus;
    //status == true đang sử dụng
    //status ==false chưa sử dụng
    if (status == true) {
        urlstatus = dotredImg;
    } else {
        urlstatus = dotgreen;
    }

    return (
        <TouchableOpacity onPress={reserve} >
            <View style={styles.container} key={id}>

                <Image source={url} style={styles.imgtable} />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.content}>
                    <Text style={styles.price}>{price}$</Text>
                    <Image source={urlstatus} style={styles.dotImg} />
                </View>
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 15,
        marginTop: 5,
        alignSelf: 'stretch',
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    imgtable: {
        width: 100,//56
        height: 100,

    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignItems: 'center',
    },
    dotImg: {
        flex: 1,
        width: 18,
        height: 18,
        marginTop: 5,
        marginRight: 15,
    },
    price: {
        flex: 8,
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '700',
        alignItems: 'center',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
})
export default ItemFood;