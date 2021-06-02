import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Textarea } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import db from '@react-native-firebase/database';
import ProgressLoader from 'rn-progress-loader';
import { AuthContext } from '../navigation/AuthProvider';
import Toast from 'react-native-toast-message';


export default function FormCategory(props) {
    const { route } = props;
    const { title, type, catelist } = route.params;
    const [category, setCategory] = useState(catelist);
    const [loading, setLoading] = useState(false);
    const { user: { uid } } = useContext(AuthContext);
    console.log(category);
    const addCategory = async () => {
        setLoading(true);
        if (!category?.name || !category?.description) {
            Toast.show({
                type: 'error',
                text1: `Something went wrong`,
                autoHide: true,
            });
            setLoading(false);
            return;
        }
        const createTime = new Date().getTime();
        const objChef = {
            name: category.name,
            description: category.description,
            create: createTime,
            active: true,
            uid
        }
        if (type === 'ADD') {
            try {
                await db().ref(`category/${encodeURIComponent(category.name.toLowerCase().trim())}`).set(objChef);
                Toast.show({
                    type: 'success',
                    text1: `Thêm thành công danh mục`,
                    autoHide: true,
                });
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error)
                Toast.show({
                    type: 'error',
                    text1: `Đã xảy ra lỗi rồi !!!!`,
                    autoHide: true,
                });
            }

        } else {
            try {
                await db().ref(`category/${category.key}`).set(objChef);
                Toast.show({
                    type: 'success',
                    text1: `Cập nhật danh mục thành công`,
                    autoHide: true,
                });
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }

        }

    }

    return (
        <Container >
            <Content style={{ backgroundColor: "#F4F4F4" }} >
                <View style={styles.header}>
                    <Text style={styles.labelheader}>{title}</Text>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="tags" solid size={32} color="#FFC75F" /> Tên danh mục</Label>
                        <Input style={styles.input} onChangeText={val => setCategory({ ...category, name: val })} value={category.name} />
                    </Item>
                    <Label style={styles.label2}><FontAwesome5 name="file-alt" solid size={32} color="#FFC75F" /> Mô tả</Label>
                    <Textarea value={category.description} rowSpan={7} bordered placeholder="Description..." style={styles.textarea} onChangeText={val => setCategory({ ...category, description: val })} />

                    <Button full rounded style={styles.btn} onPress={addCategory}>
                        <Text style={styles.textbtn}><FontAwesome5 name="download" size={32} color="#FFF" /> Xác nhận</Text>
                    </Button>
                </Form>
            </Content>

            <ProgressLoader
                visible={loading}
                isModal={true} isHUD={true}
                hudColor={"#FFFFFF"}
                color={"#000000"} />
        </Container >
    )
}

const styles = StyleSheet.create({
    label: {
        paddingLeft: 20,
        fontSize: 22,
        fontWeight: '500',

    },
    label2: {
        paddingLeft: 40,
        fontSize: 22,
        fontWeight: '500',
        marginTop: 30,
    },
    input: {
        paddingLeft: 20,
        paddingBottom: 20,
        height: 70,
        fontSize: 22,
        fontWeight: '600',

    },
    item: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    pickerstyle: {
        height: 70,
        width: 350,
        alignSelf: 'stretch',
        opacity: 0.6,
        marginLeft: 20,
        fontSize: 32,
    },
    labelheader: {
        fontSize: 32,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        padding: 40,
        color: '#FFC75F'
    },
    labelsheet: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'stretch',
        color: '#FFC75F'
    },
    labelclose: {
        paddingTop: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'stretch',
        color: '#FFC75F'
    },
    form: {
        borderRadius: 50,
        backgroundColor: '#FFF'
    },
    header: {
        flex: 1,
    },
    detail: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 350,
        width: 420
    },
    btn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        height: 70,
        backgroundColor: '#FFC75F',
    },
    textbtn: {
        fontSize: 28,
        fontWeight: '600',
        color: '#FFF'
    },
    textarea: {
        borderRadius: 60,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 22,
        fontWeight: '500',

    }
})
