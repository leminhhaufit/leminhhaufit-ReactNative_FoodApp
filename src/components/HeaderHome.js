import React, { useState,useRef } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FlatListItemFloor from '../components/FlatListItemFloor';
import header1IMG from '../assets/header.jpg';
import header2IMG from '../assets/header2.jpg';
import header3IMG from '../assets/header3.jpg';
import header4IMG from '../assets/header4.jpg';
import header5IMG from '../assets/header5.jpg';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import styless, { colors } from './index.style';

import FlatListFilterPopular from '../components/FlatListFilterPopular';
export default function HeaderHome() {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(
        [
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Don’t forget the flavors - sweet, salty, tart, pleasantly bitter.',
                illustration: header1IMG
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Mention the cooking method - Steamed, char-grilled, pan-fried, stir-fried, or slow-cooked',
                illustration: header2IMG
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy.',
                illustration: header3IMG
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Talk about the overall feel - smoky, spicy, fresh, oily, etc.',
                illustration: header4IMG
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Don’t forget the flavors - sweet, salty, tart, pleasantly bitter.',
                illustration: header5IMG
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Soft textures - smooth, silky, unctuous, coating, tender, and juicy.',
                illustration: header3IMG
            }
        ]);
        function renderItemWithParallax ({item, index}, parallaxProps) {
            return (
                <SliderEntry
                  data={item}
                  even={(index + 1) % 2 === 0}
                  parallax={true}
                  parallaxProps={parallaxProps}
                />
            );
        }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fast & Delicious Food</Text>
            <FlatListItemFloor />
            <Text style={styles.labelnew}>Promotion</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
                        ref={carouselRef}
                        data={carouselItems}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        hasParallaxImages={true}
                        inactiveSlideScale={0.94}
                        inactiveSlideOpacity={0.7}
                        containerCustomStyle={styless.slider}
                        contentContainerCustomStyle={styless.sliderContentContainer}
                        renderItem={renderItemWithParallax}
                        onSnapToItem={index => setActiveIndex(index)}
                        loop={true}
                        loopClonesPerSide={2}
                        autoplay={true}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                    />
                    <Pagination
                        dotsLength={0}
                        activeDotIndex={activeIndex}
                        containerStyle={styless.paginationContainer}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={styless.paginationDot}
                        inactiveDotColor={colors.black}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={carouselRef}
                      
                    />
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
        padding: 20,
    },
    labelnew: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingTop: 20,
    },
})
