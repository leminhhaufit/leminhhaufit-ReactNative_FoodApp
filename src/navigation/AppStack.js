import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthProvider';
import HomeScreen from '../screens/HomeUser';
import OrderFood from '../screens/OrderFood';
import FoodDetail from '../screens/FoodDetail';
import Payment from '../screens/Payment';
import Status from '../screens/Status';
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
export const NavContext = React.createContext();
const FeedStack = ({ navigation }) => (
    <NavContext.Provider value={{
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
            {/* <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                options={{
                    headerShown: false,
                }}
            /> */}
        </Stack.Navigator>
    </NavContext.Provider>
);
const OrderFoodStack = ({ navigation }) => (
    <NavContext.Provider value={{
        navigation: navigation
    }}
    >
        <Stack.Navigator >
            <Stack.Screen
                name="OrderFood"
                component={OrderFood}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="FoodDetail2"
                component={FoodDetail}
                options={{
                    headerShown: true,
                    headerLeft: () => (<Button
                        icon={<FontAwesome5
                            name="chevron-left"
                            size={15}
                            color="#BBC0C4"
                            style={{ margin: 4 }} />}
                        buttonStyle={{ margin: 4, backgroundColor: '#FFF' }}
                        onPress={() => navigation.navigate('OrderFood')} />),
                    title: 'Chi tiết món ăn'
                }}
            />
        </Stack.Navigator>
    </NavContext.Provider>
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

        <Stack.Screen
            name="StatusPayment"
            component={Status}
            options={{
                headerShown: true,
                title: 'Đơn đặt của bạn',
                headerLeft: null
            }}
        />
    </Stack.Navigator>
);
const ProfileStack = ({ navigation }) => (
    <NavContext.Provider value={{
        navigation: navigation,
    }}
    >
        <Stack.Navigator>
            <Stack.Screen
                name="Profile2"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Information"
                component={Information}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="FormStaff1"
                component={FormStaff}
                options={{
                    headerShown: true,
                    title: 'cập nhật thông tin'
                }}
            />
        </Stack.Navigator>
    </NavContext.Provider>
);

const AppStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#5bc1ef',
                labelStyle: {
                    fontSize: 12,
                    paddingBottom: 5
                },
                iconStyle: {
                    marginTop: 3,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={({ route }) => ({
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={18} />
                    ),
                })}
            />
            <Tab.Screen
                name="Order"
                component={OrderFoodStack}
                options={({ route }) => ({
                    tabBarLabel: 'Món ăn',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="utensils" color={color} size={18} />
                    ),
                })}
            />
            <Tab.Screen
                name="Payment"
                component={PaymentStack}
                options={({ route }) => ({
                    tabBarLabel: 'Thanh toán',

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-basket" color={color} size={18} />
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

export default AppStack;