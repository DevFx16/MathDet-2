import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';

export default class Menu extends React.Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={Style.Grid}>
                    <Grid>
                        <Col size={49} style={Style.Col}>
                            <Card style={Style.Card}>
                                <CardItem header bordered>
                                    <Text>Matrices</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={{ uri: '../../assets/matriz.png' }} style={Style.Img} />
                                </CardItem>
                            </Card>
                        </Col>
                        <Col size={2}></Col>
                        <Col size={49} style={Style.Col}>
                            <Card style={Style.Card}>
                                <CardItem header bordered>
                                    <Text>Vectores</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={{ uri: '../../assets/vector.png' }} style={Style.Img} />
                                </CardItem>
                            </Card>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}