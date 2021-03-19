import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';


import PropTypes from 'prop-types';
import emailURL from '../assets/email.png';

Username.propTypes = {

};

function Username({ setEmail }) {
    return (

        <View style={styles.container}>


            <Text style={styles.label}>
                Username:
            </Text>
            <View style={styles.boxinput}>

                <Image style={styles.emailURL} source={emailURL}>
                </Image>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.username} keyboardType="email-address" placeholder="Username" />
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
        borderBottomColor: '#FFC75F',
        borderBottomWidth: 0.2,
    },
    boxinput: {
        flexDirection: 'row',
    }
});

export default Username;