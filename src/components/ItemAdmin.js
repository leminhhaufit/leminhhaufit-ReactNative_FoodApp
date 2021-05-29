import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NavContextAdmin } from '../navigation/AdminStack';
export default function ItemFoodManage(props) {
    const { adminlist } = props;

    const { id, title, description, status, url, icon } = adminlist;
    return (
        <NavContextAdmin.Consumer>
            {({ navigation }) =>
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Staff')}>
                    <View style={styles.container2}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.content}>{description} </Text>
                        <Image style={styles.image} source={url} />
                        <View style={styles.btnadd}>
                            <FontAwesome5Icon name={icon} size={36} color="#FFF" style={{ alignSelf: 'center', paddingTop: 5, }} />
                        </View>
                    </View>
                </TouchableOpacity>
            }
        </NavContextAdmin.Consumer>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft: 40,
        //marginTop: 20,
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
        marginBottom: 40,
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
        width: 120,
        height: 120,
        right: -35,
        top: 10,
    },
    title: {
        fontSize: 26,
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
        opacity: 0.5,
        width: 250,
        height: 60,
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
        width: 100,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },

})
