import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemCategoryManage from './ItemCategoryManage';
import staff from '../assets/managestafftrans.png';
import { FlatList } from 'react-native';
import db from '@react-native-firebase/database';
export default function FlatListCategoryManage() {
    const [catelist, setCatelist] = useState(
        [
            {
                id: 1,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            }
]
    )

    useEffect(() => {
        db().ref('/category').on('value',async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                orders.push({...value,key});
              } 
              setCatelist(orders);
        })
    },[])
    return (
        <FlatList data={catelist}
            numColumns={1}
            renderItem={({ item }) => <ItemCategoryManage catelist={item} />}
            keyExtractor={item => item.key}
            style={styles.flatlist}
        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
    },
})
