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
function FlatListItemTable(props) {
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
            }
        ]

    )
    return (

        <View style={styles.container}>
            <FlatList data={tablelist}
                numColumns={2}
                renderItem={({ item }) => <ItemTable tablelist={item} />}
                keyExtractor={item => item.id}
                style={styles.flatlist}

            />

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        alignSelf: 'center',



    },
    flatlist: {

    },

})
export default FlatListItemTable;