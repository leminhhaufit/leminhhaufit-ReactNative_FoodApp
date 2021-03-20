import auth from '@react-native-firebase/auth';

export async function signIn(email, password) {
    try {
        await auth()
            .signInWithEmailAndPassword(email, password);
        // console.log("response", response.user.email);
        // if (response && response.user) {
        //     alert("Success! Sign in completed " + response.user.email);
        // }

    } catch (err) {
        alert("There is something wrong!" + err.message);
        console.log("There is something wrong!" + err.message)
    }
}
export async function signOut() {
    try {
        await auth().signOut();
    } catch (error) {
        console.log("There is something wrong!" + error.message)
    }
}