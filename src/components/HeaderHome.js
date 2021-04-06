import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FlatListItemFloor from '../components/FlatListItemFloor';
import Carousel from 'react-native-snap-carousel';
import header1IMG from '../assets/header.png';
import header2IMG from '../assets/header2.png';
import header3IMG from '../assets/header3.png';
import header4IMG from '../assets/header4.png';
import header5IMG from '../assets/header5.png';


import FlatListFilterPopular from '../components/FlatListFilterPopular';
export default function HeaderHome() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(
        [
            {
                title: "Item 1",
                text: "Text 1",
                url: header1IMG,
            },
            {
                title: "Item 2",
                text: "Text 2",
                url: header2IMG,
            },
            {
                title: "Item 3",
                text: "Text 3",
                url: header3IMG,
            },
            {
                title: "Item 4",
                text: "Text 4",
                url: header4IMG,
            },
            {
                title: "Item 5",
                text: "Text 5",
                url: header5IMG,
            },
        ]);
    function renderItem({ item, index }) {
        return (
            <View style={{
                padding: 10,
                marginLeft: 15,
                marginRight: 5,
            }}>
                <Image source={item.url} style={{ width: 350, height: 200 }} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fast & Delicious Food</Text>
            <FlatListItemFloor />
            <Text style={styles.labelnew}>Promotion</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Carousel
                    layout={"default"}
                    // ref={ref => this.carousel = ref}
                    data={carouselItems}
                    sliderWidth={400}
                    itemWidth={300}

                    renderItem={renderItem}
                    onSnapToItem={index => setActiveIndex(index)} />
            </View>
            <Text style={styles.labelnew}>Popular</Text>
            <FlatListFilterPopular />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        padding: 40,
    },
    labelnew: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingTop: 40,
    },
})
