import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';
import { Overlay } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

import foodImg from '../assets/food.png';
import header1IMG from '../assets/header.png';
import header2IMG from '../assets/header2.png';
import header3IMG from '../assets/header3.png';
import header4IMG from '../assets/header4.png';
import header5IMG from '../assets/header5.png';
import searchIMG from '../assets/loupe.png';

import FlatListFilterTable from '../components/FlatListFilterTable';
import FlatListFilterFood from './FlatListFilterFood';

function Header(props) {
    const { title } = props;
    const [visible, setVisible] = useState(false);
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
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 5 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={carouselItems}
                        sliderWidth={400}
                        itemWidth={300}
                        renderItem={renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                    <View style={styles.container1}>
                        <View style={styles.img}>
                            <Image source={foodImg} style={styles.icon} />
                        </View>
                        <TextInput style={styles.inputSearch}
                            placeholderStyle={styles.placeholdercustom}
                            placeholder="Search here" />
                        <TouchableOpacity style={styles.btnsearch}>
                            <View style={styles.imgsearch}>
                                <Image source={searchIMG} style={styles.iconsearch} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.labelList}>
                    <Text style={styles.textlist}>{title}</Text>
                    <TouchableOpacity onPress={toggleOverlay}>
                        <View style={styles.filter}>
                            <Text style={styles.textfilter}>Filter</Text>
                            <FontAwesome5 name="sort-amount-down-alt" size={30} color="white" />
                        </View>
                    </TouchableOpacity>
                    <Overlay isVisible={visible} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay}>
                        <View style={styles.labelfilter}>
                            <Text style={styles.textfilteroverlay}>Filter by:</Text>
                            <TouchableOpacity onPress={toggleOverlay} style={styles.iconoverlay}>
                                <FontAwesome5 size={26} name="times" color="#FFC75F" />
                            </TouchableOpacity>

                        </View>
                        {
                            title === "Table List" && <FlatListFilterTable />

                        }
                        {
                            title === "Food List" && <FlatListFilterFood />
                        }
                    </Overlay>
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
    container1: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'stretch',
        borderRadius: 5,
        position: 'absolute',
        top: 230,
        bottom: 0,
        left: 60,
        right: 0,
        height: 40,
        width: 280,
        backgroundColor: '#fff',
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
        width: 200,
        height: 40,
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
        height: 30,
        width: 30,
        marginTop: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    closeoverlay: {
        marginLeft: 100,
    },
    img: {
        height: 40,
        width: 50,
        backgroundColor: '#FFC75F',
    },
    placeholdercustom: {
        opacity: 0.3,
        fontWeight: '200'
    },
    imgsearch: {
        height: 40,
        width: 50,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#FFC75F',
        backgroundColor: '#FFC75F',
    },
    iconsearch: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        marginTop: 5,
        borderRadius: 10,
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
        borderRadius: 8,
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
    },
    textfilteroverlay: {
        flex: 8,
        color: '#FFC75F',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 5,
    },

})

export default Header;