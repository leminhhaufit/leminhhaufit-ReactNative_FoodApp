import AsyncStorage from '@react-native-community/async-storage';

const userData = async () => {
    const user = await AsyncStorage.getItem('user');
    return user;

}
export default userData;