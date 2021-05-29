import React, { useState,useEffect,useContext } from 'react';
import {
    View,
    StyleSheet,
    FlatList,

} from 'react-native';

import PropTypes from 'prop-types';

import ItemFilterTable from './ItemFilterTable';
import ItemFilterFood from './ItemFilterFood';
import db from '@react-native-firebase/database';
import CateData from './CateData';
import { AuthContext } from '../navigation/AuthProvider';
FlatListFilterFood.propTypes = {

};
function FlatListFilterFood({onSearch}) {
   // const [filter, setFilter] = useState([{key: 'tatca', name: 'Tất cả'}])
   const [filter, setFilter] = CateData();
    // useEffect(() => {
    //     db().ref('/category').on('value',async (data) => {
    //         const ordersJson = await data.toJSON();
    //         const orders = [];
    //         for (const [key, value] of Object.entries(ordersJson)) {
    //             orders.push({...value,key});
    //           } 
    //           setFilter([...filter,...orders]);
    //     })
    // },[])
    const {select, setSelect} = useContext(AuthContext);

    return (
        <FlatList data={filter}
            numColumns={1}
            renderItem={({ item }) => <ItemFilterFood filter={item} onSearch={onSearch} setSelect={setSelect} select={select} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}
        />
    );
}
const styles = StyleSheet.create({

    flatlist: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginTop: 0,
        
    },

})
export default FlatListFilterFood = React.memo(FlatListFilterFood);