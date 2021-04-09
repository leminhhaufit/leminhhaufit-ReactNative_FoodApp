import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { FAB } from 'react-native-paper';
import header3IMG from '../assets/header3.png';
import FlatListFoodManage from '../components/FlatListFoodManage';
import Header from '../components/Header';
import { Fab } from 'native-base';
export default function ManageFood() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Header title="List Food" />
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                    animated={true}
                />
            </View>

            <View style={styles.content}>
                <FlatListFoodManage />

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
    },
    imgtop: {
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 250,
    },
    content: {
        marginTop: 20,
        flex: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    fab: {
        position: 'absolute',

        margin: 16,
        right: 0,
        bottom: 0,
    },
})
