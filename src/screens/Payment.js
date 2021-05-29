import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, Switch, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import FlatListItemCart from '../components/FlatListItemCart';
import InputForm from '../components/InputForm';
import { Item, Input, Label } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import db from '@react-native-firebase/database';
import { AuthContext } from '../navigation/AuthProvider';
import formatter from '../config/Currency';
import ProgressLoader from 'rn-progress-loader';
import { Avatar, Button as ButtonCard, Card, Title, Paragraph } from 'react-native-paper';
import _ from 'lodash';

export default function Payment({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [table, setTable] = useState(0);
    const [people, setPeople] = useState(0);
    const [foodlist, setFoodList] = useState([]);
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [done, setDone] = useState(false);

    const [notess, setNotess] = useState('');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { user: { uid } } = useContext(AuthContext);



    const payCash = async () => {
        setDone(true);
        const timeId = new Date().getTime();
        const objFood = {
            id : timeId,
            numberTable : table,
            uid,
            people,
            status:'new',
            total : total + 5000 + tax,
            createDate : timeId
        }

        // Add orders
        await db().ref(`orders/${uid}|${timeId}`).set(objFood);

        // Add order details
        for(let i = 0; i < foodlist.length; i++ ){
            const objItems = {
                idOrders: timeId,
                idFood: foodlist[i]['id'],
                quantity: foodlist[i]['quantity'],
                price: foodlist[i]['price'],
                size:  foodlist[i]['size'],
                notes : notess,
                status : 'new'
            }
          await db().ref(`order-details/${timeId}|${i}`).set(objItems);
          await db().ref(`order-temp/${uid}|${foodlist[i]['id']}`).remove();
            
        }
        setDone(false);
        const curIdOrder = `${uid}|${timeId}`;
        navigation.navigate('StatusPayment',{curIdOrder});
    }


    useEffect(() => {
        try {
            db().ref('/order-temp').on('value', async (data) => {
                const itemsJson = await data.toJSON();
                const items = [];
                let total = 0;
                let tax = 0;
                if (itemsJson) {
                    for (const [key, value] of Object.entries(itemsJson)) {
                        const id = key.split('|')[0];
                        const quantity = _.get(value,'quantity');
                        console.log(quantity);
                        const price = _.get(value,'price');
                        total += quantity * price;
                        tax += 0.1 * (quantity * price);
                        if (uid == id) {
                            items.push(value);
                        }
                    }
                }
                console.log('vo day a');
                setFoodList(items);
                setTotal(total);
                setTax(tax);
            })
        } catch (error) {
            console.log(error);
        }
    },[])

    if (foodlist.length > 0) {
        return (
            <View style={styles.container}>
                <View style={styles.cartview}>
                    <Text style={styles.title2}>Food Cart</Text>
                </View>
                <ScrollView>
                    <FlatListItemCart setNote={setNotess} />
                    <View style={[styles.infor, { minHeight: 90 }]}>
                        <Text style={styles.title}>Table Details:</Text>
                        <View style={styles.details}>
                            <Text style={styles.content}>At the restaurant: </Text>
                            <Switch
                                trackColor={{ false: "#E3E9ED", true: "#FFC75F" }}
                                thumbColor={isEnabled ? "#FFF" : "#FFF"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        {isEnabled &&
                            <View>
                                <InputForm name='People' quantity={people} action={setPeople} />
                                <InputForm name='Table' quantity={table} action={setTable} />
                            </View>
                        }
                    </View>

                    <View style={styles.infor}>
                        <Text style={styles.title}>Price Details:</Text>
                        <View style={styles.details}>

                            <Text style={styles.content}>Sub total:</Text>

                            <Text style={styles.price}>{formatter.format(total)}</Text>

                        </View>
                        <View style={styles.details}>

                            <Text style={styles.content}>Service fee:</Text>

                            <Text style={styles.price}>{formatter.format(5000)}</Text>

                        </View>
                        <View style={styles.details}>

                            <Text style={styles.content}>Tax:</Text>

                            <Text style={styles.price}>{formatter.format(tax)}</Text>
                        </View>

                        <Text style={styles.promotion}>Have a promocode?</Text>
                    </View>
                    <View style={styles.payment}>
                        <View style={styles.details}>
                            <Text style={styles.titletotal}>{formatter.format(total + 5000 + tax)}</Text>
                            <Button buttonStyle={styles.pay} icon={<FontAwesome5 name="amazon-pay" size={25} color="#FFF" />} titleStyle={styles.titleadd}
                                title="Payment"
                                onPress={() => payCash()}
                            />
                        </View>
                    </View>
                </ScrollView>
                <ProgressLoader
                            visible={done}
                            isModal={true} isHUD={true}
                            hudColor={"#FFFFFF"}
                            color={"#000000"} />
            </View>
        )
    } else {
        return (
                <View style={styles.containerCard}>
                    <Card title="Local Modules">
                        {/*react-native-elements Card*/}
                        <Text style={styles.paragraph}>
                            No items here yet!!!
                        </Text>
                        <Text style={styles.paragraph}>
                        🛒🛒🛒🛒🛒🛒🛒
                        </Text>
                    </Card>
                </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1
    },
    cartview: {

    },
    infor: {
        margin: 10,
        minHeight: 170,
        backgroundColor: '#FFF',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        borderBottomColor: '#FFC75F',
        borderBottomWidth: 0.8,
        borderStyle: 'solid',
    },
    title2: {
        fontSize: 32,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,

    },
    titletotal: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,

    },
    content: {
        fontSize: 18,
        fontWeight: '300',
        padding: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: '300',
        padding: 5
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    promotion: {
        color: '#FFC75F',
        fontSize: 20,
        textAlign: 'center',
    },
    pay: {
        marginTop: 5,
        backgroundColor: "#FFC75F",
        width: 150,
        alignItems: 'stretch',
        borderRadius: 25,
    },
    payment: {
        marginLeft: 10,
        marginEnd: 10
    },
    titleadd: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        padding: 5,
    },
    containerCard: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex:.3,
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
})
