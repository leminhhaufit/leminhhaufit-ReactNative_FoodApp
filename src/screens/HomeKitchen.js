import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlatListKitChen from '../components/FlatListKitchen';
import HeaderKitchen from '../components/HeaderKitchen';
export default function HomeKitchen() {
    return (
        <View style={styles.container}>
            <HeaderKitchen />
            <FlatListKitChen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
