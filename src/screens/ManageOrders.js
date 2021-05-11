import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import FlatListOrdersManage from '../components/FlatListOrdersManage';
import Header from '../components/Header';

export default function ManageOrders() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.top}>
                    <Header title="List Food" />
                </View>
                <View style={styles.content}>
                    <FlatListOrdersManage />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    container2: {
        flex: 1,
    },
    imgtop: {
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 250,
    },
    content: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    btnadd: {
        height: 75,
        width: 75,
        borderRadius: 40,
        backgroundColor: '#FFC75F'
    },

})
