import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Textarea } from 'native-base';

export default function FormCategory(props) {
    const { title } = props;
    return (
        <Container >
            <Content style={{ backgroundColor: "#F4F4F4" }} >
                <View style={styles.header}>
                    <Text style={styles.labelheader}>{title}</Text>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel rounded style={styles.item}>
                        <Label style={styles.label}>Name Category</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Textarea rowSpan={7} bordered placeholder="Description" style={styles.textarea} />

                    <Button full rounded style={styles.btn}
                    >
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
    labelsheet: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'stretch',
        color: '#FFC75F'
    },
    labelclose: {
        paddingTop: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'stretch',
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
        marginBottom: 20,
        height: 70,
        backgroundColor: '#FFC75F',
    },
    textbtn: {
        fontSize: 28,
        fontWeight: '600',
        color: '#FFF'
    },
    textarea: {
        borderRadius: 60,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 22,
        fontWeight: '500',

    }
})
