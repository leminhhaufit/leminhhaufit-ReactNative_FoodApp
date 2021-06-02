import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import ProfileButton from '../components/ProfileButton';
import { Dimensions } from "react-native";
import { NavContextAdmin } from '../navigation/AdminStack';
const screenWidth = Dimensions.get("window").width;
export default function Statistical() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgb(255, 199, 95, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Sales in the Quarter"] // optional
    };
    const data2 = {
        data: [0.4]
    };
    const chartConfig = {
        backgroundGradientFrom: "#2c3a60",
        backgroundGradientFromOpacity: 0.8,
        backgroundGradientTo: "#2b3453",
        backgroundGradientToOpacity: 1,

        color: (opacity = 0.8) => `rgb(255, 199, 95, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const chartConfig2 = {
        backgroundGradientFrom: "#e97067",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#f9943d",
        backgroundGradientToOpacity: 1,

        color: (opacity = 0.8) => `rgb(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const chartConfig3 = {
        backgroundGradientFrom: "#e97067",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#9c3c96",
        backgroundGradientToOpacity: 1,

        color: (opacity = 0.8) => `rgb(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const chartConfig4 = {
        backgroundGradientFrom: "#FC354C",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#0ABFBC",
        backgroundGradientToOpacity: 1,

        color: (opacity = 0.8) => `rgb(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const chartConfig5 = {
        backgroundGradientFrom: "#f857a6",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#ff5858",
        backgroundGradientToOpacity: 1,

        color: (opacity = 0.8) => `rgb(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return (
        
                <NavContextAdmin.Consumer>
                    {({navigation}) => 
                    <View style={styles.container}>
                        <ProfileButton text='Revenue' icon='chart-line' cb={() =>navigation.navigate('TopFood')}/>
                        <ProfileButton text='Foods' icon='utensils' cb={() =>console.log('a')}/>
                        <ProfileButton text='Waiter' icon='concierge-bell' cb={() =>navigation.navigate('ChefAna')}/>
                        <ProfileButton text='Chef' icon='pizza-slice' cb={() =>console.log('a')} />
                    </View >
                    }
                </NavContextAdmin.Consumer>
                
       
        //<TopFood />
       // <ChefAna />
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin:20
    }
})
