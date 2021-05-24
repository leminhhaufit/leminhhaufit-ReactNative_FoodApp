import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemKitchen from './ItemKitchen';
import food1IMG from '../assets/detail1trans.png';
import { FlatList } from 'react-native';
import db from '@react-native-firebase/database';
import CardOrder from '../components/CardOrder';
import _ from 'lodash';
export default function FlatListFilterPopular() {
    const [orders, setOrders] = useState(
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
            }
        ]

    )

    useEffect(() => {
        db().ref('/orders').on('value',async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                const status = _.get(value,'status');
                if (!(status === 'completed')) {
                    orders.push({...value,key});
                } 
              } 
              setOrders(orders);
        })
    },[])

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
    //reserve={() => reserve(item)}
    return (
        <FlatList data={orders}
            numColumns={1}
            renderItem={({ item }) => <CardOrder foodlist={item} />}
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
