import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeUser';
import OrderFood from '../screens/OrderFood';
import FoodDetail from '../screens/FoodDetail';
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
                headerShown: false,
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
                headerShown: false,
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
                headerShown: false,
                // headerLeft: () => (
                //     <View style={{ marginLeft: 20 }}>
                //         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                //             <FontAwesome5 name="arrow-left" color="white" size={28} />

                //         </TouchableOpacity>
                //     </View>
                // )
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
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);
const FoodDetailStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="FoodDetail"
            component={FoodDetail}
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