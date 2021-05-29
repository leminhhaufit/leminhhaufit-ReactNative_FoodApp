import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableOpacity } from 'react-native';
import ProgressLoader from 'rn-progress-loader';
import SecondFirebaseApp from '../config/SecondFirebaseApp';
import Toast from 'react-native-toast-message';
import { AuthContext } from '../navigation/AuthProvider';
import db from '@react-native-firebase/database';
import { Dropdown } from 'react-native-material-dropdown-v2';

export default function FormFood({route, navigation}) {

    const { title, foodlist, type } = route.params;
    const [selectedValue, setSelectedValue] = useState("category");
    const [selectedImage, setSelectedImage] = useState(foodlist?.photoURL);
    const [name, setName] = useState(foodlist?.name);
    const [des, setDes] = useState(foodlist?.description);
    const [ingre, setIngre] = useState(foodlist?.ingredient);
    const [price, setPrice] = useState(foodlist?.price);
    const [done, setDone] = useState(false);
    const [category, setCategory] = useState(foodlist?.category);
    const { user, setUser } = useContext(AuthContext);
    const { uid } = user;
    const [catelist, setCatelist] = useState([])



    console.log(name);
    useEffect(() => {
        db().ref('/category').on('value', async (data) => {
            const ordersJson = await data.toJSON();
            const orders = [];
            for (const [key, value] of Object.entries(ordersJson)) {
                if (value.active) {
                    orders.push({ value: decodeURIComponent(key) });
                }
            }
            setCatelist(orders);
        })
    }, [])

    const selectFile = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setSelectedImage(image.path);
        });
    };
    const selectCamera = () => {
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setSelectedImage(image.path);
        });
    }
    const renderContent = () => (
        <View
            style={{
                backgroundColor: '#F4F4F4',
                padding: 16,
                height: 300,
            }}
        >
            <Text style={styles.labelsheet}>Add Image</Text>
            <Button full rounded style={styles.btn}
                onPress={selectCamera}
            >
                <Text style={styles.textbtn}><FontAwesome5 name="camera" size={40} color="#FFF" /> Open Camera</Text>
            </Button>
            <Button full rounded style={styles.btn}
                onPress={selectFile}
            >
                <Text style={styles.textbtn}><FontAwesome5 name="photo-video" size={40} color="#FFF" /> Select in library</Text>
            </Button>
            <Text style={styles.labelclose}>Swipe down to close</Text>
        </View>
    );


    const addFood = async (secondaryApp) => {
        try {
            if (!selectedImage || !name || !des || !ingre || !price) {
                Toast.show({
                    type: 'error',
                    text1: 'Something went wrong  👋',
                    autoHide: true,
                });
                return;
            }
            setDone(true);
            const curTime = new Date().getTime();
            let photoURL;
            if(type === 'ADD'){
                await secondaryApp.storage().ref(`foods/${uid}/${curTime}.png`).putFile(selectedImage);
                let imageRef = await secondaryApp.storage().ref(`foods/${uid}/${curTime}.png`);
                photoURL = await imageRef.getDownloadURL();
            }
            const foodObj = {
                name,
                description: des,
                ingredient: ingre,
                price,
                photoURL,
                active: true,
                date: new Date().getTime(),
                uid,
                category,
                id: `${uid}|${curTime}`,
                notes: 'nothing'
            }
            if(type === 'ADD'){
                await db().ref(`foods/${uid}|${curTime}`).set(foodObj);
                setDone(false);
            }else{
                await db().ref(`foods/${foodlist.key}`).update({...foodObj,photoURL:foodlist.photoURL, id: foodlist.id});
                setDone(false);
            }
            navigation.navigate('Food');
        } catch (error) {
            console.log(error.message)
            setDone(false);
        }
    }


    async function initNew() {
        const secondaryApp = await SecondFirebaseApp();
        addFood(secondaryApp);
    }



    const sheetRef = React.useRef(null);
    return (
        <Container >

            <Content style={{ backgroundColor: "#F4F4F4" }} >
                <View style={styles.header}>
                    <Text style={styles.labelheader}>{title}</Text>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="pizza-slice" size={32} color="#FFC75F" /> Name Food</Label>
                        <Input style={styles.input} value={name} onChangeText={name => setName(name)} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="file-alt" solid size={32} color="#FFC75F" /> Description</Label>
                        <Input style={styles.input} value={des} onChangeText={des => setDes(des)} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="book-open" solid size={32} color="#FFC75F" /> Ingredient</Label>
                        <Input style={styles.input} value={ingre} onChangeText={ingre => setIngre(ingre)} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="dollar-sign" solid size={32} color="#FFC75F" /> Price</Label>
                        <Input keyboardType='numeric' style={styles.input} value={price} onChangeText={price => setPrice(price)} />
                    </Item>
                    <Label style={styles.label2}><FontAwesome5 name="tags" solid size={32} color="#FFC75F" /> Category</Label>
                    <Dropdown
                        containerStyle={{ width: '90%', alignSelf: 'center' }}
                        key="d"
                        onChangeText={data => setCategory(data)}
                        label={category ? category : 'Favorite Fruit'}
                        data={catelist}
                    />
                    <Label style={styles.label2}><FontAwesome5 name="image" size={32} color="#FFC75F" /> Images</Label>
                    <View style={styles.viewImage}>

                        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                            {
                                selectedImage == null &&
                                <FontAwesome5 name="plus-circle" size={50} color="black" style={styles.iconadd} />
                            }
                            {
                                selectedImage != null &&
                                <Image source={{ uri: selectedImage }} style={styles.img} />
                            }
                        </TouchableOpacity>


                    </View>
                    <Button
                        full
                        rounded
                        style={styles.btn}
                        onPress={initNew}
                    >
                        <Text style={styles.textbtn}><FontAwesome5 name="download" size={32} color="#FFF" /> Comfirm</Text>
                    </Button>
                </Form>
            </Content>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[260, 150, 0]}
                borderRadius={50}
                initialSnap={2}
                renderContent={renderContent}
            />

            <ProgressLoader
                visible={done}
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
        color: '#545455'

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

    viewImage: {
        alignItems: 'center',
        width: 120,
        height: 120,
        borderWidth: 5,
        borderStyle: 'dotted',
        borderRadius: 40,
        alignSelf: 'stretch',
        opacity: 0.5,
        justifyContent: 'center',
        margin: 10,
        marginLeft: 30,
    },
    img: {
        width: 120,
        height: 120,
    },
    iconadd: {
        opacity: 0.5,
    }
})
