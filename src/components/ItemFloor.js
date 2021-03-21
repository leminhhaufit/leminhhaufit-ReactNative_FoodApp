import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';

import PropTypes from 'prop-types';

import tableImg from '../assets/table.png';
import dotredImg from '../assets/dotred.png';
import dotgreen from '../assets/dotgreen.png';

ItemFloor.propTypes = {

};

function ItemFloor(props) {
    const { floorlist } = props;

    const { id, title } = floorlist;

    return (
        <TouchableOpacity >

            <View style={styles.container}>
                <Text style={styles.title}>{floorlist.title}</Text>
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 150,//120
        height: 30,
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 10,
        alignSelf: 'stretch',
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: 'pink',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },

    title: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: '200',
    }
})
export default ItemFloor;