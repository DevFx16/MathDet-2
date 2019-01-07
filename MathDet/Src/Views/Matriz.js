import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';
import Publicidad from './Publicidad';
import Modal from './ModalBox';
import ModalOp from './Operaciones';
import { Determinante, Traspuesta, Suma, Escalar } from '../Controllers/MatrizController';

export default class Matriz extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Abrir: false, AbrirOp: false, Funcion: () => { } }
    }

    render() {
        return (
            <Container>
                <Modal Funcion={this.state.Funcion} Abrir={this.state.Abrir} Cerrar={() => this.setState({ Abrir: false })} />
                <ModalOp Funcion={{ Suma: Suma, Escalar: Escalar }} Abrir={this.state.AbrirOp} Cerrar={() => this.setState({ AbrirOp: false })} />
                <Content padder contentContainerStyle={Style.Grid}>
                    <Grid>
                        <Row size={10} style={Style.Col}>
                            <Text style={Style.Text}>Selección de Ítem</Text>
                        </Row>
                        <Row size={80}>
                            <Col size={100} style={Style.Alto}>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered button onPress={() => this.setState({ AbrirOp: true })}>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Operaciones</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered button onPress={() => this.setState({ Abrir: true, Funcion: Determinante })}>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Determiante</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card style={Style.CardCol}>
                                    <CardItem header bordered button onPress={() => this.setState({ Abrir: true, Funcion: Traspuesta })}>
                                        <Left>
                                            <Thumbnail source={require('../../assets/Images/matriz.png')}></Thumbnail>
                                        </Left>
                                        <Body>
                                            <Text style={[Style.Text]}>Traspuesta</Text>
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