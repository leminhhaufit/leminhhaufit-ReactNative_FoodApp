import React, { useContext, useState } from 'react'
import { Overlay } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import { Button } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SwitchSelector from "react-native-switch-selector";
import { NavContextKit } from '../navigation/KitchenStack';
import formatter from '../config/Currency';
import { AuthContext } from '../navigation/AuthProvider';
import db from '@react-native-firebase/database';
import Toast from 'react-native-toast-message';
import { NavContext } from '../navigation/AppStack';
export default function ItemPopular(props) {
    const { foodlist } = props;
    const { id, name, price,photoURL,description } = foodlist;
    const [visible, setVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [size, setSize] = useState('small');
    const { user:{uid} } = useContext(AuthContext);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
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
                name,
                quantity,
                price,
                size,
                create: curTime,
                photoURL,
                id
            }
            await db().ref(`order-temp/${uid}|${id}`).set(objFood);
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
             <NavContext.Consumer>
            {({ navigation }) =>
            <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate("Order",{screen:'FoodDetail2',params: { foodlist }})}>
                <Text style={styles.award}><FontAwesome5Icon name="pizza-slice" size={16} color="#F59507" /> Top 1 week</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.content}>{description} </Text>
                <Image style={styles.image} source={{uri:photoURL}} />
                <View style={styles.price}>
                    <Text style={styles.txtprice}>{formatter.format(price)} </Text>
                </View>
            </TouchableOpacity>
            }
            </NavContext.Consumer>
            <TouchableOpacity style={styles.btnadd} onPress={() => toggleOverlay()}>
                <FontAwesome5Icon name="plus" size={16} color="black" style={styles.iconplus} />
            </TouchableOpacity>
            <Overlay isVisible={visible} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay}>
                <View style={styles.labelfilter}>
                    <Text style={styles.textfilteroverlay}>Add Items:</Text>
                    <TouchableOpacity onPress={toggleOverlay} style={styles.iconoverlay}>
                        <FontAwesome5Icon size={26} name="times" color="#FFC75F" />
                    </TouchableOpacity>
                </View>
                <View style={styles.quantity}>
                    <TouchableOpacity onPress={() => onChangeQuantityPlus()}>
                        <FontAwesome5Icon style={styles.plus} name="plus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.quantitytext}>{quantity}</Text>
                    <TouchableOpacity onPress={() => onChangeQuantityMinus()}>
                        <FontAwesome5Icon name="minus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.price2}>{formatter.format(price * quantity)}</Text>
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
                <Button icon={<FontAwesome5Icon name="shopping-cart" size={22} color="#FFF" />} buttonStyle={styles.add} titleStyle={styles.titleadd} title="Add to cart" loading={loading} onPress={addOrderTemp}></Button>
            </Overlay>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft: 40,
        marginTop: 10,
        marginRight: 40,
        borderRadius: 25,
        height: 140,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    container2: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 140,
    },
    award: {
        fontSize: 16,
        fontWeight: '400',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 10,
        width: 200,
    },
    image: {
        position: 'absolute',
        width: 125,
        height: 125,
        right: -30,
        top: 7,
        borderRadius:100
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        width: 240,
    },
    content: {
        fontSize: 16,
        fontWeight: '300',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        opacity: 0.5
    },
    btnadd: {
        backgroundColor: "#FFC75F",
        width: 100,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    iconplus: {
        alignSelf: 'center',
        paddingTop: 15,
    },
    price: {
        position: 'absolute',
        bottom: 0,
        width: 80,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'flex-end',
        paddingTop: 13,
        fontSize: 17,
        fontWeight:'bold'
        
    },
    overlay: {
        backgroundColor: '#fff',
        height: 300,
        alignSelf: 'stretch',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 20,
    },
    textfilteroverlay: {
        flex: 8,
        color: '#FFC75F',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 15,
    },
    iconoverlay: {
        flex: 1,
        marginTop: 15,
    },
    quantitytext: {
        flex: 4,
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
    quantity: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    plus: {
        paddingLeft: 40,

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
        fontSize: 16
    },
    switchtext: {
        fontSize: 14
    },
    switchimg: {
        width: 20,
        height: 20,

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
    labelfilter: {
        flexDirection: 'row',
    },
    textfilter: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 13,
        textTransform: 'uppercase',
        paddingLeft: 5,
        paddingTop: 10,
        paddingRight: 10,
    },
    price2: {
        flex: 8,
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '700',
        alignItems: 'center',
        textAlign: 'center',
    },
})
