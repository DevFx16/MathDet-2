import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';
import Publicidad from './Publicidad';

export default class Matriz extends React.Component {

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={Style.Grid}>
                    <Grid>
                        <Row size={10} style={Style.Col}>
                            <Text style={Style.Text}>Selección de Ítem</Text>
                        </Row>
                        <Row size={80}>
                            <Col size={100} style={Style.Alto}>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Operaciones</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Determiante</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Traspuesta</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Inversa</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                        <Row size={10}>
                            <Publicidad />
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }

}