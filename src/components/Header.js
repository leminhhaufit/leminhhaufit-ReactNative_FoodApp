import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView, Button } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Overlay } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import foodImg from '../assets/food.png';
import header1IMG from '../assets/header.png';
import header2IMG from '../assets/header2.png';
import header3IMG from '../assets/header3.png';
import header4IMG from '../assets/header4.png';
import header5IMG from '../assets/header5.png';
import searchIMG from '../assets/loupe.png';

import Filters from './Filters';

function Header(props) {
    const { title, goBack } = props;
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
                marginTop: 10,
                marginLeft: 15,
                marginRight: 5,
            }}>

                <Image source={item.url} style={{ width: 350, height: 200 }} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 5, marginBottom: 30 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
                    <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={carouselItems}
                        sliderWidth={400}
                        itemWidth={300}
                        renderItem={renderItem}
                        onSnapToItem={index => setActiveIndex(index)}
                        autoplay={true}
                        useScrollView={true}
                        loop={true}
                    />
                    <Pagination
                        dotsLength={carouselItems.length}
                        activeDotIndex={activeIndex}
                        containerStyle={{ position: 'absolute', bottom: 0 }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: 'black',

                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                        }}
                        inactiveDotOpacity={1}
                        inactiveDotScale={0.4}
                    />
                    <View style={styles.container1}>
                        <View style={styles.img}>
                            <Image source={foodImg} style={styles.icon} />
                        </View>
                        <TextInput style={styles.inputSearch}
                            placeholderStyle={styles.placeholdercustom}
                            placeholder="Search here" />
                        <TouchableOpacity style={styles.btnsearch} activeOpacity={1} onPress={() => console.log('hihi')}>
                            <View style={styles.imgsearch}>
                                <Image source={searchIMG} style={styles.iconsearch} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.labelList}>

                    <Text style={styles.textlist}>{title}</Text>
                    {
                        title === "Food List" && <Filters />
                    }
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
        alignSelf: 'center',
        position: 'absolute',
        top: 250,
        bottom: 0,
        left: 10,
        right: 0,
        height: 40,
        marginBottom: 5,
        marginLeft: 50,
        marginTop: 50,
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
        top: 340,
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
        flexDirection: 'row',
        alignSelf: 'center',
        width:'80%',
        margin:10,
        alignItems: 'stretch',
        borderRadius: 25,
        height: 50,
        position: 'absolute',
        top: 230,
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
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