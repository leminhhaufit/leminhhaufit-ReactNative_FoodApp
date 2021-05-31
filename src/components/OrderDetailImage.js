import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import storage from '@react-native-firebase/storage';
export default function OrderDetailImage({route}) {
    const {key} = route.params;
    const [uri,setUri] = useState();
    console.log(key);
    useEffect(async () => {
        let imageRef = await storage().ref(`orders/${key}/order.png`);
        const url = await imageRef.getDownloadURL();
        setUri(url);
    },[])
    return (
        <Image style={styles.container} source={{uri}} />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 0.6, 
        resizeMode: 'contain',
        alignSelf:'center'
    }
})
