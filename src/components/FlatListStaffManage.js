import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemStaffManage from './ItemStaffManage';
import staff from '../assets/managestafftrans.png';
import { FlatList } from 'react-native';
export default function FlatListFoodManage() {
    const [stafflist, setStafflist] = useState(
        [
            {
                id: 1,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 2,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 3,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 4,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 5,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 6,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 7,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 8,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 9,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
            {
                id: 10,
                name: "Minh Hau",
                address: "HCM",
                phone: "0123456789",
                status: true,
                avatar: staff,
            },
        ]

    )
    return (
        <FlatList data={stafflist}
            numColumns={1}
            renderItem={({ item }) => <ItemStaffManage stafflist={item} />}
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
