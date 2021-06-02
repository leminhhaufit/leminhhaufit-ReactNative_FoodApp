import React, { useState, useRef } from 'react'
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
                title: 'Salad rất tốt cho sức khỏe - món mới của nhà hàng',
                subtitle: 'Món được khuyến mãi cho 100 khách hàng đầu tiền!',
                illustration: header1IMG
            },
            {
                title: 'Món đậu trộn được bình chọn yêu thích nhất',
                subtitle: 'Giảm 50% cho những khách hàng ăn chay',
                illustration: header2IMG
            },
            {
                title: 'Bánh mì sandwich mới',
                subtitle: 'Sẽ được khuyến mãi cho khách hàng đi vào ngày chẵn',
                illustration: header3IMG
            },
            {
                title: 'Các món ăn đi kèm cao cấp',
                subtitle: 'Các món ăn được phục vụ miễn phí trong tuần này',
                illustration: header4IMG
            },
            {
                title: 'Bánh mì sandwich mới',
                subtitle: 'Sẽ được khuyến mãi cho khách hàng đi vào ngày chẵn',
                illustration: header3IMG
            },
            {
                title: 'Các món ăn đi kèm cao cấp',
                subtitle: 'Các món ăn được phục vụ miễn phí trong tuần này',
                illustration: header4IMG
            }
        ]);
    function renderItemWithParallax({ item, index }, parallaxProps) {
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
            <Text style={styles.title}>Đồ ăn nhanh & ngon!</Text>
            <FlatListItemFloor />
            <Text style={styles.labelnew}>Khuyến mãi</Text>
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
            <Text style={styles.labelnew}>Phổ biến</Text>
            <FlatListFilterPopular />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
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
