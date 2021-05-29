import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Switch } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputForm = ({name,quantity,action}) => {
    return (
    <View style={styles.details}>
        <Text style={styles.content}>{name+':'}</Text>
        <TextInput
            style={styles.textInput}
            keyboardType='numeric'
            onChangeText={(text) => {action(text)}}
            value={quantity.toString()}
            mode='outlined'
            selectionColor='#FFF'
            theme={{ colors: { placeholder: 'white', text: 'white', primary: 'white', underlineColor: 'transparent', background: '#FFC75F' } }}

        />
    </View>
    );
}
const styles = StyleSheet.create({
    details: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    content: {
        fontSize: 18,
        fontWeight: '300',
        padding: 5,
    },
    textInput : {
        width:50,
        height:30,
        marginRight:5,
        marginBottom:5
    }
})

export default InputForm;