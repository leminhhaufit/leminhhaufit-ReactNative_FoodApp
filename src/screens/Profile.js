import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import HeaderProfiles from '../components/HeaderProfiles';
import MoreProfiles from '../components/MoreProfiles';
export default function Profile() {
    return (
        <View style={styles.container}>
            <HeaderProfiles />
            <MoreProfiles />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1,

    }
})
