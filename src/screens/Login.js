import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Linking, ImageBackground, TouchableOpacity } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import Username from '../components/Username';
import Password from '../components/Password';
import LabelLogin from '../components/LabelLogin';
import ImageBackgroundURL from '../assets/angryimg.png';

Login.propTypes = {

};

function Login({ navigation }) {
    const [isLoad, setIsload] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [type, setType] = useState('success');
    useEffect(() => {
        Toast.show({
          type: type,
          text1: errorMessage ? errorMessage + '👋' : 'Welcome, you back! 👋'  ,
          autoHide: false,
        });
      },[errorMessage]);
    async function signIn(txtemail, txtpassword) {
        try {
            setIsload(true);
            setType('success')
            let response = await auth()
                .signInWithEmailAndPassword(txtemail, txtpassword)
            

            if (response && response.user) {
                setErrorMessage("Success!");
            }

        } catch (err) {
            setIsload(false);
            setType('error')
            console.log(err.code)
            if (err.code === "auth/invalid-email") {
                setErrorMessage("Email Invalid!")
            }
            if (err.code === "auth/user-not-found") {
                setErrorMessage("User not found!")
            }
            if (err.code === "auth/wrong-password") {
                setErrorMessage("Wrong Password");
            }
            if (err.code === "auth/too-many-requests") {
                setErrorMessage("Too many requests");
            }
            console.log("State:",errorMessage );
        }
    }

    const handlePress = () => {
        setType('error');
        if (!email) {
            setErrorMessage('Email field is required.');
        }
        else if (!password) {

            setErrorMessage('Password field is required.');
        }
        //kiem tra password
        // else if (!validateEmail(email)) {
        //     setErrorMessage('Password not valid!.');
        // }
        if (email && password) {
            console.log("setEmail", email);
            console.log("setPass", password);
            signIn(email, password);

        }
    };
    // kiem tra password
    // const validateEmail = (regex) => {
    //     var re = /^[A-Z]{1}[a-zA-Z.@\d]{6,}\S*$/;
    //     return re.test(regex);
    // };
    return (
        <View style={styles.container}>
            <ImageBackground source={ImageBackgroundURL} style={styles.image}>
                <LabelLogin />
                <Username setEmail={setEmail} />
                <Password setPassword={setPassword} />
                <TouchableOpacity
                    onPress={handlePress}
                >
                    <View style={styles.btnlogin}>
                        <Text style={styles.textbtn}>
                            Login  ➜
                    </Text>
                    </View>
                </TouchableOpacity>
                {
                    isLoad &&
                    <AnimatedLoader
                        visible={isLoad}
                        overlayColor="rgba(255,255,255,0.75)"
                        source={require("../assets/animation/foodload.json")}
                        animationStyle={styles.lottie}
                        speed={0.7}
                    >
                        <Text style={styles.textload}>Waiting food...</Text>
                    </AnimatedLoader>
                }
                <Text style={styles.footer} onPress={() => Linking.openURL('http://google.com')} >
                 Forgotten password?
                </Text>
            </ImageBackground>
        </View >

    );
}
const styles = StyleSheet.create({
    container: {
        
    },
    btnlogin: {
        backgroundColor: "#FFC75F",
        borderRadius: 30,
        height: 50,
        marginTop: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        padding: 6,
        width:'90%',
        alignItems:'center',
        alignSelf:'center'

    },
    footer: {
        color: "#458",
        borderRadius: 5,
        fontWeight: '600',
        alignSelf:'center',
        position:'relative',
        fontSize:14,
        top:10,
        padding:10
        

    },
    image: {
        height: '100%',
        width: '100%',
        
    },
    errorMessage: {
        color: 'red',
        fontSize: 14,
        fontWeight: '200',
        marginLeft: 20
    },
    lottie: {
        width: 250,
        height: 250
    },
    textbtn: { color: '#fff', fontWeight: '600', fontSize: 21, padding: 5, paddingLeft: 15, paddingRight: 15, }
    
    ,
    textload: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default Login;