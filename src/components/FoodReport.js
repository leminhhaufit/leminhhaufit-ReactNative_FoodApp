import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemFoodReport from './ItemFoodReport';
import { FlatList } from 'react-native';
import db from '@react-native-firebase/database';
export default function FoodReport() {
    const [foodlist, setFoodList] = useState([]);
    
    useEffect(() => {
        db().ref('/foods').on('value',async (data) => {
            const foodsJson = await data.toJSON();
            const foods = [];
            if(foodsJson){
                for (const [key, value] of Object.entries(foodsJson)) {
                    foods.push(value);
                }
            }
            setFoodList(foods);
        })
    },[])

    return (
        <FlatList data={foodlist}
        showsVerticalScrollIndicator={false}
            numColumns={1}
            renderItem={({ item }) => <ItemFoodReport foodlist={item} />}
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
