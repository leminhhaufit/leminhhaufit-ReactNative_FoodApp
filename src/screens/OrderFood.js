import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlatListItemFood from '../components/FlatListItemFood';
import { ScrollView } from 'react-native';


export default function OrderFood() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <FlatListItemFood />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
})
