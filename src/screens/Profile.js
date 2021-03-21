import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { signOut } from '../config/firebaseAPI';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Profile() {
    return (
        <View>

            <FontAwesome5.Button
                name="sign-out-alt"
                color={'white'}
                size={28}
                onPress={() => signOut()}

            >
                <Text color={'white'}
                    size={28}>Sign out</Text>
            </FontAwesome5.Button>

        </View>
    )
}

const styles = StyleSheet.create({})
