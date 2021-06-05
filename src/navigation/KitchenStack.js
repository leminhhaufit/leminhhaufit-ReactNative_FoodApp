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
import FormFood from '../screens/FormFood';
import FormStaff from '../screens/FormStaff';
import FormCategory from '../screens/FormCategory';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const NavContextKit = React.createContext();
const HomeStack = ({ navigation }) => (
    <NavContextKit.Provider value={{ navigation: navigation }}>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    </NavContextKit.Provider>
);
const HomeKitchenStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="HomeKitchen"
            component={HomeKitchen}
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

        <Stack.Screen
            name="FormStaff1"
            component={FormStaff}
            options={{
                headerShown: true,
                title: 'Cập nhật thông tin'
            }}
        />
    </Stack.Navigator>
);
const KitchenStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFC75F',
                labelStyle: {
                    fontSize: 12,
                    paddingBottom: 5
                },
                iconStyle: {
                    marginTop: 3
                }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarLabel: 'Trang chủ',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={18} />
                    ),
                })}
            />
            <Tab.Screen
                name="Order"
                component={HomeKitchenStack}
                options={({ route }) => ({
                    tabBarLabel: 'Danh sách yêu cầu',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list-ol" color={color} size={18} />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={({ route }) => ({
                    tabBarLabel: 'Thông tin',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-alt" color={color} size={18} />
                    ),
                })}
            />

        </Tab.Navigator>
    );
};

export default KitchenStack;