import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
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
import OrderDetailImage from '../components/OrderDetailImage';
import TopFood from '../components/TopFood';
import ChefAna from '../components/ChefAna';
import ManageOrders from '../screens/ManageOrders';
import FormFood from '../screens/FormFood';
import FormStaff from '../screens/FormStaff';
import FormCategory from '../screens/FormCategory';
import Statistical from '../screens/Statistical';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const NavContextAdmin = React.createContext();
const HomeStack = ({ navigation }) => (
    <NavContextAdmin.Provider value={{
        navigation: navigation,
    }}
    >
        <Stack.Navigator >
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
    </NavContextAdmin.Provider>
);
const HomeAdminStack = ({ navigation }) => (
    <NavContextAdmin.Provider value={{
        navigation: navigation,
    }}
    >
        <Stack.Navigator>
            <Stack.Screen
                name="HomeAdmin"
                component={HomeAdmin}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Staff"
                component={ManageStaff}
                options={{
                    title: 'Quản lý nhân viên',
                    headerShown: true,
                    headerStyle: {
                        elevation: 0
                    }
                }}
            />

            <Stack.Screen
                name="Category"
                component={ManageCategory}
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="Food"
                component={ManageFood}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Statistical"
                component={Statistical}
                options={{
                    headerShown: true,
                    title: 'Thống kê'
                }}
            />
            <Stack.Screen
                name="Orders"
                component={ManageOrders}
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="or-dt"
                component={OrderDetailImage}
                options={{
                    headerShown: true,
                    title: 'Chi tiết hóa đơn'
                }}
            />

            <Stack.Screen
                name="FormCategory"
                component={FormCategory}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="FormStaff"
                component={FormStaff}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="FormFood"
                component={FormFood}
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="TopFood"
                component={TopFood}
                options={{
                    headerShown: true,
                    title: 'Doanh thu'
                }}
            />

            <Stack.Screen
                name="ChefAna"
                component={ChefAna}
                options={{
                    headerShown: true,
                    title: 'Lịch sử kích hoạt'
                }}
            />

        </Stack.Navigator>
    </NavContextAdmin.Provider>
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

const AdminStack = () => {
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
                name="HomeAdmin"
                component={HomeAdminStack}
                options={({ route }) => ({
                    tabBarLabel: 'Danh sách quản lý',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="tasks" color={color} size={18} />
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

export default AdminStack;