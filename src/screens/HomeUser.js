import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import FlatListItemTable from '../components/FlatListItemTable';
import FlatListItemFloor from '../components/FlatListItemFloor';
import HeaderHome from '../components/HeaderHome';
import { ScrollView } from 'react-native';

HomeUser.propTypes = {

};


function HomeUser(props) {
    return (
        <ScrollView >
            {/* <Header title="Table List" />
            <FlatListItemFloor />
            <FlatListItemTable /> */}
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