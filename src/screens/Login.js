import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Linking, ImageBackground, TouchableOpacity } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
// import Spinner from 'react-native-loading-spinner-overlay';

// import { signIn } from '../config/firebaseAPI';
import auth from '@react-native-firebase/auth';

import PropTypes from 'prop-types';

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
    async function signIn(txtemail, txtpassword) {
        try {
            setIsload(true);
            let response = await auth()
                .signInWithEmailAndPassword(txtemail, txtpassword);

            setIsload(false);

            if (response && response.user) {
                setErrorMessage("Success!");
            }

        } catch (err) {
            setIsload(false);
            console.log(err.code)
            if (err.code === "auth/invalid-email") {
                setErrorMessage("Email Invalid!")
            }
            if (err.code === "auth/user-not-found") {
                setErrorMessage("User not found!")
            }
        }
    }

    const handlePress = () => {
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
                {errorMessage &&
                    <Text style={styles.errorMessage}>
                        {errorMessage}
                    </Text>}
                <Username setEmail={setEmail} />
                <Password setPassword={setPassword} />
                <TouchableOpacity
                    onPress={() => handlePress()} //()=>setIsload(true)  ()=> handlepress()
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
                <Text style={styles.footer} >
                    Forgot password?
            <Text style={styles.textforgot}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Click here!
            </Text>
                </Text>
            </ImageBackground>
        </View >

    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 100,

    },
    btnlogin: {
        backgroundColor: "#FFC75F",
        alignSelf: "flex-end",
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 40,
        height: 50,
        marginTop: 40,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,

        padding: 6,
        marginRight: 20,

    },
    footer: {
        color: "#000",
        marginTop: 150,
        justifyContent: 'flex-end',
        borderRadius: 5,
        alignItems: 'stretch',
        alignSelf: 'center',
        alignContent: 'center',
        fontWeight: '600',

    },
    image: {
        height: "106%",
        width: '100%'
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
    textforgot: { color: "#FFC75F", fontWeight: "800", paddingLeft: 10 }
    ,
    textload: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default Login;