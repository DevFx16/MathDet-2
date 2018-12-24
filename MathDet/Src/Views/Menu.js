import React from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';
import Publicidad from './Publicidad';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={Style.Grid}>
                    <Grid>
                        <Row size={14} style={Style.Col}>
                            <Text style={Style.Text}>Selección de Ítem</Text>
                        </Row>
                        <Row size={42} style={Style.Col}>
                            <Col size={49}>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered>
                                        <Text style={Style.Text}>Matrices</Text>
                                    </CardItem>
                                    <CardItem cardBody button onPress={() => this.props.navigation.navigate('Matriz')}>
                                        <Image source={require('../../assets/Images/matriz.png')} style={Style.Img} />
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col size={2}></Col>
                            <Col size={49}>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered>
                                        <Text style={Style.Text}>Ecuaciones</Text>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={require('../../assets/Images/maths.png')} style={Style.Img} />
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                        <Row size={2}></Row>
                        <Row size={42} style={Style.Col}>
                            <Card style={Style.Card}>
                                <CardItem header bordered>
                                    <Text style={Style.Text}>Vectores</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={require('../../assets/Images/vector.png')} style={Style.Img} />
                                </CardItem>
                            </Card>
                        </Row>
                    </Grid>
                </Content>
                <Publicidad />
            </Container>
        );
    }
}