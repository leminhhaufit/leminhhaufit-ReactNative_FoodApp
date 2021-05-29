import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemPopular from './ItemPopular';
import food1IMG from '../assets/detail1trans.png';
import { FlatList } from 'react-native';
export default function FlatListFilterPopular() {
    const [foodlist, setFoodlist] = useState(
        [
            {
                id: 1,
                title: "Pizza 1",
                description: "Giòn viền, dẻo nhân",
                price: "199",
                material: "Bột cao cấp, Cá hồi",
                status: true,
                url: food1IMG,
            },
            {
                id: 2,
                title: "Pizza 2",
                description: "Giòn viền, dẻo nhân",
                price: "199",
                material: "Bột cao cấp, Cá hồi",
                status: true,
                url: food1IMG,
            },
            {
                id: 3,
                title: "Pizza 3",
                description: "Giòn viền, dẻo nhân",
                price: "199",
                material: "Bột cao cấp, Cá hồi",
                status: true,
                url: food1IMG,
            },
            {
                id: 4,
                title: "Pizza 4",
                description: "Giòn viền, dẻo nhân",
                price: "199",
                material: "Bột cao cấp, Cá hồi",
                status: true,
                url: food1IMG,
            },
            {
                id: 5,
                title: "Pizza 5",
                description: "Giòn viền, dẻo nhân",
                price: "199",
                material: "Bột cao cấp, Cá hồi",
                status: true,
                url: food1IMG,
            }
        ]

    )
    return (
        <FlatList data={foodlist}
            numColumns={1}
            renderItem={({ item }) => <ItemPopular foodlist={item} />}
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
