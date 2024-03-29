import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Button } from 'react-native-elements';
import moment from "moment";
import db from '@react-native-firebase/database';
import _ from 'lodash';
import MakeOrderType from './MakeOrderType';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../navigation/AuthProvider';

const WaiterOrder = ({ foodlist: { id, createDate, total, status, key }, show }) => {
    const [orders, setOrders] = useState([]);
    const { user: { uid } } = useContext(AuthContext);
    const [chef, setChef] = useState();
    const [same, setSame] = useState();
    useEffect(() => {
        db().ref('/order-details').on('value', async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                const realID = key.split('|')[0];
                if (realID == id) {
                    orders.push({ ...value, key });
                }
            }
            setOrders(orders);
        })
    }, [])

    const ItemsOnCard = ({ item, statusOrder, id, show }) => {
        return (
            <MakeOrderType item={item} statusOrder={statusOrder} id={id} show={show} />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.orderID}>
                    <Text style={{ fontWeight: 'bold', color: '#458' }}>Món ăn </Text>
                    <Text style={styles.textTitle}>#{id}</Text>
                    {status === 'completed' ? <Button disabled={true} icon={<FontAwesome5 name="check" size={10} color="#FFF" style={styles.iconadd} />} buttonStyle={styles.btnadd} /> :
                        status === 'new' ? <Text style={styles.status}>Đã làm</Text> :
                            <Button disabled={true} icon={<FontAwesome5 name="spinner" size={10} color="#FFF" style={styles.iconadd} />} buttonStyle={styles.btnadd} />}

                </View>
                <Text style={styles.textTitle}>{moment(createDate).format('MMM D, HH:mmA')}</Text>
            </View>
            <View>
                <FlatList
                    data={orders}
                    numColumns={1}
                    renderItem={({ item }) => <ItemsOnCard item={item} statusOrder={status} id={id} show={show} />}
                    keyExtractor={item => item.key}
                    style={styles.flatlist}
                />
            </View>

        </View>
    );




}
export default WaiterOrder;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        marginBottom: 15,
        minHeight: 150,
        display: 'flex',
        flexDirection: "column",
        elevation: .5,
    },
    para: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495e',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderID: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTitle: {
        color: '#BBC0C4',
        fontSize: 12
    },
    itemContainer: {
        flexDirection: 'row'
    },
    status: {
        backgroundColor: 'green',
        borderRadius: 8,
        marginLeft: 5,
        color: '#FFF',
        fontSize: 10,
        padding: 5,
        fontWeight: 'bold'
    },
    btnadd: {
        borderRadius: 5,
        width: 30,
        margin: 5,
        backgroundColor: '#BBC0C4'
    }
})
