import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
LabelLogin.propTypes = {

};

function LabelLogin(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Login
            </Text>
            <Text style={styles.labelDes}>
                Please sign in to continue
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 30,
    },
    label: {
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 30,
        color: '#FFC75F',

    },
    labelDes: {
        textTransform: 'uppercase',
        fontWeight: '200',
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 40,

    }
});
export default LabelLogin;