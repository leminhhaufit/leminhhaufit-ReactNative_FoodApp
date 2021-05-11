import React, {useContext,useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, ImageBackground, TextInput , Text, View, Image, TouchableOpacity,Dimensions,PermissionsAndroid } from 'react-native';


export default function ProfileButton({text,icon,cb}) {
    return (
        <TouchableOpacity style={styles.box} activeOpacity={0.9} onPress={cb}>
            <View style={styles.v1}>
                <FontAwesome5 name={icon} solid size={24} color="#CED4DA" />
                <Text style={styles.textProfile}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#FFF',
        flexBasis: '40%',
        margin:5,
        flexShrink:1,
        height:100,
        borderRadius:5,
        elevation:2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#458',
        borderWidth:0.3
    },
    textProfile : {
        fontSize:15,
        fontWeight:'bold',
        color:'#AAB5BE',
        marginVertical:4
    },
    v1:{
        justifyContent:'center',
        alignItems:'center',
    }
})