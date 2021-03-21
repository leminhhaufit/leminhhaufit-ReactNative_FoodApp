import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import Search from '../components/Search';
import FlatListItemTable from '../components/FlatListItemTable';
import FlatListItemFloor from '../components/FlatListItemFloor';

HomeUser.propTypes = {

};


function HomeUser(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatListItemFloor />
            <FlatListItemTable />
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