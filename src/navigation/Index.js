import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
import Toast from 'react-native-toast-message';
import { Root} from "native-base";

const Providers = () => {
    return (
        <Root>
            <AuthProvider>
                
                <Routes />
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </AuthProvider>
        </Root>
    );
}

export default Providers;