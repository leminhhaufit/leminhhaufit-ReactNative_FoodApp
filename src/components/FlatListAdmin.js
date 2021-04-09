import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemAdmin from './ItemAdmin';
import staff from '../assets/managestafftrans.png';
import category from '../assets/managecatetrans.png';
import food from '../assets/managefoodtrans.png';
import chart from '../assets/managecharttrans.png';
import orderdetail from '../assets/managebilltrans.png';
import { FlatList } from 'react-native';
export default function FlatListAdmin() {
    const [adminlist, setAdminlist] = useState(
        [
            {
                id: 1,
                title: "Manage Staff",
                description: "Add, delete, update staff",
                status: true,
                url: staff,
                icon: "users-cog",
            },
            {
                id: 2,
                title: "Manage Category",
                description: "Add, delete, update category",
                status: true,
                url: category,
                icon: "swatchbook",
            },
            {
                id: 3,
                title: "Manage Food",
                description: "Add, delete, update food",
                status: true,
                url: food,
                icon: "pizza-slice",
            },
            {
                id: 4,
                title: "Statisitc",
                description: "View revenue, profit",
                status: true,
                url: chart,
                icon: "chart-line",
            },
            {
                id: 5,
                title: "Orders Details",
                description: "View information of food purchased by customers",
                status: true,
                url: orderdetail,
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
