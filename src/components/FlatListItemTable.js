import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import PropTypes from 'prop-types';

import ItemTable from './ItemTable';

FlatListItemTable.propTypes = {

};
function FlatListItemTable({ navigation }) {
    const [tablelist, setTablelist] = useState(
        [
            {
                id: 1,
                title: "Bàn số 1",
                status: true,
            },
            {
                id: 2,
                title: "Bàn số 2",
                status: true,
            },
            {
                id: 3,
                title: "Bàn số 3",
                status: true,
            },
            {
                id: 4,
                title: "Bàn số 4",
                status: false,
            },
            {
                id: 5,
                title: "Bàn số 5",
                status: false,
            },
            {
                id: 6,
                title: "Bàn số 6",
                status: false,
            },
            {
                id: 7,
                title: "Bàn số 7",
                status: false,
            },
            {
                id: 8,
                title: "Bàn số 8",
                status: false,
            },
            {
                id: 9,
                title: "Bàn số 9",
                status: false,//status == true đang sử dụng
                //status ==false chưa sử dụng
            },
            {
                id: 10,
                title: "Bàn số 10",
                status: false,
            },
            {
                id: 11,
                title: "Bàn số 11",
                status: false,
            },
            {
                id: 12,
                title: "Bàn số 12",
                status: false,
            },
        ]

    )
    const [isActive, setIsActive] = useState(false);
    function reserve(item) {
        const status = item.status;
        const index = tablelist.indexOf(item);
        if (status) {
            setIsActive(true);
        } else {
            setTablelist(
                [
                    ...tablelist.slice(0, index),
                    {
                        ...item,
                        status: true //status
                    },
                    ...tablelist.slice(index + 1)
                ])
        }
    }


    return (
        <FlatList data={tablelist}
            numColumns={3}
            renderItem={({ item }) => <ItemTable tablelist={item} reserve={() => reserve(item)} isActive={isActive} />}
            keyExtractor={item => item.id}
            style={styles.flatlist}

        />
    );
}
const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
    },

})
export default FlatListItemTable;