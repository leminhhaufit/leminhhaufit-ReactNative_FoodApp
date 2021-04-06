import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemAdmin from './ItemAdmin';
import food1IMG from '../assets/detail1trans.png';
import { FlatList } from 'react-native';
export default function FlatListAdmin() {
    const [adminlist, setAdminlist] = useState(
        [
            {
                id: 1,
                title: "Manage Staff",
                description: "Giòn viền, dẻo nhân",
                status: true,
                url: food1IMG,
                icon: "users-cog",
            },
            {
                id: 2,
                title: "Manage Category",
                description: "Giòn viền, dẻo nhân",
                status: true,
                url: food1IMG,
                icon: "swatchbook",
            },
            {
                id: 3,
                title: "Manage Food",
                description: "Giòn viền, dẻo nhân",
                status: true,
                url: food1IMG,
                icon: "pizza-slice",
            },
            {
                id: 4,
                title: "Statisitc",
                description: "Giòn viền, dẻo nhân",
                status: true,
                url: food1IMG,
                icon: "chart-line",
            },
            {
                id: 5,
                title: "Orders Details",
                description: "Giòn viền, dẻo nhân",
                status: true,
                url: food1IMG,
                icon: "info-circle",
            },

        ]

    )
    return (
        <FlatList data={adminlist}
            numColumns={1}
            renderItem={({ item }) => <ItemAdmin adminlist={item} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}

        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        marginTop: 110,
    },
})
