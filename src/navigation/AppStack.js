import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeUser';
import OrderFood from '../screens/OrderFood';
import Payment from '../screens/Payment';
import Profile from '../screens/Profile'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#FFF',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold',

                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                    backgroundColor: '#FFC75F',
                },
                headerRight: () => (
                    <View style={{ marginRight: 20 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <FontAwesome5 name="shopping-basket" color="white" size={28} />
                        </TouchableOpacity>
                    </View>
                ),

            }}
        />
    </Stack.Navigator>
);
const OrderFoodStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Order Food"
            component={OrderFood}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                    backgroundColor: '#FFC75F',
                },
                headerRight: () => (
                    <View style={{ marginRight: 20 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <FontAwesome5 name="shopping-basket" color="white" size={28} />
                        </TouchableOpacity>
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <FontAwesome5 name="arrow-left" color="white" size={28} />

                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    </Stack.Navigator>
);
const PaymentStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                    backgroundColor: '#FFC75F',
                },
                headerLeft: () => (
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <FontAwesome5 name="arrow-left" color="white" size={28} />

                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    </Stack.Navigator>
);
const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                    backgroundColor: '#FFC75F',
                },

            }}
        />
    </Stack.Navigator>
);
const AppStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFC75F',
            }}>
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={({ route }) => ({
                    tabBarLabel: 'Home',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={28} />
                    ),
                })}
            />
            <Tab.Screen
                name="Order"
                component={OrderFoodStack}
                options={({ route }) => ({
                    tabBarLabel: 'Food',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="utensils" color={color} size={28} />
                    ),
                })}
            />
            <Tab.Screen
                name="Payment"
                component={PaymentStack}
                options={({ route }) => ({
                    tabBarLabel: 'Payment',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-basket" color={color} size={28} />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={({ route }) => ({
                    tabBarLabel: 'Profile',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-alt" color={color} size={28} />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default AppStack;