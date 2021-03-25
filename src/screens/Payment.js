import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import FlatListItemCart from '../components/FlatListItemCart';
export default function Payment() {
    return (

        <View style={styles.container}>

            <FlatListItemCart />

            <View style={styles.infor}>
                <Text style={styles.title}>Price Details:</Text>
                <View style={styles.details}>

                    <Text style={styles.content}>Sub total:</Text>

                    <Text style={styles.price}>199$</Text>

                </View>
                <View style={styles.details}>

                    <Text style={styles.content}>Service fee:</Text>

                    <Text style={styles.price}>199$</Text>

                </View>
                <View style={styles.details}>

                    <Text style={styles.content}>Tax:</Text>

                    <Text style={styles.price}>199$</Text>
                </View>

                <Text style={styles.promotion}>Have a promocode?</Text>
            </View>
            <View style={styles.payment}>
                <View style={styles.details}>

                    <Text style={styles.titletotal}>199$</Text>

                    <Button buttonStyle={styles.pay} titleStyle={styles.titleadd} title="Payment" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',

    },
    infor: {
        marginLeft: 10,
        marginRight: 10,
        height: 200,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        marginTop: 50,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        borderBottomColor: '#FFC75F',
        borderBottomWidth: 0.8,
        borderStyle: 'solid',
    },
    titletotal: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,

    },
    content: {
        fontSize: 18,
        fontWeight: '300',
        padding: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: '300',
        padding: 5,
        alignSelf: 'stretch',
        textAlign: 'right'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
    },
    promotion: {
        color: '#FFC75F',
        fontSize: 22,
        textAlign: 'center',

    },
    payment: {

        borderTopColor: '#FFC75F',
        borderTopWidth: 0.8,
        borderStyle: 'solid',
    },
    pay: {
        backgroundColor: "#FFC75F",
        marginTop: 10,
    },
    titleadd: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#FFF',

    },
})
