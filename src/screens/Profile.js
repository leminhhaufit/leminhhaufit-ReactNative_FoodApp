import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import HeaderProfiles from '../components/HeaderProfiles';
import HeaderProfiles1 from '../components/HeaderProfiles1';
import MoreProfiles from '../components/MoreProfiles';
export default function Profile() {
    return (
        <View style={styles.container}>
            <HeaderProfiles1 />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1,

    }
})
