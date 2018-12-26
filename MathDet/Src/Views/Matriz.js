import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';
import Publicidad from './Publicidad';
import Modal from 'react-native-modalbox';
import MatrizView from './MatrizView';
import ModalStyle from '../Styles/Modal';

export default class Matriz extends React.Component {

    render() {
        return (
            <Container>
                <Modal isOpen position='center' style={ModalStyle.Modal}>
                    <Container>
                        <Content padder contentContainerStyle={Style.Grid}>
                            <Grid>
                                <Row size={30}>
                                    <Col size={30}>
                                        <MatrizView Fila={[1, 2, 3,4]} Columna={[1, 2, 3,4]}></MatrizView>
                                    </Col>
                                </Row>
                                <Row size={30}></Row>
                                <Row size={60}></Row>
                            </Grid>
                        </Content>
                    </Container>
                </Modal>
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