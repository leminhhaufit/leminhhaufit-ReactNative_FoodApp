import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NavContextAdmin } from '../navigation/AdminStack';
import CardUser from './CardUser'
export default function ItemStaffManage(props) {
    const { stafflist } = props;
    //#375A45 green #E35929 red
    const { uid, name, address, phone, status, photoURL,type,active } = stafflist;
    let icon = "#375A45";
    if (status == true) {
        icon = "#E35929";
    }
    return (
            <CardUser uid={uid} format={true} name={name} type={type} avatar={photoURL} active={active} changeAvatar={()=>{}} />
            
            // <View style={styles.btn}>
            //     {/* <TouchableOpacity style={styles.btndel}>
            //         <FontAwesome5Icon name="trash" size={32} color="#FFF" style={styles.iconplus} />
            //     </TouchableOpacity>
            //     <NavContextAdmin.Consumer>
            //         {({ navigation }) =>
            //             <TouchableOpacity
            //                 onPress={() => navigation.navigate("FormStaff", { title: "Update Category" })}
            //                 style={styles.btndel}>
            //                 <FontAwesome5Icon name="pen-alt" size={32} color="#FFF" style={styles.iconplus} />
            //             </TouchableOpacity>}
            //     </NavContextAdmin.Consumer>  */}
    )
}
const styles = StyleSheet.create({
})
