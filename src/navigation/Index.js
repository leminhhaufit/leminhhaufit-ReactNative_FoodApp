import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
import Toast from 'react-native-toast-message';

const Providers = () => {
    return (
        <AuthProvider>
            <Routes />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </AuthProvider>
    );
}

export default Providers;