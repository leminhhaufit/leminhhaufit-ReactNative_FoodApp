import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FlatListKitChen from '../components/FlatListKitchen';
import HeaderKitchen from '../components/HeaderKitchen';
export default function HomeKitchen() {
    return (
        <ScrollView style={styles.container}>
            <HeaderKitchen />
            <FlatListKitChen />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
