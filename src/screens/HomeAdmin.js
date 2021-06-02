import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FlatListAdmin from '../components/FlatListAdmin';
import Header from '../components/Header';
export default function HomeAdmin() {
    return (
        <ScrollView style={styles.container}>
            <Header title="Danh sách quản lý" />
            <FlatListAdmin />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
