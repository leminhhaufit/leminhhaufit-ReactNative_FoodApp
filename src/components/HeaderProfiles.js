import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import header2IMG from '../assets/header2.jpg';

const width = Dimensions.get('window').width;

export default function HeaderProfiles() {
    return (
        <View style={styles.container} >
            <View>
                <Image source={header2IMG}
                    style={styles.imgcart} />
                <View style={styles.avatar}>
                    <Avatar
                        size="large"
                        rounded
                        activeOpacity={0}
                    />
                </View>
                <View style={styles.avatar2}>
                    <Avatar
                        size="large"
                        rounded
                        icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
                        overlayContainerStyle={{ backgroundColor: '#FFC75F', opacity: 1, }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />

                </View>
                <Text style={styles.name}>Minh Hậu</Text>
                <View style={styles.infor}>
                    <FontAwesome5 name="map-marker-alt" size={16} color="#FFC75F" />
                    <Text style={styles.address}>Tp.HCM</Text>
                    <FontAwesome5 name="user-alt" size={16} color="#FFC75F" />
                    <Text style={styles.address}>Age: 22</Text>

                    <Text style={styles.roles}>Phục vụ</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginLeft: 5,
        marginRight: 5,
        elevation: 3,
    },
    imgcart: {
        width: width,
        height: 150,
        alignSelf: 'stretch',
        borderRadius: 25,
    },
    avatar: {
        position: 'absolute',
        right: width/2 - 50 ,
        top: 110,
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#FFC75F',
        borderWidth: 1,
        borderColor: '#FFC75F',
        borderStyle: 'solid',
        opacity: 0.5,

    },
    avatar2: {
        position: 'absolute',
        right: width/2 - 50,
        top: 110,
        borderRadius: 50,
        padding: 10,

    },
    name: {
        position: 'absolute',
        right: width/2 -50 ,
        top: 205,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFC75F',
    },
    infor: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 90,
        paddingBottom: 20,
    },
    address: {
        paddingRight: 10,
        color: 'black',
        paddingLeft: 10,
        opacity: 0.5,
        fontWeight: '300'
    },
    roles: {
        paddingRight: 10,
        color: '#e97067',
        paddingLeft: 10,
        //opacity: 0.4,
        fontWeight: 'bold',
        backgroundColor: '#ffe5e3',
        borderRadius: 20,
    },
})
