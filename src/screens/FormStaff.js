import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Picker, Image,TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import SwitchSelector from "react-native-switch-selector";
import Toast from 'react-native-toast-message';
import SecondFirebaseApp from '../config/SecondFirebaseApp';
import ProgressLoader from 'rn-progress-loader';

export default function FormStaff(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [gender, setGender] = useState('Female');
    const [role, setRole] = useState(0);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [done, setDone] = useState(true);
    const {route, navigation } = props;

    const selectFile = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
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
            cropperCircleOverlay: true,
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

    const addEmployee = async (secondaryApp) =>  {
    try {
        if(!selectedImage || !name || !phone || !address || !email || !phone  ){
            Toast.show({
                type: 'error',
                text1: 'Something went wrong  👋'  ,
                autoHide: true,
              });
            return;
        }
        setDone(false);
      // 3 types : [0 => admin, 1 => waiter, 2 => chef]
      const userAuth = await secondaryApp.auth().createUserWithEmailAndPassword(email, password);
      const uid = userAuth.user.uid;
      await secondaryApp.storage().ref(`${uid}/avatar.png`).putFile(selectedImage);
      let imageRef = await secondaryApp.storage().ref(`${uid}/avatar.png`);
      const photoURL = await imageRef.getDownloadURL();
      var user = {
        name,
        phone,
        address,
        email,
        uid,
        photoURL,
        active: true,
        type: role
      }
      writeUserData(user,secondaryApp);

    } catch (error) {
      console.log(error.message)
    }
  }

    async function writeUserData(user,secondaryApp) {
        try {
            await secondaryApp.database().ref('users/' + user.uid).set(user);
            setDone(true);
            navigation.navigate('Staff');
        } catch (error) {
            console.log(error);
        }
   }

    async function initNew(){
        const secondaryApp = await SecondFirebaseApp();
        addEmployee(secondaryApp);    
    }



    const sheetRef = React.useRef(false);
    return (
        <Container >

            <Content style={{ backgroundColor: "#F4F4F4" }} >
                <View style={styles.header}>
                    <Text style={styles.labelheader}>{route.params.title}</Text>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel rounded style={styles.item}>

                        <Label style={styles.label}><FontAwesome5 name="user-tie" size={30} color="#FFC75F" /> Full Name</Label>
                        <Input style={styles.input} value={name} onChangeText={name => setName(name)} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="phone-alt" size={30} color="#FFC75F" /> Number Phone</Label>
                        <Input style={styles.input} value={phone} onChangeText={phone => setPhone(phone)} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="map-marker-alt" size={30} color="#FFC75F" /> Address</Label>
                        <Input style={styles.input} value={address} onChangeText={address => setAddress(address)} />
                    </Item>
                    <Label style={styles.label2}><FontAwesome5 name="venus-mars" size={30} color="#FFC75F" /> Gender</Label>
                    <SwitchSelector
                        initial={0}
                        onPress={gender => setGender(gender)}
                        textColor="#FFC75F" //'#7a44cf'
                        selectedColor="#fff"
                        buttonColor="#FFC75F"
                        borderColor="#FFC75F"
                        borderWidth={1.5}
                        hasPadding
                        options={[
                            { label: "Female", value: 0},
                            { label: "Male", value: 1},
                        ]}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        style={styles.switch}
                        selectedTextStyle={styles.switchtextselect}
                        textStyle={styles.switchtext}
                        imageStyle={styles.switchimg}
                    />

                    <Label style={styles.label2}><FontAwesome5 name="venus-mars" size={30} color="#FFC75F" /> Role</Label>
                    <SwitchSelector
                        initial={0}
                        onPress={role => {setRole(role);console.log(role)}}
                        textColor="#FFC75F" //'#7a44cf'
                        selectedColor="#fff"
                        buttonColor="#FFC75F"
                        borderColor="#FFC75F"
                        borderWidth={1.5}
                        hasPadding
                        options={[
                            { label: "Admin", value: 0},
                            { label: "Waiter", value: 1},
                            { label: "Chef", value: 2}
                        ]}
                        testID="role-switch-selector"
                        accessibilityLabel="role-switch-selector"
                        style={styles.switch}
                        selectedTextStyle={styles.switchtextselect}
                        textStyle={styles.switchtext}
                        imageStyle={styles.switchimg}
                    />

                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="at" size={30} color="#FFC75F" /> Email</Label>
                        <Input style={styles.input} value={email} onChangeText={email => setEmail(email)}/>
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}><FontAwesome5 name="lock" size={30} color="#FFC75F" /> Password</Label>
                        <Input style={styles.input} secureTextEntry value={password} onChangeText={password => setPassword(password)} />
                    </Item>
                    <Label style={styles.label2}><FontAwesome5 name="image" size={32} color="#FFC75F" /> Avatar</Label>
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
                        {done == false && 
                        <ProgressLoader
                            visible={true}
                            isModal={true} isHUD={true}
                            hudColor={"#FFFFFF"}
                            color={"#000000"} />
                        }
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
        marginTop: 20,
        paddingLeft: 40,
        fontSize: 22,
        fontWeight: '500',
    },
    iconlabel: {
        opacity: 1,
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
        fontSize: 25,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
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
        borderRadius: 40,
    },
    iconadd: {
        opacity: 0.5,
    },
    switch: {
        alignSelf: 'stretch',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        backgroundColor: '#fff',

    },
    switchtextselect: {
        fontWeight: 'bold',
        fontSize: 18
    },
    switchtext: {
        fontSize: 18
    },
    switchimg: {
        width: 40,
        height: 40,

    },
})
