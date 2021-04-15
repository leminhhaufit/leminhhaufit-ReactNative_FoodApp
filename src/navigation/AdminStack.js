import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeUser';
import OrderFood from '../screens/OrderFood';
import FoodDetail from '../screens/FoodDetail';
import Payment from '../screens/Payment';
import Profile from '../screens/Profile'
import HomeKitchen from '../screens/HomeKitchen';
import Information from '../screens/Information';
import HomeAdmin from '../screens/HomeAdmin';
import ManageFood from '../screens/ManageFood';
import ManageStaff from '../screens/ManageStaff';
import ManageCategory from '../screens/ManageCategory';
import ManageOrders from '../screens/ManageOrders';
import FormFood from '../screens/FormFood';
import FormStaff from '../screens/FormStaff';
import FormCategory from '../screens/FormCategory';
import Statistical from '../screens/Statistical';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Statistical}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);
const HomeAdminStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Order Food"
            component={ManageStaff}
            options={{
                headerShown: false,
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
const AdminStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFC75F',
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarLabel: 'Home',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={28} />
                    ),
                })}
            />
            <Tab.Screen
                name="Order"
                component={HomeAdminStack}
                options={({ route }) => ({
                    tabBarLabel: 'List Manage',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="tasks" color={color} size={28} />
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

export default AdminStack;