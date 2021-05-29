import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import HeaderProfiles1 from '../components/HeaderProfiles1';
export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <HeaderProfiles1 navigation={navigation} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1,

    }
})
