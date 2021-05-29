import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Avatar, Input } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavContext } from '../navigation/AppStack';
export default function Information() {
    return (
        <View style={styles.container}>

            <View style={styles.avatar2}>
                <View style={{ position: 'absolute', top: 10, left: 10 }}>
                    <NavContext.Consumer>
                        {({ navigation }) =>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile2')}>
                                <FontAwesome5 style={styles.plus} name="chevron-circle-left" size={36} color="black" />
                            </TouchableOpacity>}
                    </NavContext.Consumer>
                </View>
                <Avatar
                    size="large"
                    rounded
                    icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
                    overlayContainerStyle={{ backgroundColor: '#FFC75F', opacity: 0.7, }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ alignSelf: 'center' }}
                />

            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Full Name:</Text>
                <Text style={styles.name}>Minh Hậu</Text>
                <Text style={styles.label}>Address:</Text>
                <Text style={styles.name}>171, Ấp 5, Xã Bình Mỹ</Text>
                <Text style={styles.label}>Number Phone:</Text>
                <Text style={styles.name}>0123456789</Text>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.name}>Nam</Text>
                <Text style={styles.label}>Started Day:</Text>
                <Text style={styles.name}>2/3/2021</Text>
                <Text style={styles.roles}>Đang hoạt động</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar2: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 25,
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
        justifyContent: 'center',
    },
    form: {
        flex: 3,
        backgroundColor: '#FFF',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 25,
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
        marginBottom: 30,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        padding: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    roles: {
        paddingRight: 10,
        color: '#e97067',
        paddingLeft: 10,
        fontWeight: 'bold',
        backgroundColor: '#ffe5e3',
        borderRadius: 20,
    },
})
