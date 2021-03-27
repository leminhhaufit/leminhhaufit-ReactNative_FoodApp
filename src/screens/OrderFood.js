import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header';
import FlatListItemFood from '../components/FlatListItemFood';


export default function OrderFood() {

    return (
        <View style={styles.container}>
            <Header title="Food List" />
            <FlatListItemFood />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        justifyContent: 'center',

    },
})
