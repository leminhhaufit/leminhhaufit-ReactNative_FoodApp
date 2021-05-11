import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FlatListAdmin from '../components/FlatListAdmin';
import Header from '../components/Header';
export default function HomeAdmin() {
    return (
        <View style={styles.container}>
            <Header title="Admin List" />
            <FlatListAdmin />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
