import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ItemFilterFood(props) {
    const { filter,onSearch,setSelect, select } = props;
    const {key : keys} = select;
    const { key, name } = filter;
    return (
        <TouchableOpacity onPress={() => {onSearch("000|" + name); setSelect({key})}} >
            <View style={styles.container} key={key}>
               {key === keys ? <FontAwesome5 name="check" size={13} color="#FFC75F" style={{marginRight:5}} />  : null}
                <Text style={styles.title}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default React.memo(ItemFilterFood);

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 30,
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 5,
        alignSelf: 'stretch',
        borderRadius: 35,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#ffe5e3',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginRight: 5,
        elevation: 3,

    },

    title: {
        color: '#e97067',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '200',
    }
})
