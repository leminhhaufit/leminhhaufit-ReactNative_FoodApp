import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ItemStaffManage from './ItemStaffManage';
import staff from '../assets/managestafftrans.png';
import { FlatList } from 'react-native';
import db from '@react-native-firebase/database';
import Header from '../components/Header';
function FlatListFoodManage() {
    const [stafflist, setStafflist] = useState([])
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([])
    useEffect(() => {
        db().ref('/users').on('value',async (data) => {
            const usersJson = await data.toJSON();
            const users = [];
            for (const [key, value] of Object.entries(usersJson)) {
                users.push(value);
              }
              setStafflist(users);
        })
    },[])

    useEffect(() => {
        setFilter(stafflist.filter(user => {
            return  user.name.toLowerCase().includes(search.toLowerCase());
        }));
    },[search,stafflist])

    return (
        <>
            <Header onSearch={setSearch} title="Manage Staff"/>
            <FlatList data={filter}
                numColumns={1}
                renderItem={({ item }) => <ItemStaffManage stafflist={item} />}
                keyExtractor={item => item.uid}
                scrollEnabled={true}
            />
        </>
        
    )
}
export default FlatListFoodManage
