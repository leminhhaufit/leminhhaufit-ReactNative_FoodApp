import React, { useState } from 'react'
import { StyleSheet, Text, View, Picker, Image, } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Icon, Title, Right, Body } from 'native-base';
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker';
import header2IMG from '../assets/header2.png';
import ImagePicker from 'react-native-image-picker';
export default function FormFood() {
    const [selectedValue, setSelectedValue] = useState("category");
    const [filePath, setFilePath] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [fileUri, setFileUri] = useState(null);


    // function renderFileData() {
    //     if (fileData) {
    //         return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }}
    //             style={styles.images}
    //         />
    //     } else {
    //         return <Image source={header2IMG}
    //             style={styles.images}
    //         />
    //     }
    // }

    // function renderFileUri() {
    //     if (fileUri) {
    //         return <Image
    //             source={{ uri: fileUri }}
    //             style={styles.images}
    //         />
    //     } else {
    //         return <Image
    //             source={header2IMG}
    //             style={styles.images}
    //         />
    //     }
    // }
    return (
        <Container >

            <Content style={{ backgroundColor: "#F4F4F4" }} >
                <View style={styles.header}>
                    <Text style={styles.labelheader}>Thêm món ăn</Text>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}>Name Food</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}>Description</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}>Ingredient</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}>Price</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item rounded style={styles.item}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.pickerstyle}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            itemStyle={styles.itemStyle}
                        >
                            <Picker.Item label="Category" value="category" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </Item>
                    <View style={styles.ImageSections}>
                        <View>
                            {() => renderFileData()}
                            <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
                        </View>
                        <View>
                            {() => renderFileUri()}
                            <Text style={{ textAlign: 'center' }}>File Uri</Text>
                        </View>
                    </View>
                    <Button full rounded style={styles.btn} onPress={() =>
                        ImagePicker.launchImageLibrary(
                            {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 200,
                                maxWidth: 200,
                            },
                            (response) => {
                                console.log(response);
                                setFilePath(response)
                            },
                        )
                    }>
                        <Text style={styles.textbtn}>Success</Text>
                    </Button>
                </Form>
            </Content>
        </Container >
    )
}

const styles = StyleSheet.create({
    label: {
        paddingLeft: 20,
        fontSize: 22,
        fontWeight: '500',

    },
    input: {
        paddingLeft: 20,
        paddingBottom: 20,
        height: 70,
        fontSize: 22,
        fontWeight: '600',

    },
    item: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    pickerstyle: {
        height: 70,
        width: 350,
        alignSelf: 'stretch',
        opacity: 0.6,
        marginLeft: 20,
        fontSize: 32,
    },
    labelheader: {
        fontSize: 32,
        fontWeight: 'bold',
        width: 350,
        alignSelf: 'flex-start',
        alignItems: 'stretch',
        padding: 40,
        color: '#FFC75F'
    },
    form: {
        borderRadius: 50,
        backgroundColor: '#FFF'
    },
    header: {
        flex: 1,
    },
    detail: {
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 350,
        width: 420
    },
    btn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        height: 70,
        backgroundColor: '#FFC75F',
    },
    textbtn: {
        fontSize: 28,
        fontWeight: '600',
        color: '#FFF'
    }
})
