import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import { AuthContext } from './AuthProvider';
import { Text } from 'react-native';
import AuthStack from './AuthStack';
import Toast from 'react-native-toast-message';
import AppStack from './AppStack';
import AdminStack from './AdminStack';
import KitchenStack from './KitchenStack';
import LoadingScreen from '../screens/LoadingScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'lodash';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const saveInfoUser = async (user) => {
    console.log("Data storage:" + JSON.stringify(user));
    await AsyncStorage.setItem('user',JSON.stringify(user));
  }
  const getUserData = async (user) => {
    const snapshot = await db().ref('users/' + user.uid).once("value");
    const data = snapshot.val();
    if(!data.active){
      auth()
      .signOut()
      .then(() => console.log('User signed out!'));

      Toast.show({
        type: 'error',
        text1: 'Your account has been locked'  ,
        autoHide: true,
      });

      setUser(null);
    }else{
      setUser(data);
    }
      
    

  }

  const onAuthStateChanged = (user) => {
    saveInfoUser(user);
    if (user !== null)
      getUserData(user);
    else{
      setUser(user);
    }
  };

  useEffect(() => {
    //createNewAccount();
    setUser("loading");
    console.log("Re-run when state children has changed")
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  //if (initializing) {return <LoadingScreen/>};
  return (
    <NavigationContainer>
      {user === 'loading' ? <LoadingScreen /> :
      user === null ? <AuthStack /> :
      user.active && user.type === 0 ? <AdminStack/> : 
      user.active && user.type === 1  ? <AppStack/> : 
      <KitchenStack/> 
      }
    </NavigationContainer>
  );
};

export default Routes;