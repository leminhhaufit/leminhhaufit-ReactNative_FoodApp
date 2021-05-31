import React,{useContext} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import foodImg from '../assets/food.png';
import searchIMG from '../assets/loupe.png';
import { AuthContext } from '../navigation/AuthProvider';
export default function HeaderKitchen() {
    const {user:{uid,name}} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Hello, {name}</Text>
            <Text style={styles.title}>Fast & Delicious Food!</Text>
            <View style={styles.container1}>
                <View style={styles.img}>
                    <Image source={foodImg} style={styles.icon} />
                </View>
                <TextInput style={styles.inputSearch}
                    placeholderStyle={styles.placeholdercustom}
                    placeholder="Search here" />
                <TouchableOpacity style={styles.btnsearch}>
                    <View style={styles.imgsearch}>
                        <Image source={searchIMG} style={styles.iconsearch} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingBottom: 20,
    },
    hello: {
        fontSize: 26,
        opacity: 0.7,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingTop: 40,

    },
    container1: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'stretch',
        borderRadius: 25,
        height: 50,
        width: 330,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    inputSearch: {
        paddingLeft: 5,
        paddingRight: 5,
        width: 220,
        height: 50,
        borderStyle: 'solid',
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        fontSize: 18,
        fontWeight: '600',
    },
    icon: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        marginTop: 7,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    img: {
        height: 50,
        width: 50,
        backgroundColor: '#FFC75F',
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
    },
    imgsearch: {
        height: 50,
        width: 60,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,

    },
    iconsearch: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        marginTop: 7,
        borderRadius: 10,

    },
})
