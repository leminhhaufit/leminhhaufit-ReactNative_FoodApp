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
                title: "Chưa đặt",

            },
            {
                id: 2,
                title: "Đã đặt",

            },
            {
                id: 3,
                title: "Còn trống",

            },
            {
                id: 4,
                title: "Đang sử dụng",

            },
            {
                id: 5,
                title: "Tầng Lững",

            },
            {
                id: 6,
                title: "Tầng 1",

            },
            {
                id: 7,
                title: "Tầng Trệt",

            },
            {
                id: 8,
                title: "Tầng Lững",

            },
            {
                id: 9,
                title: "Tầng 1",

            },
            {
                id: 10,
                title: "Tầng Trệt",

            },
            {
                id: 11,
                title: "Tầng Lững",

            },
            {
                id: 12,
                title: "Tầng 1",

            }, {
                id: 13,
                title: "Tầng Trệt",

            },
            {
                id: 14,
                title: "Tầng Lững",

            },
            {
                id: 15,
                title: "Tầng 1",

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
    container: {

    },
    flatlist: {
        flex: 1,
    },

})
export default FlatListFilterTable;