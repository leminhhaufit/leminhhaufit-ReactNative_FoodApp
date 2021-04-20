import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import { AuthContext } from './AuthProvider';
import {Text} from 'react-native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AdminStack from './AdminStack';
import KitchenStack from './KitchenStack';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

//   async function createNewAccount() {
//     try {
//       // 3 types : [0 => admin, 1 => waiter, 2 => chef]
//         const userAuth = await auth().createUserWithEmailAndPassword("hmq123452@gmail.com", "12345678");
//         var user = {
//             name: "Quy Minh Huynh",
//             phone: "779797329",
//             address: "474 Mercer Drive",
//             uid: userAuth.user.uid,
//             email: userAuth.user.email,
//             active: true,
//             type: 2
//         }
//         writeUserData(user)

//     } catch (error) {
//         console.log(error.message)
//     }
//   }

//   function writeUserData(user) {
//     db().ref('users/' + user.uid).set(user).catch(error => {
//         console.log(error.message)
//     });
//  }

  const getUserData = (user) => {
    db().ref('users/' + user.uid).once("value", snap => {
      setUser(snap.val());
      console.log(snap.val())
    })
  }

  const onAuthStateChanged = (user) => {
    console.log("txtuser", user);
    if(user !== null)
      getUserData(user);
    else
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    //createNewAccount();
    console.log("Re-run when state children has changed")
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {console.log("chay 1");return null};

  return (
    <NavigationContainer>
      {user === null ? <AuthStack/> : 
      user.active && user.type === 0 ? <AdminStack/> : 
      user.active && user.type === 1  ? <AppStack/> : 
      <KitchenStack/>  }
    </NavigationContainer>
  );
};

export default Routes;