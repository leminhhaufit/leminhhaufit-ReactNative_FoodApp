import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import tableImg from '../assets/table.png';
import dotredImg from '../assets/dotred.png';
import dotgreen from '../assets/dotgreen.png';


ItemTable.propTypes = {

};

function ItemTable(props) {
    const { tablelist, reserve } = props;

    const { id, title, status } = tablelist;
    let url;
    //status == true đang sử dụng
    //status ==false chưa sử dụng
    if (status == true) {
        url = dotredImg;
    } else {
        url = dotgreen;
    }

    return (
        <TouchableOpacity onPress={reserve} >

            <View style={styles.container} key={id}>
                <Text style={styles.title}>{title}</Text>
                <Image source={tableImg} style={styles.imgtable} />
                <Image source={url} style={styles.dotImg} />
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 120,//120
        height: 120,
        marginBottom: 15,
        marginRight: 5,
        marginLeft: 10,
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
        width: 56,//56
        height: 56,
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
export default ItemTable;