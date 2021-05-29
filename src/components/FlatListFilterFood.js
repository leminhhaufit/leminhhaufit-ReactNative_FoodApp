import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,

} from 'react-native';

import PropTypes from 'prop-types';

import ItemFilterTable from './ItemFilterTable';
import ItemFilterFood from './ItemFilterFood';

FlatListFilterFood.propTypes = {

};
function FlatListFilterFood(props) {
    const [filter, setFilter] = useState(
        [
            {
                id: 1,
                title: "Món Á",

            },
            {
                id: 2,
                title: "Món Âu",

            },
            {
                id: 3,
                title: "Món Chiên",

            },
            {
                id: 4,
                title: "Món Xào",

            },
            {
                id: 5,
                title: "Món Nướng",

            },
            {
                id: 6,
                title: "Món Đặc Biệt",

            },
            {
                id: 7,
                title: "Món Bán Chạy nhất",

            },
            {
                id: 8,
                title: "Món còn hoạt động",

            },
            {
                id: 9,
                title: "Món ngừng hoạt động",

            },
            {
                id: 10,
                title: "Món mới",

            },



        ]

    )
    return (
        <FlatList data={filter}
            numColumns={1}
            renderItem={({ item }) => <ItemFilterFood filter={item} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}
        />
    );
}
const styles = StyleSheet.create({

    flatlist: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginTop: 0,
        
    },

})
export default FlatListFilterFood;