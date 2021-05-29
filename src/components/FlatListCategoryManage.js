import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemCategoryManage from './ItemCategoryManage';
import staff from '../assets/managestafftrans.png';
import { FlatList } from 'react-native';
export default function FlatListCategoryManage() {
    const [catelist, setCatelist] = useState(
        [
            {
                id: 1,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 2,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 3,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 4,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 5,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 6,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 7,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 8,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 9,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
            {
                id: 10,
                name: "Seafood",
                description: "South Ocean Islands",
                status: true,
            },
        ]
    )
    return (
        <FlatList data={catelist}
            numColumns={1}
            renderItem={({ item }) => <ItemCategoryManage catelist={item} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}
        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
    },
})
