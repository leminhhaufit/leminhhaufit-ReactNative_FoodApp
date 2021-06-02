import React, { Component } from 'react';
import firebase from '@react-native-firebase/app';
const SecondFirebaseApp = async () => {
    let secondaryApp;
    const  config = {
        apiKey: "AIzaSyClG8D2OaGkPw6WJ0RVY1t87Kh_2IdoQks",
        authDomain: "food-order-680e9.firebaseapp.com",
        databaseURL: "https://food-order-680e9-default-rtdb.firebaseio.com",
        projectId: "food-order-680e9",
        storageBucket: "food-order-680e9.appspot.com",
        messagingSenderId: "468522611978",
        appId: "1:468522611978:web:8bee672042317584acf6f3",
        measurementId: "G-4LFNY9DPET"
    };
    console.log(firebase.apps);
    if (firebase.apps.length < 2) {
        secondaryApp = await firebase.initializeApp(config,'secondary');
    }else {
        secondaryApp = await firebase.app('secondary'); 
    }
    return secondaryApp;
}


export default SecondFirebaseApp;
