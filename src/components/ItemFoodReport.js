import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavContextAdmin } from '../navigation/AdminStack';
import { Button } from 'react-native-elements';
import moment from "moment";
import db from '@react-native-firebase/database';
import formatter from '../config/Currency';
import Toast from 'react-native-toast-message';
export default function ItemFoodReport(props) {
    const { foodlist } = props;
    const [report, setReport] = useState('');
    const { id : uid, name, description, price, material, status, photoURL,notes,date,ingredient,active } = foodlist;
    let icon = "#375A45";
    if (status == true) {
        icon = "#E35929";
    }


    const updateStatusFood = async () => {
        if(report.trim().toString() === ''){
            Toast.show({
                type: 'error',
                text1: 'Enter report text'  ,
                autoHide: true,
              });
            return;
        }
        await db().ref(`foods/${uid}`).update({active:false,notes:report});
    }
    return (
        <View style={styles.container} key={uid}>
            <View style={styles.cardTitle}>
                <Image style={styles.cardImageTitle} source={{uri:photoURL}} />
                <Button 
                    containerStyle={{position:'absolute',right:0, margin:5}} 
                    buttonStyle={{...styles.cardButtonTitle,backgroundColor: active ? 'green' : 'red'}} 
                    icon={<FontAwesome5 name={active ? 'check' : 'exclamation-triangle'} size={9} color="#FFF" />} />
            </View>

            <View style={styles.cardBody}>
                <Text style={styles.textBody}><FontAwesome5 name="file-signature" size={15} color="#CED4DA" /> {name} </Text>
                <Text style={styles.textBody}><FontAwesome5 name="clock" size={15} color="#CED4DA" /> {moment(date).format('MMM D, HH:mmA')} </Text>
                <Text style={styles.textBody}><FontAwesome5 name="mortar-pestle" size={15} color="#CED4DA" /> {ingredient} </Text>
                <Text style={styles.textBody}><FontAwesome5 name="dollar-sign" size={15} color="#CED4DA" /> {formatter.format(price)} </Text>
            </View>
            <View
                style={{
                    borderBottomColor: '#458',
                    borderBottomWidth: .2,
                    marginHorizontal:5
                }}
            />
            <View style={styles.footerCard}>
                <TextInput
                    style={{
                        width:'95%',
                        height:50,
                        borderColor:'#E9E9EA',
                        borderWidth: 1,
                        padding: 5,
                        marginTop:10,
                        alignSelf:'center',
                        borderRadius:5,
                        color:'#458'
                    }}
                    multiline={true}
                    numberOfLines={4}
                    placeholder={'Report to admin'}
                    onChangeText={(text) => setReport(text)}
                    value={report}/>
                <Button 
                    onPress={updateStatusFood}
                    disabled={!active}
                    title='Report' 
                    icon={<FontAwesome5 
                            name="tag" size={15} 
                            color="#FFF" 
                            style={{marginRight:5}}  />} 
                    buttonStyle={{width:'95%',alignSelf:'center',marginTop:10}}>  
                </Button>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        flex:1,
        width:300,
        height:300,
        marginTop:5,
        elevation:.3,
        borderColor:'#458',
        borderRadius:5
        
    },
    cardTitle: {
        position:'relative',
        width:'100%',
        height:'30%'
    },
    cardImageTitle:{
        width:'100%',
        height:'100%',
        
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    cardButtonTitle:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'green'
        
    },
    cardBody:{
        flexDirection:'column'
    },
    textBody:{
        fontWeight:'normal', 
        color:'#BBC0C4',
        margin:3
    },
    footerCard:{
        flexDirection:'column'
    }
})
