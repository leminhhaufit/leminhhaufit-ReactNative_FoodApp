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
                title: "🍔",
                status: true,
                des: 'All'
            },
            {
                id: 2,
                title: "🥘",
                status: false,
                des: 'Streetfood'
            },
            {
                id: 3,
                title: "🍹",
                status: false,
                des: 'Drink'
            },
            {
                id: 4,
                title: "🥗",
                status: false,
                des: 'Vege'
            },
            {
                id: 5,
                title: "🍜",
                status: false,
                des: 'Noodles'
            },
            {
                id: 6,
                title: "🍱",
                status: false,
                des: 'Rice box'
            },
            {
                id: 7,
                title: "🍕",
                status: false,
                des: 'Pizza/Burger'
            }

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
        // marginTop: 280,
    },
    flatlist: {

    },

})
export default FlatListItemFloor;