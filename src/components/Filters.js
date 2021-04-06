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
                    <Text style={styles.textfilter}>Filter</Text>
                    <FontAwesome5 name="sort-amount-down-alt" size={30} color="white" />
                </View>
            </TouchableOpacity>
            <Overlay isVisible={visible} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay}>
                <View style={styles.labelfilter}>
                    <Text style={styles.textfilteroverlay}>Filter by:</Text>
                    <TouchableOpacity onPress={toggleOverlay} style={styles.iconoverlay}>
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
        width: 90,
        height: 35,
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
        borderRadius: 25,
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
    overlay: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'stretch',
        top: 340,
        right: 60,
        backgroundColor: '#F4F4F4',
        height: 400,
        borderRadius: 25,
    },
    textfilteroverlay: {
        flex: 8,
        color: '#FFC75F',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 5,
    },
    labelfilter: {
        flexDirection: 'row',
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'stretch',
        top: 340,
        right: 60,
        backgroundColor: '#F4F4F4',
        height: 400,
        borderRadius: 25,
    },
    textfilteroverlay: {
        flex: 8,
        color: '#FFC75F',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 5,
    },
})
