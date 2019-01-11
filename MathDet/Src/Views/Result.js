import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Container, Content, Header, Right, Button, Icon } from 'native-base';
import Modal from 'react-native-modalbox';
import ModalStyle from '../Styles/Modal';
import PropTypes from 'prop-types';
import MatrizView from './MatrizView';
import Style from '../Styles/MenuStyle';
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Abrir: false }
    }

    render() {
        return (
            <Modal isOpen={this.props.Abrir} position='center' style={ModalStyle.Result} ref='Modal' backdropPressToClose={false} swipeToClose={false}>
                <Container>
                    <Header>
                        <Right>
                            <Button block transparent icon>
                                <Icon name='squared-cross' type='Entypo' fontSize={40} onPress={() => this.props.Cerrar()} />
                            </Button>
                        </Right>
                    </Header>
                    <Content padder contentContainerStyle={Style.Grid}>
                        <Grid>
                            <Row size={30}>
                                <ScrollView>
                                    <Col style={Style.Col}>
                                        {
                                            this.props.Abrir ? <MatrizView Orden={this.props.Result.Original} Datos={value => { }} Array={this.props.Result.Original} Bloqueado /> : null
                                        }
                                    </Col>
                                </ScrollView>
                            </Row>
                            <Row size={1}>
                                <Text style={[Style.Text]}></Text>
                            </Row>
                            {
                                this.props.Result.Traspuesta ?
                                    <Row size={70}>
                                        <Row style={Style.Col}>
                                            <Text style={[Style.Text]}>Traspuesta</Text>
                                        </Row>
                                        <Row style={Style.Col}>
                                            <ScrollView>
                                                <MatrizView Orden={this.props.Result.Original} Datos={value => { }} Array={this.props.Result.Traspuesta} Bloqueado />
                                            </ScrollView>
                                        </Row>
                                    </Row> :
                                    <Row size={60}>
                                        <ScrollView>
                                            {
                                                this.props.Result.Metodo ?
                                                    this.props.Result.Matrices.map((matriz, index) => {
                                                        return (
                                                            <Row key={index}>
                                                                <Col style={Style.Col} size={50}>
                                                                    <Row size={99}>
                                                                        <Col style={Style.Col}>
                                                                            <MatrizView Orden={matriz} Datos={value => { }} Array={matriz} Bloqueado />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row size={1}>
                                                                        <Text style={[Style.Text]}></Text>
                                                                    </Row>
                                                                </Col>
                                                                <Col style={Style.Col} size={4}></Col>
                                                                <Col style={Style.Col} size={6}>
                                                                    <Text style={[Style.Text]}>*</Text>
                                                                </Col>
                                                                <Col style={Style.Col} size={20}>
                                                                    <Text style={[Style.Text]}>{this.props.Result.Cofactores[index]}</Text>
                                                                </Col>
                                                                <Col style={Style.Col} size={20}>
                                                                    <Text style={[Style.Text]}>{'= ' + this.props.Result.CoResult[index]}</Text>
                                                                </Col>
                                                            </Row>
                                                        )
                                                    }) :
                                                    <Row>
                                                        <Col style={Style.Col}>
                                                            <Text style={[Style.Text]}>{this.props.Result.Original[0][0] + ' * ' + this.props.Result.Original[1][1] + ' = ' + this.props.Result.Mult1}</Text>
                                                        </Col>
                                                        <Col style={Style.Col}>
                                                            <Text style={[Style.Text]}>{this.props.Result.Original[0][1] + ' * ' + this.props.Result.Original[1][0] + ' = ' + this.props.Result.Mult2}</Text>
                                                        </Col>
                                                    </Row>
                                            }
                                        </ScrollView>
                                    </Row>
                            }
                            {
                                this.props.Result.Traspuesta ? null :
                                    <Row size={9} style={Style.Col}>
                                        <Text style={[Style.Text]}>{'Determinante = ' + this.props.Result.Det}</Text>
                                    </Row>
                            }
                        </Grid>
                    </Content>
                </Container>
            </Modal>
        );
    }

}

Result.propTypes = {
    Result: PropTypes.object.isRequired,
    Cerrar: PropTypes.func.isRequired,
    Abrir: PropTypes.bool.isRequired
} 