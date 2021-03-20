import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/HomeUser';
import OrderFood from '../screens/OrderFood';
import Payment from '../screens/Payment';
import Profile from '../screens/Profile'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Dashboard"
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
                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <Icon color="#FFF" name="payment" />
                            <Text style={{ color: '#FFF' }}>Cart</Text>
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
            name="OrderFood"
            component={OrderFood}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#FFC75F',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <Icon color="#FFF" name="payment" />
                            <Text style={{ color: '#FFF' }}>Cart</Text>
                        </TouchableOpacity>
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>

                            <Text>Back</Text>
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
                    color: '#FFC75F',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },

                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('OrderFood')}>
                            <Text>Back</Text>
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
                    color: '#FFC75F',
                    fontFamily: 'Kufam-SemiBoldItalic',
                    fontSize: 22,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        {/* <FontAwesome5.Button
                            name={'plus'}
                            size={22}
                            backgroundColor="#fff"
                            color="#FFC75F"
                            onPress={() => navigation.navigate('Login')}
                        /> */}
                        <Text style={{ color: '#FFC75F' }}>Cart</Text>
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <Text>Back</Text>
                    </View>
                )
            }}
        />
    </Stack.Navigator>
);
const AppStack = () => {
    // const getTabBarVisibility = (route) => {
    //     const routeName = route.state
    //         ? route.state.routes[route.state.index].name
    //         : '';

    //     if (routeName === 'Chat') {
    //         return false;
    //     }
    //     return true;
    // };

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
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" />
                    ),
                })}
            />
            <Tab.Screen
                name="Order"
                component={OrderFoodStack}
                options={({ route }) => ({
                    tabBarLabel: 'Order',
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="book" />
                    ),
                })}
            />
            <Tab.Screen
                name="Payment"
                component={PaymentStack}
                options={({ route }) => ({
                    tabBarLabel: 'Payment',
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="payment" />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={({ route }) => ({
                    tabBarLabel: 'Profile',
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="info" />
                    ),
                })}
            />

        </Tab.Navigator>
    );
};

export default AppStack;