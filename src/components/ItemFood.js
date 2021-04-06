import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { Overlay } from 'react-native-elements';
import tableImg from '../assets/table.png';
import dotredImg from '../assets/dotred.png';
import dotgreen from '../assets/dotgreen.png';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SwitchSelector from "react-native-switch-selector";
import { Button } from 'react-native-elements';
ItemFood.propTypes = {

};

function ItemFood(props) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { foodlist, reserve } = props;
    const { id, title, description, price, material, status, url } = foodlist;
    let urlstatus;
    //status == true đang sử dụng
    //status ==false chưa sử dụng
    if (status == true) {
        urlstatus = dotredImg;
    } else {
        urlstatus = dotgreen;
    }
    const toggleOverlay = () => {
        setVisible(!visible);
    };
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
        <View>
            <TouchableOpacity onPress={reserve}>
                <View style={styles.container} key={id}>
                    <Image source={url} style={styles.imgtable} />
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.content}>
                        <Text style={styles.price}>{price}$</Text>
                        <Image source={urlstatus} style={styles.dotImg} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconplus} onPress={() => toggleOverlay()}>
                <FontAwesome5Icon name="plus-circle" size={50} color="#FFC75F" />
            </TouchableOpacity>
            <Overlay isVisible={visible} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay}>
                <View style={styles.labelfilter}>
                    <Text style={styles.textfilteroverlay}>Order by:</Text>
                    <TouchableOpacity onPress={toggleOverlay} style={styles.iconoverlay}>
                        <FontAwesome5 size={26} name="times" color="#FFC75F" />
                    </TouchableOpacity>
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
                <Button icon={<FontAwesome5 name="shopping-cart" size={22} color="#FFF" />} buttonStyle={styles.add} titleStyle={styles.titleadd} title="Add to cart" loading={loading} onPress={() => setLoading(!loading)}></Button>
            </Overlay>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 30,
        alignSelf: 'stretch',
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

    },
    imgtable: {
        width: 100,//56
        height: 100,

    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignItems: 'center',
    },
    dotImg: {
        flex: 1,
        width: 18,
        height: 18,
        marginTop: 5,
        marginRight: 15,
    },
    price: {
        flex: 8,
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '700',
        alignItems: 'center',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    iconplus: {
        position: 'absolute',
        right: -5,
        top: 0,
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
    overlay: {
        backgroundColor: '#fff',
        height: 300,
        alignSelf: 'stretch',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 60,
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
        fontSize: 18
    },
    switchtext: {
        fontSize: 18
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
})
export default ItemFood;