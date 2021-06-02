import React, {useContext,useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet , Text, View, TouchableOpacity,ScrollView} from 'react-native';
import db from '@react-native-firebase/database';
import moment from "moment";
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
export default function TopFood({text,icon,cb}) {
    const [dataValue, setData] = useState([0,2387000]);
    const [currentMonth, setCurrent] = useState([0]);
    const [currentDay, setCurrentDay] = useState([0]);


    useEffect(() => {  
        db().ref('/order-details').on('value',async (data) => {
            const ordersJson = await data.toJSON();
            let total = 0;
            for (const [key, value] of Object.entries(ordersJson)) {
               const currentQuarter = moment().quarter();
               if(moment(value.idOrders).quarter() == currentQuarter){
                   total += value.price * value.quantity;
               }
              }
              setData([...dataValue,total]);
        })
    },[])


    useEffect(() => {  
        db().ref('/order-details').on('value',async (data) => {
            const ordersJson = await data.toJSON();
            let total = 0;
            for (const [key, value] of Object.entries(ordersJson)) {
               const currentMonth = moment(new Date().getTime()).format('MM');
               if(moment(value.idOrders).format('MM') == currentMonth){
                   total += value.price * value.quantity;
               }
              }
              setCurrent([...currentDay,total]);
        })
    },[])

    useEffect(() => {  
        db().ref('/order-details').on('value',async (data) => {
            const ordersJson = await data.toJSON();
            let total = 0;
            for (const [key, value] of Object.entries(ordersJson)) {
               const currentDay = moment(new Date().getTime()).format('DD-MM-YYYY');
               if(moment(value.idOrders).format('DD-MM-YYYY') == currentDay){
                   total += value.price * value.quantity;
               }
              }
              setCurrentDay([...currentMonth,total]);
        })
    },[])



    const chartConfig = {
        backgroundGradientFrom: "#2c3a60",
        backgroundGradientFromOpacity: .8,
        backgroundGradientTo: "#2b3453",
        backgroundGradientToOpacity: 1,
        color: (opacity = 0.8) => `rgb(255, 199, 95, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        decimalPlaces: 0,
        useShadowColorFromDataset: true // optional
      };
      const data = {
        labels: ["0","First", "Second"],
        datasets: [
            {
                data: dataValue,
                color: (opacity = 1) => `rgb(255, 199, 95, ${opacity})`, // optional
                strokeWidth: 3 // optional
            }
        ],
        legend: ["Quarterly Revenue"] // optional
    };


    const dataCurrentMonth = {
        labels: ["0", `${moment(new Date().getTime()).format('MMM')}`],
        datasets: [
            {
                data: currentMonth,
                color: (opacity = 1) => `rgb(255, 199, 95, ${opacity})`, // optional
                strokeWidth: 3 // optional
            }
        ],
        legend: [`Current Month (${moment(new Date().getTime()).format('MMM')})`] // optional
    };

    const dataCurrentDay = {
        labels: ["0", `${moment(new Date().getTime()).format('DD-MM')}`],
        datasets: [
            {
                data: currentDay,
                color: (opacity = 1) => `rgb(255, 199, 95, ${opacity})`, // optional
                strokeWidth: 3 // optional
            }
        ],
        legend: [`Current Day (${moment(new Date().getTime()).format('DD - MM - YYYY')})`] // optional
    };

    return (
        <ScrollView>
            <View style={styles.charview}>
                <LineChart
                    data={data}
                    width={screenWidth - 40}
                    height={256}
                    yAxisLabel="₫"
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    bezier
                />

            </View>

            <View style={styles.charview}>
                <LineChart
                    data={dataCurrentMonth}
                    width={screenWidth - 40}
                    height={256}
                    yAxisLabel="₫"
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    bezier
                />

            </View>

            <View style={styles.charview}>
                <LineChart
                    data={dataCurrentDay}
                    width={screenWidth - 40}
                    height={256}
                    yAxisLabel="₫"
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    bezier
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    box:{
        margin:5,
        flexShrink:1,
        height:'50%',
        borderRadius:5,
        borderWidth:0.3
    },
    first:{
        backgroundColor:'#fff',
        margin:20,
        borderRadius:10
    },
    charview: {
        backgroundColor: '#FFF',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        marginTop: 20,
        paddingRight: 50,
        shadowColor: "#000",
    },
    chart: {
        borderRadius: 15,
    },
})