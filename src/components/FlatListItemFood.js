import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import food1IMG from '../assets/detail1.png';
import ItemFood from './ItemFood';
import db from '@react-native-firebase/database';
import _ from 'lodash';
FlatListItemFood.propTypes = {

};
function FlatListItemFood(props) {
    const [foodlist, setFoodlist] = useState([])
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState('0|tất cả');
    const { user: { uid, name } } = useContext(AuthContext);

    useEffect(() => {
        db().ref('/foods').on('value', async (data) => {
            const foodsJson = await data.toJSON();
            const foods = [];
            for (const [key, value] of Object.entries(foodsJson)) {
                const active = _.get(value, 'active');
                if (active) {
                    foods.push({ id: key, ...value });
                }

            }
            setFoodlist(foods);
        })
    }, [])


    useEffect(() => {
        setFilter(foodlist.filter(food => {
            const splitCate = search.split('|');
            console.log(search);
            if (Array.isArray(splitCate) && splitCate.length >= 2) {
                if (splitCate[1].trim().toLowerCase() === 'tất cả')
                    return food;
                else if (splitCate[0] === '000') {
                    return food.category.toLowerCase().includes(splitCate[1].toLowerCase());
                } else {
                    return food.name.toLowerCase().includes(search.toLowerCase());
                }
            }
            else {
                return food.name.toLowerCase().includes(search.toLowerCase());
            }
        }));
    }, [search, foodlist])


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
        <>
            <Text style={styles.hello}>Xin chào, {name}</Text>
            <Text style={styles.title}>Đồ ăn nhanh & ngon!</Text>
            <Header title="Food List" onSearch={setSearch} />
            <FlatList data={filter}
                numColumns={1}
                renderItem={({ item }) => <ItemFood foodlist={item} reserve={() => reserve(item)} />}
                keyExtractor={item => item.id}
                style={styles.flatlist}
            />
        </>
    );
}
const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        width: '100%',
        alignSelf: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingBottom: 20,
    },
    hello: {
        fontSize: 26,
        opacity: 0.7,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingTop: 40,

    },

})
export default FlatListItemFood;