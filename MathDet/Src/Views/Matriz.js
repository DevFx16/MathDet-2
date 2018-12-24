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
                            <Col size={100} style={Style.Col}>
                                <Card style={Style.Card}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Text style={[Style.Text, Style.TextSize]}>Operaciones</Text>
                                    </CardItem>
                                </Card>
                                <Card style={Style.Card}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Text style={[Style.Text, Style.TextSize]}>Determiante</Text>
                                    </CardItem>
                                </Card>
                                <Card style={Style.Card}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Text style={[Style.Text, Style.TextSize]}>Traspuesta</Text>
                                    </CardItem>
                                </Card>
                                <Card style={Style.Card}>
                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Text style={[Style.Text, Style.TextSize]}>Inversa</Text>
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