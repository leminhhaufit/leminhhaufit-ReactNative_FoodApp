import React, { useContext, useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import db from '@react-native-firebase/database';
import moment from "moment";
import { Dropdown } from 'react-native-material-dropdown-v2';
import Toast from 'react-native-toast-message';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export default function ChefAna({ text, icon, cb }) {
    const [data, setData] = useState([]);
    const [chef, setChef] = useState([]);
    const [select, setSelect] = useState('000');

    const chartConfig = {
        backgroundColor: '#fff',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    }

    useEffect(() => {
        db().ref('/orders').on('value', async (data) => {
            const ordersJson = await data.toJSON();
            const mergeData = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                if(value.uid == select){
                    mergeData.push(key);
                }
            }
            setData(mergeData);
        })
    }, [select])

    useEffect(() => {
        db().ref('/users').on('value', async (data) => {
            const ordersJson = await data.toJSON();
            const mergeData = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                if(value.type == 1){
                    mergeData.push({value: value.name + ' - ' + value.uid});
                }
                
            }
            setChef(mergeData);
        })
    }, [])

    function processData() {
        if(data && data.length > 0){
        const commitsData = [];
        const chefId = [];
        const dateId = [];
        for (let i = 0; i < data.length; i++) {
            const verI = data[i].split('|');
            chefId.push(verI[0]);
            dateId.push(verI[1]);
        }

        const countChefId = {};
        chefId.forEach(function (i) { countChefId[i] = (countChefId[i] || 0) + 1; });
        console.log(countChefId);

        const countDateId = {};
        dateId.forEach(function (i) { countDateId[moment(parseInt(i)).format('YYYY-MM-DD')] = (countDateId[moment(parseInt(i)).format('YYYY-MM-DD')] || 0) + 1; });
        console.log(countDateId);

        for (const [key, value] of Object.entries(countDateId)) {
            const entry = { date: key, count: value }
            commitsData.push(entry);
        }
        console.log('commitsData', commitsData);
        return commitsData;}
    }

    return (
        <View style={styles.charview}>
            <Dropdown
                containerStyle={{ width: '90%', alignSelf: 'center',height:50, margin:20 }}
                key="d"
                onChangeText={data => {setSelect(data.split(' - ')[1])}}
                label={'Select waiter'}
                data={chef}
            />

            {processData() &&  processData().length > 0 && (<ContributionGraph
                values={processData()}
                endDate={new Date("2021-07-01")}
                numDays={90}
                horizontal={true}
                width={screenWidth}
                height='100%'
                chartConfig={chartConfig}
                onDayPress={(val) => {
                    if(val.count > 0){
                        Toast.show({
                        type: 'success',
                        text1: "The waiter created "  + val.count,
                        text2:  "invoices on "  + val.date,
                        autoHide: true,
                    });
                    }
                    
                }}
            />)}
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        margin: 5,
        flexShrink: 1,
        height: '50%',
        borderRadius: 5,
        borderWidth: 0.3
    },
    first: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10
    },
    chart: {
        borderRadius: 15,
    },
    charview: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
    },
})