import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import FlatListItemCart from '../components/FlatListItemCart';
export default function Payment({ navigation }) {
    return (

        <View style={styles.container}>
            <Text style={styles.title2}>Food Cart</Text>
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

                    <Text style={styles.titletotal}>1999999999$</Text>

                    <Button buttonStyle={styles.pay} titleStyle={styles.titleadd}
                        title="Payment"
                        onPress={() => navigation.navigate('FoodDetail')}
                    />
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
    title2: {
        fontSize: 32,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    titletotal: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        flex: 7,

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
        textAlign: 'right',
        position: 'absolute',
        right: 0,
    },
    details: {
        flexDirection: 'row',
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
        marginTop: 5,
        flex: 3,
        backgroundColor: "#FFC75F",
        width: 200,
        alignItems: 'stretch',
        borderRadius: 25,
    },
    titleadd: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        padding: 10,
    },
})
