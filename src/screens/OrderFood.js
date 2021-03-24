import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Overlay } from 'react-native-elements';
import FlatListItemTable from '../components/FlatListItemTable';

export default function OrderFood() {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <Button title="Open Overlay" onPress={toggleOverlay} />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text>Hello from Overlay!</Text>
                <Button title="Filter" />
                <Button title="Dismiss" onPress={toggleOverlay} />
                <FlatListItemTable />
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({})
