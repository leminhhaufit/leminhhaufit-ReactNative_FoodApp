import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import PropTypes from 'prop-types';

import ItemCart from './ItemCart';

FlatListItemCart.propTypes = {

};
function FlatListItemCart({ navigation }) {
    const [foodlist, setFoodList] = useState(
        [
            {
                id: 1,
                title: "Pizza 1",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 2,
                title: "Pizza 2",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 3,
                title: "Pizza 3",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 4,
                title: "Pizza 4",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 5,
                title: "Pizza 5",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 6,
                title: "Pizza 6",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 7,
                title: "Pizza 7",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 8,
                title: "Pizza 8",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 9,
                title: "Pizza 9",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 10,
                title: "Pizza 10",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 11,
                title: "Pizza 11",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
            {
                id: 12,
                title: "Pizza 12",
                note: "Nhiều tương ớt",
                price: "199$",
                quantity: 2,
            },
        ]

    )

    function onChangeQuantityPlus(item) {
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

    };
    function onChangeQuantityMinus(item) {
        const quantity = item.quantity;
        const index = foodlist.indexOf(item);
        let sl = quantity - 1;
        if (sl <= 0) {
            setFoodList([
                ...foodlist.slice(0, index),
                {
                    ...item,
                    quantity: 0
                },
                ...foodlist.slice(index + 1),
            ]);
        } else {
            setFoodList([
                ...foodlist.slice(0, index),
                {
                    ...item,
                    quantity: quantity - 1
                },
                ...foodlist.slice(index + 1),
            ]);
        }
    };
    function deleteItem(item) {
        const index = foodlist.indexOf(item);
        console.log(index);
        foodlist.splice(index, 1);
        setFoodList([
            ...foodlist
        ])
    }
    return (



        <FlatList data={foodlist}
            numColumns={1}
            renderItem={({ item }) => <ItemCart foodlist={item}
                onChangeQuantityPlus={() => onChangeQuantityPlus(item)}
                onChangeQuantityMinus={() => onChangeQuantityMinus(item)}
                deleteItem={() => deleteItem(item)}
            />}
            keyExtractor={item => item.id}
            style={styles.foodlist}

        />




    );
}
const styles = StyleSheet.create({
    foodlist: {
        height: 340,

    }

})
export default FlatListItemCart;