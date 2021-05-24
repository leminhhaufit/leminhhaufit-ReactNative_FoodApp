import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import PropTypes from 'prop-types';
import food1IMG from '../assets/detail1.png';
import ItemFood from './ItemFood';
import db from '@react-native-firebase/database';

FlatListItemFood.propTypes = {

};
function FlatListItemFood(props) {
    const [foodlist, setFoodlist] = useState([])

    useEffect(() => {
        db().ref('/foods').on('value',async (data) => {
            const foodsJson = await data.toJSON();
            const foods = [];
            for (const [key, value] of Object.entries(foodsJson)) {
                foods.push({id:key, ...value});
              }
              setFoodlist(foods);
        })
    },[])

    function reserve(item) {
        const status = item.status;
        const index = foodlist.indexOf(item);
        setFoodlist(
            [
                ...foodlist.slice(0, index),
                {
                    ...item,
                    status: true
                },
                ...foodlist.slice(index + 1)
            ])
    }


    return (
        <FlatList data={foodlist}
            numColumns={2}
            renderItem={({ item }) => <ItemFood foodlist={item} reserve={() => reserve(item)} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}
        />
    );
}
const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        alignSelf: 'stretch'

    },

})
export default FlatListItemFood;