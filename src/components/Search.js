import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

import PropTypes from 'prop-types';

import foodImg from '../assets/food.png';
Search.propTypes = {

};

function Search(props) {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image source={foodImg} style={styles.icon} />
            </View>
            <TextInput style={styles.inputSearch}
                placeholderStyle={styles.placeholder}
                placeholder="Search here" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'stretch',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    inputSearch: {
        paddingLeft: 5,
        paddingRight: 5,
        width: 200,
        height: 40,
        borderStyle: 'solid',
        borderColor: '#FFC75F',
        borderWidth: 1,
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
    placeholder: {
        opacity: 0.5,
        fontWeight: '500'
    }

})
export default Search;