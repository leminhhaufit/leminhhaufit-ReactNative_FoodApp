import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import formatter from '../config/Currency';
import { Textarea, Form } from "native-base";
const width = Dimensions.get('window').width;
function ItemCart(props) {
    const { foodlist, onChangeQuantityPlus, onChangeQuantityMinus, deleteItem, setNote } = props;
    const { id, name, size, price, quantity, photoURL } = foodlist;
    const [note, setNoteLocal] = useState();

    return (
        <View style={styles.container} key={id}>
            <View>
                <Image source={{ uri: photoURL }}
                    style={styles.imgcart} />
            </View>
            <View style={styles.infor}>
                <Text style={styles.title}>{name}</Text>
                <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 10 }}>{size}</Text>
                <Form>
                    <TextInput placeholder="Ghi chú" style={styles.note} value={note} onChangeText={val => { setNoteLocal(val); setNote(val) }} />
                </Form>
            </View>
            <View style={styles.quantity}>
                <Text style={styles.price}>{formatter.format(price)}</Text>
                <TouchableOpacity onPress={onChangeQuantityPlus}>
                    <FontAwesome5 name="plus-circle" size={20} color="#FFC75F" />
                </TouchableOpacity>
                <Text style={styles.quantitytext}>{quantity}</Text>
                <TouchableOpacity onPress={onChangeQuantityMinus}>
                    <FontAwesome5 name="minus-circle" size={20} color="#FFC75F" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={deleteItem}>
                <View style={styles.delete}>
                    <FontAwesome5 style={styles.icondel} name="trash" size={20} color="#FFF" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        marginBottom: 15,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#F4F4F4',


    },
    imgcart: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        width: 100,
        height: 100,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    title: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        width: width / 4,
        height: 30,
    },
    note: {
        fontSize: 12,
        fontWeight: '400',
        opacity: 0.5,
        width: width / 4,
        height: 40,
        borderBottomColor: '#FFF',
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
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        opacity: 0.5,
        width: width / 10,
    },
    quantity: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingRight: 15,
        paddingLeft: 15,
    },
    delete: {
        display: 'flex',
        backgroundColor: "#FFC75F",
        width: 55,
        height: 100,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default ItemCart;