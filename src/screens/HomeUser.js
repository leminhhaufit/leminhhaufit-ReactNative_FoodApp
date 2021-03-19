import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import Search from '../components/Search';
import FlatListItem from '../components/FlatListItem';
HomeUser.propTypes = {

};


function HomeUser(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatListItem />
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