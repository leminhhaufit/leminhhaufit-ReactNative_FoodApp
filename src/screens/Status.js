import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function Status() {
    return (
        <View style={styles.container}>
            <Text>Xin chao Viet Nam</Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1,
    }
})
