import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';

import PropTypes from 'prop-types';



ItemFloor.propTypes = {

};

function ItemFloor(props) {
    const { floorlist } = props;

    const { id, title, status } = floorlist;

    return (
        <TouchableOpacity >

            <View style={styles.container}>
                <Text style={styles.title}>{floorlist.title}</Text>
            </View>

        </TouchableOpacity >
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
        backgroundColor: "#F59507",
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
        color: '#4D3826',
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: '200',
    }
})
export default ItemFloor;