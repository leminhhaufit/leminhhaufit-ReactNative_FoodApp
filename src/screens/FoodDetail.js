import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import SwitchSelector from "react-native-switch-selector";
import formatter from '../config/Currency';
import db from '@react-native-firebase/database';
import Toast from 'react-native-toast-message';
import { AuthContext } from '../navigation/AuthProvider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function FoodDetail({ route, navigation }) {
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('small');
    const { user, setUser } = useContext(AuthContext);
    const { uid } = user;
    const {  foodlist } = route.params;

    function onChangeQuantityPlus() {
        setQuantity(quantity + 1);


    }
    function onChangeQuantityMinus() {
        setQuantity(quantity - 1);
        if (quantity === 1) {
            setQuantity(1);
        }

    }

    const addOrderTemp = async () => {
        try {
            setLoading(true);
            const curTime = new Date().getTime();
            const objFood = {
                uid,
                name: foodlist.name,
                quantity,
                price:foodlist.price,
                size,
                create: curTime,
                photoURL: foodlist.photoURL,
                id: foodlist.id
            }
            await db().ref(`order-temp/${uid}|${foodlist.id}`).set(objFood);
            setLoading(false);
            Toast.show({
                type: 'success',
                text1: 'Item added successfully 👋',
                autoHide: true,
            });

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.imgdetails}>
                <View >
                    <Image source={{uri:foodlist.photoURL}} style={styles.detail} />

                </View>
                {/* <View style={{ position: 'absolute', top: 10, }}>
                    <NavContext.Consumer>
                        {({ navigation }) => <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome5 style={styles.plus} name="chevron-circle-left" size={25} color="#FFF" />
                        </TouchableOpacity>}
                    </NavContext.Consumer>
                </View> */}
            </View>

            <View style={styles.infor}>
                <View >
                    <Text style={styles.title}>{foodlist.name}</Text>
                    <Text style={styles.content}>{foodlist.description}</Text>
                </View>

                <View style={styles.quantity}>
                    <TouchableOpacity onPress={() => onChangeQuantityPlus()}>
                        <FontAwesome5 style={styles.plus} name="plus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.quantitytext}>{quantity}</Text>
                    <TouchableOpacity onPress={() => onChangeQuantityMinus()}>
                        <FontAwesome5 name="minus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.price}>{formatter.format(foodlist.price * quantity)}</Text>
                </View>
                <SwitchSelector
                    initial={0}
                    onPress={value => setSize(value)}
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
                        <Text style={styles.descriptionlabel}>Ingredient</Text>
                        <Text style={styles.description}>{foodlist.ingredient}</Text>
                        <Button icon={<FontAwesome5 name="shopping-cart" size={22} color="#FFF" />} buttonStyle={styles.add} titleStyle={styles.titleadd} title="Add to cart" loading={loading} onPress={addOrderTemp} />
                    </View>
                    {/* CHIA 3 MAN HINH 3 NUT (NUT ADD O USER | NUT THAYDOITRANGTHAIMONAN O KITCHEN | NUT CHINH SUA O ADMIN)
                    
                    <Button icon={<FontAwesome5 name="power-off" size={22} color="#FFF" />} buttonStyle={styles.add} titleStyle={styles.titleadd} title="CHANGE STATUS" loading={loading} onPress={() => setLoading(!loading)}></Button>
                    <Button icon={<FontAwesome5 name="pen-alt" size={22} color="#FFF" />} buttonStyle={styles.add} titleStyle={styles.titleadd} title="UPDATE" loading={loading} onPress={() => setLoading(!loading)}></Button> */}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    imgdetails: {
        flex: 1,
    },
    detail: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 250,
        width: width
    },
    infor: {
        position: 'absolute',
        top:200,
        width:width,
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
        paddingLeft: 10,

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
        minHeight: 10,
    },
    add: {
        marginTop: 10,
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