import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Overlay } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FlatListFilterFood from './FlatListFilterFood';
export default function Filters() {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View >
            <TouchableOpacity onPress={toggleOverlay}>
                <View style={styles.filter}>

                    <FontAwesome5 name="sort-amount-down-alt" size={25} color="white" />
                </View>
            </TouchableOpacity>
            <Overlay isVisible={visible} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay}>
                <View style={styles.labelfilter}>
                    <Text style={styles.textfilteroverlay}>Filter by:</Text>
                    <TouchableOpacity onPress={toggleOverlay}>
                        <FontAwesome5 size={26} name="times" color="#FFC75F" />
                    </TouchableOpacity>
                </View>
                <FlatListFilterFood />
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({

    filter: {
        flexDirection: 'row',
        width: 60,
        height: 30,
        backgroundColor: '#FFC75F',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderRadius: 30,
        justifyContent: 'center'
    },
    textfilter: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 13,
        textTransform: 'uppercase',
        paddingLeft: 5,
        paddingTop: 10,
        paddingRight: 10,
    },
    labelfilter: {
        flexDirection: 'row',
    },
    overlay: {
        height: 300,
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
    },
    textfilteroverlay: {
        flex: 5,
        color: '#FFC75F',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 5,
    },
})
