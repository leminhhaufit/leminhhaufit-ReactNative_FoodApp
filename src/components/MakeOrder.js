import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';
import db from '@react-native-firebase/database';
import formatter from '../config/Currency';
import _ from 'lodash';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../navigation/AuthProvider';

export default function MakeOrder({ item, statusOrder, id,show }) {
    const { price, quantity, idFood, idOrders, status, notes,key } = item;
    const [food, setFoods] = useState();
    const [same, setSame] = useState();
    const { user: { uid } } = useContext(AuthContext);
    useEffect(() => {
        db().ref(`/foods/${idFood}`).on('value', async (data) => {
            const foodsJson = await data.toJSON();
            setFoods({ ...foodsJson });
        })
    }, [])

    useEffect(async () => {
        if (statusOrder === 'new') {
            setSame(true);
        }
        if (statusOrder === 'progress') {
            const data = await (await db().ref(`chef/${uid}|${id}`).once('value')).toJSON();
            if (data) {
                const realID = _.get(data, 'uid');
                console.log(realID);
                if (uid == realID) {
                    setSame(true);
                } else {
                    setSame(false);
                }
            } else {
                setSame(false);
            }
        }

        if (statusOrder === 'completed' && show) {
            setSame(true);
        }
    }, [])

    const checkDone = async () => {
        try {
            await db().ref(`order-details/${key}`).update({
                status: 'completed'
              })
        } catch (error) {
            console.log(error);
        }
    }

    if (food != null && same != null) {
        return (
            <View style={styles.container}>
                <View style={styles.display}>
                    <Image style={styles.items} source={{ uri: food.photoURL }} />
                    <View style={styles.text}>
                        <Text style={styles.title}>{food.name} - {food.category}</Text>
                        <Text style={styles.description}>{food.ingredient}</Text>
                        <Text style={styles.title}>{formatter.format(price)} ({quantity} item/s)</Text>
                        {status === 'completed' ?  <Button onPress={checkDone} icon={<FontAwesome5 name="check" size={10} color="#FFF" style={styles.iconadd} />} buttonStyle={{...styles.btnadd,backgroundColor:'#03a9f4'}} /> : 
                        same ? <Button onPress={checkDone} icon={<FontAwesome5 name="check" size={10} color="#FFF" style={styles.iconadd} />} buttonStyle={styles.btnadd} /> : 
                            <Button disabled={true} icon={<FontAwesome5 name="lock" size={10} color="#FFF" style={styles.iconadd} />} buttonStyle={styles.btnadd} />}
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#BBC0C4',
                        borderBottomWidth: .3,
                        marginLeft: 5,
                        marginRight: 5
                    }}
                />
                <View>

                </View>
            </View>
        )
    } else {
        return null;
    }

}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    display: {
        flexDirection: 'row'
    },
    items: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 5
    },
    title: {
        fontSize: 12,
        margin: 5,
        fontWeight: 'bold',
        color: '#458'
    },
    text: {
        flexDirection: 'column'
    },
    description: {
        fontSize: 12,
        marginLeft: 4,
        margin: 1,
        color: '#BBC0C4'
    },
    btnadd: {
        borderRadius: 5,
        width: 30,
        margin: 5,
        backgroundColor: '#BBC0C4'
    }
})