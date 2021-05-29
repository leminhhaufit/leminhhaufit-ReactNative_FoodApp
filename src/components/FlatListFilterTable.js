import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,

} from 'react-native';

import PropTypes from 'prop-types';

import ItemFilterTable from './ItemFilterTable';

FlatListFilterTable.propTypes = {

};
function FlatListFilterTable(props) {
    const [filter, setFilter] = useState(
        [
            {
                id: 1,
                title: "Bàn Chưa đặt",

            },
            {
                id: 2,
                title: "Bàn Đã đặt",

            },
            {
                id: 3,
                title: "Bàn Còn trống",

            },
            {
                id: 4,
                title: "Bàn Đang sử dụng",

            },
            {
                id: 5,
                title: "Bàn 4 người",

            },
            {
                id: 6,
                title: "Bàn 8 người",

            },
            {
                id: 7,
                title: "Bàn VIP",

            },
            {
                id: 8,
                title: "Bàn Premium",

            },
            {
                id: 9,
                title: "Bàn Gold",

            },
            {
                id: 10,
                title: "Bàn Diamond",

            },



        ]

    )
    return (
        <FlatList data={filter}
            numColumns={1}
            renderItem={({ item }) => <ItemFilterTable filter={item} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}
        />
    );
}
const styles = StyleSheet.create({

    flatlist: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginTop: 20,
    },

})
export default FlatListFilterTable;