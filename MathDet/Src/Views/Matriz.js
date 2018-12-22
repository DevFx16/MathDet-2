import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';

export default class Matriz extends React.Component {

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={Style.Grid}>
                    <Grid>
                        <Row size={14} style={Style.Col}>
                            <Text style={Style.Text}>Selección de Ítem</Text>
                        </Row>
                        <Row size={42} style={Style.Col}>
                            <Col size={49} style={Style.Col}>
                                <Card>
                                    <CardItem header bordered>
                                        <Text style={[Style.Text, Style.TextSize]}>Operaciones</Text>
                                    </CardItem>
                                    <CardItem cardBody style={Style.Col}>
                                        <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col size={2}></Col>
                            <Col size={49} style={Style.Col}>
                                <Card >
                                    <CardItem header bordered>
                                        <Text style={[Style.Text, Style.TextSize]}>Determiante</Text>
                                    </CardItem>
                                    <CardItem cardBody style={Style.Col}>
                                        <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                        <Row size={2}></Row>
                        <Row size={42} style={Style.Col}>
                            <Col size={49}>
                                <Card >
                                    <CardItem header bordered>
                                        <Text style={[Style.Text, Style.TextSize]}>Traspuesta</Text>
                                    </CardItem>
                                    <CardItem cardBody style={Style.Col}>
                                        <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col size={2}></Col>
                            <Col size={49}>
                                <Card >
                                    <CardItem header bordered>
                                        <Text style={[Style.Text, Style.TextSize]}>Inversa</Text>
                                    </CardItem>
                                    <CardItem cardBody style={Style.Col}>
                                        <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }

}