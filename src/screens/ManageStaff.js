import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import FlatListStaffManage from '../components/FlatListStaffManage';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function ManageStaff({ navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.container2}>
                        <Header title="Manage Staff"/>
                        <FlatListStaffManage />
                </View>
            </ScrollView>
            <View style={styles.fixedbutton}>
                <Button onPress={() => navigation.navigate("FormStaff", { title: "Add New Staff" })}
                    icon={<FontAwesome5 name="plus-circle" size={50} color="#FFF" style={styles.iconadd} />} buttonStyle={styles.btnadd} />
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    container2: {
        minHeight:200
    },
    imgtop: {
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 250,
    },
    content: {
        flex:1
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    fixedbutton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20,
        borderRadius: 40,

    },
    btnadd: {
        height: 75,
        width: 75,
        borderRadius: 40,
        backgroundColor: '#FFC75F'
    },
    iconadd: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 40,
        elevation: 4,
    }
})
