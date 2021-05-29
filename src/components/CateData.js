import React, { useState,useEffect } from 'react';

import ItemFilterTable from './ItemFilterTable';
import ItemFilterFood from './ItemFilterFood';
import db from '@react-native-firebase/database';

function CateData() {
    const [filter, setFilter] = useState([{key: 'tatca', name: 'Tất cả'}])
    console.log("RUn time");
    useEffect(() => {
        db().ref('/category').on('value',async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                orders.push({...value,key});
              } 
              setFilter([...filter,...orders]);
        })
    },[])

    return [filter, setFilter];
}

export default CateData;