import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import ItemOrdersManage from './ItemOrdersManage';
import db from '@react-native-firebase/database';
import { Button } from 'react-native-elements';
import { FlatList } from 'react-native';
import moment from "moment";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Overlay } from 'react-native-elements';
import Toast from 'react-native-toast-message';
export default function FlatListOrdersManage() {
    const [orderslist, setOrderslist] = useState([])
    const [filter, setFilter] = useState([])
    const [open,setOpen] = useState(false);
    const [current, setCurrent] = useState({key:'all'});
    const [search,setSearch] = useState([
        {key:'today', name: `Today (${moment(new Date().getTime()).format('DD - MM - YYYY')})`},
        {key:'all', name:'All'},
        {key:'completed', name:'Completed'},
        {key:'progress', name:'Progress'},
        {key:'new', name:'New'}]);

    useEffect(() => {
        db().ref('/orders').on('value', async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                    orders.push({ ...value, key });
            }
            setOrderslist(orders);
        })
    }, [])

    useEffect(() => {
        setFilter(orderslist.filter(food => {
            if (current.key.trim().toLowerCase() === 'all')
                return food;
            else if (current.key === 'today') {
                return moment(food.createDate).format('DD - MM - YYYY') ===  moment(new Date().getTime()).format('DD - MM - YYYY');
            } else {
                return food.status.toLowerCase().includes(current.key.toLowerCase());
            }
        }));
    }, [current, orderslist])


    useEffect(() => {
        Toast.show({
            type: 'success',
            text1: 'Updated successfully 👋',
            autoHide: true,
            visibilityTime:1
        });
    }, [current])

    const ItemSearch = ({searchList}) => {
        return (
            <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => setCurrent({key:searchList.key})}>
                <Text style={{backgroundColor:'#BBC0C4',color:'#fff',margin:5,minHeight:20,borderRadius:5,padding:5,minWidth:250}}>{searchList.name} {current.key === searchList.key ? <FontAwesome5 name="check" size={13} color="green" style={{marginRight:5}} />  : null}</Text>
                
            </TouchableOpacity>
            );
    }
    return (
        <>

{/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',flex: 1}}>
                    <Icon style={{padding:10}} name="search" size={20} color="#000"/>
                    <TextInput style={styles.inputBar} />
                </View> */}





            <View style={styles.bar}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="search" size={20} color="#BBC0C4"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        underlineColorAndroid="transparent"
                    />
                </View>
                
                <Button onPress={() => setOpen(true)}  icon={<FontAwesome5 name="filter" size={17} color="#FFF"  />} buttonStyle={styles.filter} />
            </View>
            
            <FlatList data={filter}
                numColumns={1}
                renderItem={({ item }) => <ItemOrdersManage orderslist={item} />}
                keyExtractor={item => item.id}
                style={styles.flatlist}
            />

            <Overlay visible={open} fullScreen={false} overlayStyle={{minHeight:'50%'}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#458', fontSize:16,fontWeight:'bold'}}>Filter: </Text>
                    <Text onPress={() => setOpen(false) }>❌</Text>
                </View>
                <FlatList data={search} showsVerticalScrollIndicator={false}
                    numColumns={1}
                    renderItem={({ item }) => <ItemSearch searchList={item} />}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                />
            </Overlay>

        </>
    )
}

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,

    },
    filter: {
        backgroundColor:'#CED4DA',
        borderRadius:9,
    },
    bar : {
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        justifyContent:'space-around'
    },
    inputBar:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },



    searchSection: {
        flexDirection: 'row',
        width:'80%',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})
