import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import tableImg from '../assets/table.png';
import dotredImg from '../assets/dotred.png';
import dotgreen from '../assets/dotgreen.png';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


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
        <View>
            <TouchableOpacity onPress={reserve}>
                <View style={styles.container} key={id}>

                    <Image source={url} style={styles.imgtable} />
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.content}>
                        <Text style={styles.price}>{price}$</Text>
                        <Image source={urlstatus} style={styles.dotImg} />
                    </View>

                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconplus} onPress={() => console.log("vCLicked")}>
                <FontAwesome5Icon name="plus-circle" size={50} color="#FFC75F" />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 30,
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
    iconplus: {
        position: 'absolute',
        right: -5,
        top: 5,
    },
})
export default ItemFood;