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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { NavContextAdmin } from '../navigation/AdminStack';
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
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>
                    <NavContextAdmin.Consumer>
                        {({ navigation }) =>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <FontAwesome5 name="chevron-circle-left" size={28} color="#FFC75F" style={styles.iconback} />
                            </TouchableOpacity>}
                    </NavContextAdmin.Consumer>

                     Statistical

                     </Text>
            </View>
            <View style={styles.charview}>
                <LineChart
                    data={data}
                    width={screenWidth - 40}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    bezier
                />

            </View>
            <Text style={styles.label}>Sales in the Quarter</Text>
            <View style={styles.chartminiview}>
                <View style={styles.charmini}>
                    <ProgressChart
                        data={data2}
                        width={screenWidth / 3}
                        height={120}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig2}
                        hideLegend={false}
                        style={styles.chartmini2}
                    />
                    <Text style={styles.label}>Sales in Month 1</Text>
                </View>
                <View style={styles.charmini2}>
                    <ProgressChart
                        data={data2}
                        width={screenWidth / 3}
                        height={120}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig3}
                        hideLegend={false}
                        style={styles.chartmini2}
                    />
                    <Text style={styles.label}>Sales in Month 2</Text>
                </View>
            </View>
            <View style={styles.chartminiview}>
                <View style={styles.charmini}>
                    <ProgressChart
                        data={data2}
                        width={screenWidth / 3}
                        height={120}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig4}
                        hideLegend={false}
                        style={styles.chartmini2}
                    />
                    <Text style={styles.label}>Sales in Month 3</Text>
                </View>
                <View style={styles.charmini2}>
                    <ProgressChart
                        data={data2}
                        width={screenWidth / 3}
                        height={120}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig5}
                        hideLegend={false}
                        style={styles.chartmini2}
                    />
                    <Text style={styles.label}>Sales Total</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    label: {
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '200',
        opacity: 0.6,
    },
    chart: {
        borderRadius: 50,
    },
    charview: {
        backgroundColor: '#FFF',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 50,
        paddingRight: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    chartminiview: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    charmini: {
        marginTop: 20,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    charmini2: {
        marginLeft: 60,
        marginTop: 20,
        alignItems: 'flex-end',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    chartmini2: {
        borderRadius: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingTop: 20,
    },
    iconback: {
        paddingRight: 20,
    }
})
