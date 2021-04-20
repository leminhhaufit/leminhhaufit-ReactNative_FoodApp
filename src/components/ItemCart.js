import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import detail1IMG from '../assets/detail1.png';
import { Textarea, Form } from "native-base";
function ItemCart(props) {
    const { foodlist, onChangeQuantityPlus, onChangeQuantityMinus, deleteItem } = props;
    const { id, title, note, price, quantity } = foodlist;

    return (
        <View style={styles.container} key={id}>
            <View>
                <Image source={detail1IMG}
                    style={styles.imgcart} /></View>
            <View style={styles.infor}>
                <Text style={styles.title}>{title}</Text>
                <Form>
                    <Textarea rowSpan={2} placeholder="Notes" style={styles.note} value={note} />
                </Form>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={styles.quantity}>
                <TouchableOpacity onPress={onChangeQuantityPlus}>
                    <FontAwesome5 name="plus-circle" size={36} color="#FFC75F" />
                </TouchableOpacity>
                <Text style={styles.quantitytext}>{quantity}</Text>
                <TouchableOpacity onPress={onChangeQuantityMinus}>
                    <FontAwesome5 name="minus-circle" size={36} color="#FFC75F" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={deleteItem}>
                <View style={styles.delete}>
                    <FontAwesome5 style={styles.icondel} name="trash" size={36} color="#FFF" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        marginBottom: 15,
        marginRight: 5,
        marginLeft: 10,
        marginTop: 5,
        alignSelf: 'stretch',
        borderRadius: 15,
        backgroundColor: '#F4F4F4',


    },
    imgcart: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        width: 100,
        height: 120,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    title: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        width: 100,
    },
    note: {
        fontSize: 12,
        fontWeight: '400',
        opacity: 0.5,
        width: 100,
        height: 60,
        borderBottomColor: '#FFC75F',
        borderBottomWidth: 1,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infor: {
        backgroundColor: "#FFF",
        paddingLeft: 10,
    },
    quantitytext: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'black',
        textAlign: 'center',
        opacity: 0.5,
        width: 50,
    }, quantity: {
        flexDirection: 'row',

        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingRight: 5,
    },
    delete: {
        backgroundColor: "#FFC75F",
        width: 55,
        height: 120,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    icondel: {
        alignSelf: 'center',
        paddingTop: 40,
    },

})
export default ItemCart;