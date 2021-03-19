import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import passURL from '../assets/password.png';

Password.propTypes = {

};

function Password({ setPassword }) {
    return (

        <View style={styles.container}>


            <Text style={styles.label}>
                Password:
            </Text>
            <View style={styles.boxinput}>

                <Image style={styles.emailURL} source={passURL}>
                </Image>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.username} autoCapitalize="none" secureTextEntry placeholderStyle={styles.placeholderStyle} placeholder="Passsword" />
            </View>

        </View>


    );
}
var styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignSelf: 'stretch',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 13,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginLeft: 16,
        marginRight: 16
    },
    emailURL: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
        marginTop: 10,

    },
    label: {
        fontWeight: '300',
        marginLeft: 50,
        alignSelf: 'flex-start',
        marginBottom: 5,
        opacity: 0.5,
    },
    username: {
        alignSelf: 'stretch',
        width: 280,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 10,
        fontWeight: '800',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20,
        borderStyle: 'solid',
        borderBottomColor: 'orange',
        borderBottomWidth: 0.2,
    },
    boxinput: {
        flexDirection: 'row',
    },
    placeholderStyle: {
        fontWeight: '300',
        opacity: 0.5
    }
});

export default Password;