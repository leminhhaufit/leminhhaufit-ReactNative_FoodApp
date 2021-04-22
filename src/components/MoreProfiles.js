import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { signOut } from '../config/firebaseAPI';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavContext } from '../navigation/AppStack';
export default function MoreProfiles() {
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <TouchableOpacity>
                    <View style={styles.settingstart}>
                        <FontAwesome5 name="cog" size={60} color="#FFC75F" />
                        <Text style={styles.label1}>Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.settingmid}>
                        <FontAwesome5 name="calendar-day" size={60} color="#FFC75F" />
                        <Text style={styles.label1}>Profiles</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.settingend}>
                        <FontAwesome5 name="receipt" size={60} color="#FFC75F"  />
                        <Text style={styles.label1}>Profiles</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row2}>
                <TouchableOpacity>
                    <View style={styles.settingstart}>
                        <FontAwesome5 name="award" size={60} color="#FFC75F" />
                        <Text style={styles.label1}>Profiles</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Information")}>
                        <View style={styles.settingmid}>
                            <FontAwesome5 name="info-circle" size={60} color="#FFC75F" style={{justifyContent:'center',alignSelf:'center'}} />
                            <Text style={styles.label1}>Information</Text>
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => signOut()}>
                    <View style={styles.settingend}>
                        <FontAwesome5 name="sign-out-alt" size={60} color="#FFC75F" />
                        <Text style={styles.label1}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    top: {

    },
    bottom: {
        alignSelf: 'stretch',
        backgroundColor: 'pink',
        alignItems: 'center',
    },
    container: {
        flex: 2,
        backgroundColor: "#FFF",
        marginTop: 10,
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
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
    row1: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#FFC75F",
        borderStyle: 'solid',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        justifyContent:'center'

    },
    row2: {
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 20,
        justifyContent:'center'
    },
    settingstart: {
        alignSelf: 'flex-start',
        paddingRight: 30,
    },
    settingend: {
        alignSelf: 'flex-end',
        paddingLeft: 30,
    },
    settingmid: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        borderLeftWidth: 1,
        borderLeftColor: "#FFC75F",
        borderRightWidth: 1,
        borderRightColor: "#FFC75F",
        borderStyle: 'solid',
    },
    label1: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.5,
        paddingTop: 5,
    }
})
