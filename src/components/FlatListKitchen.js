import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemKitchen from './ItemKitchen';
import food1IMG from '../assets/detail1trans.png';
import { FlatList } from 'react-native';
export default function FlatListFilterPopular() {
    const [foodlist, setFoodlist] = useState(
        [
            {
                id: 1,
                title: "Pizza 1",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 2,
                title: "Pizza 2",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 3,
                title: "Pizza 3",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 4,
                title: "Pizza 4",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 5,
                title: "Pizza 5",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 6,
                title: "Pizza 6",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 7,
                title: "Pizza 7",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 8,
                title: "Pizza 8",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 9,
                title: "Pizza 9",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 10,
                title: "Pizza 10",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 11,
                title: "Pizza 1111 111 11 11",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
            {
                id: 12,
                title: "Pizza 12",
                description: "Giòn viền, dẻo nhân",
                note: "Nhiều tương ớt",
                price: "199",
                quantity: 2,
                material: "Bột cao cấp, Cá hồi",
                status: false,
                url: food1IMG,
            },
        ]

    )
    const [isActive, setIsActive] = useState(false);
    function reserve(item) {
        const status = item.status;
        const index = foodlist.indexOf(item);
        if (status) {
            setIsActive(true);
        } else {
            setFoodlist(
                [
                    ...foodlist.slice(0, index),
                    {
                        ...item,
                        status: true //status
                    },
                    ...foodlist.slice(index + 1)
                ])
            foodlist.splice(index, 1);
            setFoodlist([
                ...foodlist
            ])
        }

    }
    return (
        <FlatList data={foodlist}
            numColumns={1}
            renderItem={({ item }) => <ItemKitchen foodlist={item} reserve={() => reserve(item)} />}
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
