import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import formatter from '../config/Currency';
import moment from "moment";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import { NavContextAdmin } from '../navigation/AdminStack';
export default function ItemOrdersManage(props) {
    const { orderslist } = props;
    //#375A45 green #E35929 red
    const { id, total, createDate,status,key } = orderslist;
    let defineStatus;
    if(status === 'completed'){
        defineStatus = 'check|green';
    }else if(status === 'progress'){
        defineStatus = 'spinner|#d6c31a';
    }else{
        defineStatus = 'cart-plus|red'
    }

    const apply = defineStatus.split('|');

    return (
        <NavContextAdmin.Consumer>
            {({ navigation }) =>
            <TouchableOpacity style={styles.container} key={id} onPress={() => navigation.navigate('or-dt',{key})}>
                <View style={styles.container2}>
                    <Text style={styles.title}>#{id}</Text>
                    <Text style={styles.content}>{moment(createDate).format('MMM D, HH:mmA')}</Text>
                    <Text style={styles.content}>Status: <FontAwesome5 name={apply[0]} size={17} color={apply[1]} />  </Text>
                    <View style={styles.price}>
                        <Text style={styles.txtprice}>{formatter.format(total)}</Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <View style={styles.btndel}>
                        <FontAwesome5Icon name="eye" solid size={32} color="#FFF" style={styles.iconplus} />
                    </View>
                </View>
            </TouchableOpacity > }
        </NavContextAdmin.Consumer>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
        height: 140,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: 10,
    },
    container2: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 140,

    },
    award: {
        fontSize: 16,
        fontWeight: '400',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 10,
        width: 200,
    },
    image: {
        position: 'absolute',
        width: 130,
        height: 130,
        right: -35,
        top: 5,
    },
    title: {
        fontSize: 24,
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        color:'#5e819d'
    },
    content: {
        fontSize: 16,
        fontWeight: '300',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        opacity: 0.5,
        height: 30,
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: "#FFC75F",
        width: 100,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        bottom: 0,

    },
    btndel: {
        flex: 1,
        paddingTop: 5,
    },
    iconplus: {
        alignSelf: 'center',
        paddingTop: 5,
    },
    price: {
        position: 'absolute',
        bottom: 0,
        width: 150,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 22,
        marginLeft: 12,

    },

})
