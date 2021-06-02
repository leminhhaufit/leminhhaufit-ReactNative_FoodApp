import React, { useState, useEffect,useContext} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import _ from 'lodash';


import ItemCart from './ItemCart';
import db from '@react-native-firebase/database';

function FlatListItemCart({ setNote }) {
    const [foodlist, setFoodList] = useState([]);
    const {user:{uid}} = useContext(AuthContext);

    useEffect(() => {
        try {
            db().ref('/order-temp').on('value',async (data) => {
                const itemsJson = await data.toJSON();
                const items = [];
                if (itemsJson) {
                    for (const [key, value] of Object.entries(itemsJson)) {      
                        const id = key.split('|')[0];
                        if (uid == id) {
                            items.push(value);
                        }
                      }    
                }
                
                  setFoodList(items);
            })
        } catch (error) {
            console.log(error);
        }
    },[])

     async function onChangeQuantityPlus(item) {
        const quantity = item.quantity;
        const index = foodlist.indexOf(item);
        setFoodList([
            ...foodlist.slice(0, index),
            {
                ...item,
                quantity: quantity + 1
            },
            ...foodlist.slice(index + 1),
        ]);
        try {
            await db().ref(`order-temp/${item.uid}|${item.id}`).update({
                quantity : item.quantity + 1
            })
        } catch (error) {
            console.log(error);
        }
        
    };
    async function onChangeQuantityMinus(item) {
        const quantity = item.quantity;
        const index = foodlist.indexOf(item);
        let sl = quantity - 1;
        sl = (sl <= 0) ? 1 : sl;
        console.log(sl);
        setFoodList([
            ...foodlist.slice(0, index),
            {
                ...item,
                quantity: sl
            },
            ...foodlist.slice(index + 1),
        ]);

        try {
            await db().ref(`order-temp/${item.uid}|${item.id}`).update({
                quantity : sl
            })
            setTimeout(() => {
                console.log(foodlist);
            },6000)
        } catch (error) {
            console.log(error);
        }

    };
    async function deleteItem(item) {
        try {
            await db().ref(`order-temp/${item.uid}|${item.id}`).remove();
            const index = foodlist.indexOf(item);
            foodlist.splice(index, 1);
            setFoodList([
                ...foodlist
            ])
        } catch (error) {
            console.log(error);
        }
        
    }
        return (
            <FlatList 
                data={foodlist}
                numColumns={1}
                renderItem={({ item }) => <ItemCart foodlist={item}
                    onChangeQuantityPlus={() => onChangeQuantityPlus(item)}
                    setNote={setNote}
                    onChangeQuantityMinus={() => onChangeQuantityMinus(item)}
                    deleteItem={() => deleteItem(item)}
                />}
                keyExtractor={item => item.id}
                style={styles.foodlist}
                nestedScrollEnabled={true}
                initialNumToRender='1'
            />
        );
}
const styles = StyleSheet.create({
    foodlist: {
        minHeight: 60,

    }

})
export default FlatListItemCart;