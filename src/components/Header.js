import React from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';

import PropTypes from 'prop-types';

import Search from './Search';

import foodImg from '../assets/food.png';
import headerIMG from '../assets/header.png';
import searchIMG from '../assets/loupe.png';
Header.propTypes = {

};

function Header(props) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}

        >
            <View style={styles.container}>
                <Image style={styles.imghead} source={headerIMG} />
                <View style={styles.container1}>
                    <View style={styles.img}>
                        <Image source={foodImg} style={styles.icon} />

                    </View>

                    <TextInput style={styles.inputSearch}
                        placeholderStyle={styles.placeholdercustom}
                        placeholder="Search here" />

                    <TouchableOpacity style={styles.btnsearch}>
                        <View style={styles.imgsearch}>
                            <Image source={searchIMG} style={styles.iconsearch} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.labelList}>Table List</Text>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'stretch',

    },
    imghead: {
        marginTop: 20,
        alignSelf: 'stretch',

    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'stretch',
        borderRadius: 5,
        position: 'absolute',
        top: 200,
        bottom: 0,
        left: 10,
        right: 0,
        height: 40,
        width: 280,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    inputSearch: {
        paddingLeft: 5,
        paddingRight: 5,
        width: 200,
        height: 40,
        borderStyle: 'solid',
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        fontSize: 18,
        fontWeight: '600',


    },
    icon: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        marginTop: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    img: {
        height: 40,
        width: 50,
        backgroundColor: '#FFC75F',

    },
    placeholdercustom: {
        opacity: 0.3,
        fontWeight: '200'
    },
    imgsearch: {
        height: 40,
        width: 50,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',

    },
    iconsearch: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        marginTop: 5,
        borderRadius: 10,


    },
    label: {
        fontWeight: '600',
        fontSize: 18,

        textTransform: 'uppercase',
        color: '#FFC75F'
    },
    labelList: {

        alignSelf: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '800',
        color: '#FFC75F',
        position: 'absolute',
        top: 250,
        bottom: 0,
        left: 10,
        right: 0,
        height: 40,
        marginBottom: 5,
        marginLeft: 50,

    }
})

export default Header;