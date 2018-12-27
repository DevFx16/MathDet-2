import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Button, Icon, Right, Picker, Form, Item } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Modal from 'react-native-modalbox';
import MatrizView from './MatrizView';
import ModalStyle from '../Styles/Modal';
import PropType from 'prop-types';
import Style from '../Styles/MenuStyle';

export default class ModalBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Array: [2, 2] }
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.props.Cerrar ? null : this.refs.Modal.close();
    }

    render() {
        return (
            <Modal isOpen={this.props.Abrir} position='center' style={ModalStyle.Modal} ref='Modal' backdropPressToClose={false} swipeToClose={false}>
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
                                <Col style={Style.Col}>
                                    <Form>
                                        <Item picker>
                                            <Picker selectedValue={this.state.Array} mode='dropdown' placeholder='Seleccione' onValueChange={value => this.setState({ Array: value })}>
                                                <Picker.Item label='2X2' value={[2, 2]} />
                                                <Picker.Item label='3X3' value={[3, 3]} />
                                                <Picker.Item label='4X4' value={[4, 4]} />
                                            </Picker>
                                        </Item>
                                    </Form>
                                </Col>
                            </Row>
                            <Row size={60}>
                                <Col style={Style.Col}>
                                    <MatrizView Fila={this.state.Array} Columna={this.state.Array}></MatrizView>
                                </Col>
                            </Row>
                            <Row size={30}>
                                <Col style={Style.Col}>
                                    <Button full icon iconRight>
                                        <Icon name='send' type='FontAwesome' fontSize={40} onPress={() => this.props.Cerrar()} />
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </Modal >
        );
    }
}

ModalBox.propTypes = {
    Funcion: PropType.func.isRequired,
    Abrir: PropType.bool.isRequired,
    Cerrar: PropType.func.isRequired,
}