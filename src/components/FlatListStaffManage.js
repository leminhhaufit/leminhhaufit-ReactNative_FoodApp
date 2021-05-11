import React, { useState,memo,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemStaffManage from './ItemStaffManage';
import staff from '../assets/managestafftrans.png';
import { FlatList } from 'react-native';
import db from '@react-native-firebase/database';
function FlatListFoodManage() {
    const [stafflist, setStafflist] = useState([])
    useEffect(() => {
        db().ref('/users').once('value').then(async (data) => {
            const usersJson = await data.toJSON();
            const users = [];
            for (const [key, value] of Object.entries(usersJson)) {
                users.push(value);
              }
              setStafflist(users);
        })
    })
    return (
        <FlatList data={stafflist}
            numColumns={1}
            renderItem={({ item }) => <ItemStaffManage stafflist={item} />}
            keyExtractor={item => item.uid}
            style={styles.flatlist}
            scrollEnabled={true}
        />
    )
}
export default memo(FlatListFoodManage)

const styles = StyleSheet.create({
})
