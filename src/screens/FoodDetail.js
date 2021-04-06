import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import SwitchSelector from "react-native-switch-selector";
import detail1IMG from '../assets/header5.png';
import iconpizza from '../assets/pizza.png';
export default function FoodDetail({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(199);

    function onChangeQuantityPlus() {
        setQuantity(quantity + 1);


    }
    function onChangeQuantityMinus() {
        setQuantity(quantity - 1);
        if (quantity === 0) {
            setQuantity(0);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.imgdetails}>
                <View >
                    <Image source={detail1IMG} style={styles.detail} />

                </View>
                <View style={{ position: 'absolute', top: 10, }}>
                    <TouchableOpacity >
                        <FontAwesome5 style={styles.plus} name="chevron-circle-left" size={36} color="#FFF" />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.infor}>
                <View >
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.content}>content</Text>
                </View>

                <View style={styles.quantity}>
                    <TouchableOpacity onPress={() => onChangeQuantityPlus()}>
                        <FontAwesome5 style={styles.plus} name="plus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.quantitytext}>{quantity}</Text>
                    <TouchableOpacity onPress={() => onChangeQuantityMinus()}>
                        <FontAwesome5 name="minus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.price}>{price * quantity}$</Text>
                </View>
                <SwitchSelector
                    initial={0}
                    //onPress={value => this.setState({ gender: value })}
                    textColor="#FFC75F" //'#7a44cf'
                    selectedColor="#fff"
                    buttonColor="#FFC75F"
                    borderColor="#FFC75F"
                    borderWidth={1.5}
                    hasPadding
                    options={[
                        { label: "Small", value: "small", },
                        { label: "Medium", value: "medium", },
                        { label: "Large", value: "large", },
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                    style={styles.switch}
                    selectedTextStyle={styles.switchtextselect}
                    textStyle={styles.switchtext}
                    imageStyle={styles.switchimg}
                />
                <View>
                    <Text style={styles.descriptionlabel}>Description</Text>
                    <Text style={styles.description}>Description Description Description Description Description Description Description Description Description Description DescriptionDescription </Text>
                    <Button icon={<FontAwesome5 name="shopping-cart" size={22} color="#FFF" />} buttonStyle={styles.add} titleStyle={styles.titleadd} title="Add to cart" loading={loading} onPress={() => setLoading(!loading)}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imgdetails: {
        flex: 1,
    },
    detail: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 350,
        width: 420
    },
    infor: {
        position: 'absolute',
        top: 300,
        height: 1000,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        backgroundColor: '#fff',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#FFC75F',
        paddingLeft: 40,
        paddingTop: 10,
        paddingRight: 17,
    },
    quantitytext: {
        flex: 0.2,
        fontWeight: 'bold',
        fontSize: 26,
        color: '#FFC75F',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        textAlign: 'center',
        elevation: 9,
    },
    price: {
        flex: 0.7,
        fontWeight: 'bold',
        fontSize: 26,
        color: '#FFC75F',
        alignSelf: 'stretch',
        textAlign: 'right',
    },
    content: {
        fontWeight: '200',
        fontSize: 14,
        opacity: 0.5,
        paddingLeft: 45,
    },
    quantity: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    plus: {
        paddingLeft: 40,

    },
    descriptionlabel: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#FFC75F',
        paddingLeft: 40,
        paddingTop: 10,
        paddingRight: 17,
    },
    description: {
        fontWeight: '200',
        fontSize: 14,
        opacity: 0.5,
        paddingLeft: 40,

        height: 130,
    },
    add: {
        marginTop: 40,
        backgroundColor: '#FFC75F',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    titleadd: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#FFF',
        paddingLeft: 20,
    },
    goback: {

        top: 0,
    },
    switch: {
        alignSelf: 'stretch',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        backgroundColor: '#fff',

    },
    switchtextselect: {
        fontWeight: 'bold',
        fontSize: 18
    },
    switchtext: {
        fontSize: 18
    },
    switchimg: {
        width: 20,
        height: 20,

    }
})
