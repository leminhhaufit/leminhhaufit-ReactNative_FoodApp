import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemPopular from './ItemPopular';
import food1IMG from '../assets/detail1trans.png';
import { FlatList } from 'react-native';
import db from '@react-native-firebase/database';
import moment from 'moment';
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
            }
        ]

    )
    useEffect(() => {
        let count = 0;
        let topFood = [];
        db().ref('/order-details').on('value', async (data) => {

            const ordersJson = await data.toJSON();
            for (const [key, value] of Object.entries(ordersJson)) {
                const getDateCreate = moment(value.idOrders).format('MMM D YYYY');
                if (isCurrentWeek(getDateCreate)) {
                    count++;
                    const curFood = await (await db().ref(`/foods/${value.idFood}`).once('value')).toJSON();
                    if (count <= 5) {
                        topFood.push(curFood);
                    } else {

                    }
                }
            }
            let unique = [...new Map(topFood.map(item =>
                [item['id'], item])).values()];
            setFoodlist(unique);
        })

        //let unique = [...new Set(topFood.map(item => item.id))];
    }, [])


    const isCurrentWeek = (date) => {
        const arrCurrentDayOfWeek = getCurrentWeek();
        if (arrCurrentDayOfWeek.includes(date))
            return true;
        return false;
    }

    const getCurrentWeek = () => {
        const currentDate = moment();
        const weekStart = currentDate.clone().startOf('isoWeek');
        const weekEnd = currentDate.clone().endOf('isoWeek');

        let days = [];

        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("MMM D YYYY"));
        }
        return days;
    }
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
