import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { signOut } from '../config/firebaseAPI';
export default function Profile() {
    return (
        <View>
            <Button title="Log Out" onPress={() => signOut()} />
        </View>
    )
}

const styles = StyleSheet.create({})
