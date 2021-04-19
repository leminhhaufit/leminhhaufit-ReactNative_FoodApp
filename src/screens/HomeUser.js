import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';

import PropTypes from 'prop-types';

import HeaderHome from '../components/HeaderHome';
import { ScrollView } from 'react-native';

HomeUser.propTypes = {

};

function HomeUser() {
    return (
        <ScrollView >
            <HeaderHome />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },

})
export default HomeUser;