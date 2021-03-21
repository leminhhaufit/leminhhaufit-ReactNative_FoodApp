import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

import PropTypes from 'prop-types';

import ItemFloor from './ItemFloor';
FlatListItemFloor.propTypes = {

};
function FlatListItemFloor(props) {
    const [floorlist, setfloorlist] = useState(
        [
            {
                id: 1,
                title: "Tầng Trệt",

            },
            {
                id: 2,
                title: "Tầng Lững",

            },
            {
                id: 3,
                title: "Tầng 1",

            },



        ]

    )
    return (

        <View style={styles.container}>
            <FlatList data={floorlist}
                horizontal
                renderItem={({ item }) => <ItemFloor floorlist={item} />}
                keyExtractor={item => item.id}
                style={styles.flatlist}
                showsHorizontalScrollIndicator={false}

            />

        </View>

    );
}
const styles = StyleSheet.create({
    container: {

        marginTop: 285,


    },
    flatlist: {

    },

})
export default FlatListItemFloor;