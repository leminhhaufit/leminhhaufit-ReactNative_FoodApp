import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemOrdersManage from './ItemOrdersManage';
import staff from '../assets/managestafftrans.png';
import { FlatList } from 'react-native';
export default function FlatListOrdersManage() {
    const [orderslist, setOrderslist] = useState(
        [
            {
                id: 1,
                ordersid: "HD11111",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 2,
                ordersid: "HD11112",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 3,
                ordersid: "HD11113",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 4,
                ordersid: "HD11114",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 5,
                ordersid: "HD11115",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 6,
                ordersid: "HD11116",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 7,
                ordersid: "HD11117",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 8,
                ordersid: "HD11118",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 9,
                ordersid: "HD11119",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
            {
                id: 10,
                ordersid: "HD11110",
                nameStaff: "Minh Hau",
                createDate: "24-10-1999",
                price: "199",
            },
        ]
    )
    return (
        <FlatList data={orderslist}
            numColumns={1}
            renderItem={({ item }) => <ItemOrdersManage orderslist={item} />}
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
