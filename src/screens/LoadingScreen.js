import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

 const LoadingScreen = () => {
     console.log("vo day khong vay");
    return (
        <View style={styles.container}>
            <AnimatedLoader
                visible={true}
                overlayColor="#02475e"
                source={require("../assets/animation/loading.json")}
                animationStyle={styles.loading}
                speed={0.7}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
      width:viewportWidth,
      height:viewportHeight,
      backgroundColor:'#02475e'  
    },
    loading : {
        width:300,
        height:300
    }
})

export default LoadingScreen;


