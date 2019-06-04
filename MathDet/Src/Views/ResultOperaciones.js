import React from 'react';
import Props from 'prop-types';
import Modal from 'react-native-modalbox';
import { Text, ScrollView } from 'react-native';
import { Container, Content, Header, Right, Button, Icon } from 'native-base';
import ModalStyle from '../Styles/Modal';
import MatrizView from './MatrizView';
import Style from '../Styles/MenuStyle';
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class ResultOperaciones extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Abrir: false }
    }

    render() {
        return (
            <Modal isOpen={this.props.Abrir} position='center' style={ModalStyle.ResultOp} ref='Modal' backdropPressToClose={false} swipeToClose={false}>
                <Container>
                    <Header>
                        <Right>
                            <Button block transparent icon>
                                <Icon name='close' type='Entypo' fontSize={40} onPress={() => this.props.Cerrar()} />
                            </Button>
                        </Right>
                    </Header>
                    <Content padder contentContainerStyle={Style.Grid}>
                        <Grid>
                            <Row>
                                <Col style={Style.Col} size={48}>
                                    <ScrollView>
                                        <MatrizView Orden={this.props.Result.Matriz1} Datos={value => { }} Array={this.props.Result.Matriz1} Bloqueado />
                                    </ScrollView>
                                </Col>
                                <Col size={4}/>
                                <Col style={Style.Col} size={48}>
                                    {
                                        this.props.Result.Escalar ?
                                            <Item last>
                                                <Input style={ModalStyle.Text} value={this.props.Result.Escalar+''} disabled />
                                            </Item> :
                                            <ScrollView>
                                                <MatrizView Orden={this.props.Result.Matriz2} Datos={value => { }} Array={this.props.Result.Matriz2} Bloqueado />
                                            </ScrollView>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Row style={Style.Col}>
                                    <Text style={[Style.Text]}>{this.props.Result.Signo+' Resultado: '}</Text>
                                </Row>
                                <Row style={Style.Col}>
                                    <ScrollView>
                                        <MatrizView Orden={this.props.Result.Result} Datos={value => { }} Array={this.props.Result.Result} Bloqueado />
                                    </ScrollView>
                                </Row>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </Modal>
        );
    }

}

ResultOperaciones.propTypes = {
    Result: Props.object.isRequired,
    Cerrar: Props.func.isRequired,
    Abrir: Props.bool.isRequired
}