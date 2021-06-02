import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import FlatListFoodManage from '../components/FlatListFoodManage';
import Header from '../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function ManageFood({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Header title="Danh sách món ăn" goBack={true} />
                <FlatListFoodManage />
            </View>
            <View style={styles.fixedbutton}>
                <Button
                    onPress={() => navigation.navigate("FormFood", { title: "Thêm mới món ăn", type: 'ADD' })}
                    type="solid"
                    buttonStyle={styles.btnadd}
                    icon={<FontAwesome5 name="plus-circle" size={35} color="#FFF" />}
                    titleStyle={{ fontSize: 23 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    container2: {
        flex: 1,
    },
    imgtop: {
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 250,
    },
    content: {
        flex: 1
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
        borderRadius: 40
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
