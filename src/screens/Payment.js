import React, {useState} from 'react'
import { StyleSheet, View, Text,ScrollView,Switch} from 'react-native'
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import FlatListItemCart from '../components/FlatListItemCart';
import InputForm from '../components/InputForm';
import { Item, Input, Label } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Payment({ navigation }) {
   const [isEnabled, setIsEnabled] = useState(false);
   const [table, setTable] = useState(0);
   const [people, setPeople] = useState(0);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.cartview}>
                <Text style={styles.title2}>Food Cart</Text>
            </View>
            <ScrollView>
                <FlatListItemCart />
                <View style={[styles.infor,{ minHeight: 90 }]}>
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
                    { isEnabled && 
                    <View>
                        <InputForm name='People' quantity={people} action={setPeople} />
                        <InputForm name='Table' quantity={table} action={setTable}/>
                    </View>
                     }
                </View>

                <View style={styles.infor}>
                    <Text style={styles.title}>Price Details:</Text>
                    <View style={styles.details}>

                        <Text style={styles.content}>Sub total:</Text>

                        <Text style={styles.price}>199$</Text>

                    </View>
                    <View style={styles.details}>

                        <Text style={styles.content}>Service fee:</Text>

                        <Text style={styles.price}>199$</Text>

                    </View>
                    <View style={styles.details}>

                        <Text style={styles.content}>Tax:</Text>

                        <Text style={styles.price}>199$</Text>
                    </View>

                    <Text style={styles.promotion}>Have a promocode?</Text>
                </View>
                <View style={styles.payment}>
                    <View style={styles.details}>
                    <Text style={styles.titletotal}>199$</Text>
                        <Button buttonStyle={styles.pay} icon={<FontAwesome5 name="amazon-pay" size={25} color="#FFF" />} titleStyle={styles.titleadd}
                            title="Payment"
                            onPress={() => navigation.navigate('FoodDetail')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex:1
    },
    cartview: {
        
    },
    infor: {
        margin:10,
        minHeight:170,
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
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
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
    payment:{
        marginLeft:10,
        marginEnd:10
    },
    titleadd: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        padding: 5,
    }
})
