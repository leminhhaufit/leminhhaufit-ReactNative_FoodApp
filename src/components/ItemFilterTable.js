import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


export default function ItemFilterTable(props) {
    const { filter } = props;

    const { id, title } = filter;
    return (
        <TouchableOpacity >

            <View style={styles.container} key={id}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,//120
        height: 30,
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 5,
        alignSelf: 'stretch',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginLeft: 5,
        marginRight: 5,
        elevation: 3,

    },

    title: {
        color: '#000f',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '200',
    }
})
