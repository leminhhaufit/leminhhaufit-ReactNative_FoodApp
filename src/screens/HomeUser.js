import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import Search from '../components/Search';
import FlatListItemFood from '../components/FlatListItemFood';

HomeUser.propTypes = {

};


function HomeUser(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <FlatListItemFood />
        </SafeAreaView>
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