import React, { useState,useRef} from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView, Button } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import styless, { colors } from './index.style';
import { Overlay } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import foodImg from '../assets/food.png';
import header1IMG from '../assets/header.jpg';
import header2IMG from '../assets/header2.jpg';
import header3IMG from '../assets/header3.jpg';
import header4IMG from '../assets/header4.jpg';
import header5IMG from '../assets/header5.jpg';
import searchIMG from '../assets/loupe.png';

import Filters from './Filters';

function Header(props) {
    const { title, goBack,onSearch } = props;
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(
        [
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: header1IMG
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: header2IMG
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: header3IMG
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: header4IMG
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: header5IMG
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
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
        <SafeAreaView style={{ paddingTop: 5}}>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                {/* <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
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

                </View> */}

                <View>
                    <View style={styles.container1}>
                            <View style={styles.img}>
                                <Image source={foodImg} style={styles.icon} />
                            </View>
                            <TextInput style={styles.inputSearch}
                                onChangeText={val => onSearch(val)}
                                placeholderStyle={styles.placeholdercustom}
                                placeholder="Search here" />
                            <TouchableOpacity style={styles.btnsearch} activeOpacity={1} onPress={() => console.log('hihi')}>
                                <View style={styles.imgsearch}>
                                    <Image source={searchIMG} style={styles.iconsearch} />
                                </View>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.labelList}>

                        <Text style={styles.textlist}>{title}</Text>
                        {
                            title === "Food List" && <Filters onSearch={onSearch} />
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    carousel: {
    },
    container: {
        alignSelf: 'center',
    },
    imghead: {
        alignSelf: 'stretch',
    },

    closeoverlay: {
        marginLeft: 100,
    },

    placeholdercustom: {
        opacity: 0.3,
        fontWeight: '200'
    },

    label: {
        fontWeight: '600',
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#FFC75F'
    },
    labelList: {
        flexDirection: "row",
        width:'80%',
        alignSelf: 'center',
        justifyContent:'space-between',
        minHeight: 30,
        marginBottom: 5,
        marginLeft: 0,
        marginTop: 10,
    },
    labelfilter: {
        flexDirection: 'row',
    },
    textlist: {
        flex: 0.8,
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '800',
        color: '#FFC75F',
    },
    filter: {
        flexDirection: 'row',
        width: 90,
        height: 35,
        backgroundColor: '#FFC75F',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderRadius: 25,
    },
    textfilter: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 13,
        textTransform: 'uppercase',
        paddingLeft: 5,
        paddingTop: 10,
        paddingRight: 10,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'stretch',
        top: 300,
        right: 60,
        backgroundColor: '#F4F4F4',
        height: 400,
        borderRadius: 25,
    },
    textfilteroverlay: {
        flex: 8,
        color: '#FFC75F',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 5,
    },
    container1: {
        marginTop:10,
        flexDirection: 'row',
        alignSelf: 'center',
        width:'80%',
        alignItems: 'stretch',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        elevation: 10,
    },
    inputSearch: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 50,
        width:'63%',
        borderStyle: 'solid',
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        fontSize: 18,
        fontWeight: '600',
    },
    icon: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        marginTop: 7,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    img: {
        height: 50,
        width: 50,
        backgroundColor: '#FFC75F',
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
    },
    imgsearch: {
        height: 50,
        width: 60,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
    },
    iconsearch: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        marginTop: 7,
        borderRadius: 10,

    },
    backview: {
        position: 'absolute',
        top: 20,
        left: 20,

    }
})

export default Header;