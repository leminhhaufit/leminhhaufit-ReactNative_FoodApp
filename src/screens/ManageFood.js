import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import FlatListFoodManage from '../components/FlatListFoodManage';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function ManageFood() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container2}>
                <View style={styles.top}>
                    <Header title="List Food" />

                </View>

                <View style={styles.content}>
                    <FlatListFoodManage />

                </View>

            </ScrollView>
            <View style={styles.fixedbutton}>
                <Button icon={<FontAwesome5 name="plus-circle" size={50} color="#FFF" style={styles.iconadd} />} buttonStyle={styles.btnadd} />
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
    fixedbutton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20,
        borderRadius: 40,

    },
    btnadd: {
        height: 75,
        width: 75,
        borderRadius: 40,
        backgroundColor: '#FFC75F'
    },
    iconadd: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 40,
        elevation: 4,
    }
})
