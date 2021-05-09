import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types';



ItemFloor.propTypes = {

};

function ItemFloor(props) {
    const { floorlist } = props;

    const { id, title, status,des } = floorlist;

    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container}>
                <LinearGradient 
                    start={{ x: 0.5, y: 0 }}
                    end={{x: 0.7, y: 1 }}
                    colors={[ '#fdfdfd', '#F4F4F4']}
                    style={styles.icon}
                >  
                    <Text style={styles.title}>{title}</Text>
       
                </LinearGradient>
                <Text style={styles.des}>{des}</Text>
            </View>

        </TouchableOpacity >
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        display:'flex',
        flexDirection:'column',
        marginLeft: 20,
        justifyContent:'center',
        alignItems:'center'

    },
    icon: {
        width: 60,//120
        height: 60,
        borderRadius:50,
        alignSelf: 'stretch',
        alignItems: 'center', 
        shadowRadius: 1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    title: {
        color: '#4D3826',
        textTransform: 'uppercase',
        fontSize: 30,
    },
    des: {
        paddingRight:8,
        paddingLeft:5,
        color:'#8a8989',
    }
})
export default ItemFloor;