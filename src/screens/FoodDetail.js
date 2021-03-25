import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';

import detail1IMG from '../assets/header5.png';

export default function FoodDetail({ navigation }) {
    const [loading, setLoading] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.imgdetails}>
                <View >
                    <Image source={detail1IMG} style={styles.detail} />

                </View>
                <View style={{ position: 'absolute', top: 10, }}>
                    <TouchableOpacity>
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
                    <TouchableOpacity>
                        <FontAwesome5 style={styles.plus} name="plus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.quantitytext}>10</Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="minus-circle" size={36} color="#FFC75F" />
                    </TouchableOpacity>
                    <Text style={styles.price}>100$</Text>
                </View>
                <View>
                    <Text style={styles.descriptionlabel}>Description</Text>
                    <Text style={styles.description}>Description Description Description Description Description Description Description Description Description Description DescriptionDescription </Text>
                    <Button buttonStyle={styles.add} titleStyle={styles.titleadd} title="Add to cart" loading={loading} onPress={() => setLoading(!loading)}></Button>
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
        fontWeight: 'bold',
        fontSize: 26,
        color: '#FFC75F',
        paddingLeft: 10,
        paddingRight: 10,

    },
    price: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#FFC75F',
        paddingLeft: 150,
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

    },
    goback: {

        top: 0,
    }
})
