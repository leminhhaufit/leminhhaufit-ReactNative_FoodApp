import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import staff from '../assets/managestafftrans.png';
import category from '../assets/managecatetrans.png';
import food from '../assets/managefoodtrans.png';
import chart from '../assets/managecharttrans.png';
import orderdetail from '../assets/managebilltrans.png';

import { NavContextAdmin } from '../navigation/AdminStack';

export default function FlatListAdmin() {
    return (
        <NavContextAdmin.Consumer>
            {({ navigation }) =>
                <View style={styles.flatlist}>

                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Staff')}>
                        <View style={styles.container2}>
                            <Text style={styles.title}>Quản lý nhân viên</Text>
                            <Text style={styles.content}>Thêm, xóa, sửa thông tin nhân viên </Text>
                            <Image style={styles.image} source={staff} />
                            <View style={styles.btnadd}>
                                <FontAwesome5Icon name="users-cog" size={36} color="#FFF" style={{ alignSelf: 'center', paddingTop: 5, }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Category')}>
                        <View style={styles.container2}>
                            <Text style={styles.title}>Quản lý danh mục</Text>
                            <Text style={styles.content}>Thêm, xóa, sửa thông tin danh mục </Text>
                            <Image style={styles.image} source={category} />
                            <View style={styles.btnadd}>
                                <FontAwesome5Icon name="swatchbook" size={36} color="#FFF" style={{ alignSelf: 'center', paddingTop: 5, }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Food')}>
                        <View style={styles.container2}>
                            <Text style={styles.title}>Quản lý món ăn</Text>
                            <Text style={styles.content}>Thêm, xóa, sửa thông tin món ăn</Text>
                            <Image style={styles.image} source={food} />
                            <View style={styles.btnadd}>
                                <FontAwesome5Icon name="pizza-slice" size={36} color="#FFF" style={{ alignSelf: 'center', paddingTop: 5, }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Statistical')}>
                        <View style={styles.container2}>
                            <Text style={styles.title}>Thống kê</Text>
                            <Text style={styles.content}>Xem lợi nhuận, doanh thu của nhà hàng</Text>
                            <Image style={styles.image} source={chart} />
                            <View style={styles.btnadd}>
                                <FontAwesome5Icon name="chart-line" size={36} color="#FFF" style={{ alignSelf: 'center', paddingTop: 5, }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Orders')}>
                        <View style={styles.container2}>
                            <Text style={styles.title}>Chi tiết hóa đơn</Text>
                            <Text style={styles.content}>Xem thông tin hóa đơn khách hàng đã mua</Text>
                            <Image style={styles.image} source={orderdetail} />
                            <View style={styles.btnadd}>
                                <FontAwesome5Icon name="info-circle" size={36} color="#FFF" style={{ alignSelf: 'center', paddingTop: 5, }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            }
        </NavContextAdmin.Consumer>
    )
}
const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft: 40,
        //marginTop: 20,
        marginRight: 40,
        borderRadius: 25,
        height: 140,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: 40,
    },
    container2: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 140,

    },
    award: {
        fontSize: 16,
        fontWeight: '400',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 10,
        width: 200,
    },
    image: {
        position: 'absolute',
        width: 120,
        height: 120,
        right: -35,
        top: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        width: 240,
    },
    content: {
        fontSize: 16,
        fontWeight: '300',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingTop: 5,
        opacity: 0.5,
        width: 250,
        height: 60,
    },
    btnadd: {
        backgroundColor: "#FFC75F",
        width: 100,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    iconplus: {
        alignSelf: 'center',
        paddingTop: 15,
    },
    price: {
        position: 'absolute',
        bottom: 0,
        width: 100,
        height: 50,
        alignSelf: 'center',
    },
    txtprice: {
        alignSelf: 'flex-start',
        paddingTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
})
