import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';

import PropTypes from 'prop-types';

import tableImg from '../assets/table.png';
import dotredImg from '../assets/dotred.png';
import dotgreen from '../assets/dotgreen.png';

ItemFood.propTypes = {

};

function ItemFood(props) {
    const { foodlist } = props;

    const { id, title, status } = foodlist;
    let url;
    //status == true đang sử dụng
    //status ==false chưa sử dụng
    if (status == true) {
        url = dotredImg;
    } else {
        url = dotgreen;
    }

    return (
        <TouchableOpacity >

            <View style={styles.container}>
                <Text style={styles.title}>{foodlist.title}</Text>
                <Image source={tableImg} style={styles.imgtable} />
                <Image source={url} style={styles.dotImg} />
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 150,//120
        height: 150,
        marginBottom: 15,
        marginRight: 25,
        alignSelf: 'stretch',
        borderRadius: 5,
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
        marginLeft: 15
    },
    imgtable: {
        width: 80,//56
        height: 80,
    },
    title: {
        marginTop: 15,
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '700',
    },
    dotImg: {
        width: 18,
        height: 18,
        alignSelf: 'flex-end',
        marginRight: 10,
    }
})
export default ItemFood;