import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Button, Icon, Right, Radio, Left } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Modal from 'react-native-modalbox';
import MatrizView from './MatrizView';
import ModalStyle from '../Styles/Modal';
import PropType from 'prop-types';
import Style from '../Styles/MenuStyle';
import { AlertasModule } from 'react-native-increibles-alertas';
export default class ModalBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Array: [2, 2], Mostrar: false }
        this.Datos = () => { }
        this.Vars = [];
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.props.Cerrar ? null : this.refs.Modal.close();
    }

    Funcion() {
        this.Vars = this.Datos();
        let bien = false;
        this.state.Array.map((item, i) => {
            bien = false;
            this.state.Array.map((it, ind) => {
                if (this.Vars[i][ind] == '') {
                    bien = true;
                    this.setState({ Mostrar: true });
                    return;
                }
            });
            if (bien) return;
        });
        if (!bien) this.props.Funcion(this.state.Array.length, this.Vars);
    }

    render() {
        return (
            <Modal isOpen={this.props.Abrir} position='center' style={ModalStyle.Modal} ref='Modal' backdropPressToClose={false} swipeToClose={false}>
                <AlertasModule Tipo='error' Mensaje='Debe proporcionar todos los datos' Mostrar={this.state.Mostrar} TextoBotonConfirmado='Ok' onBotonConfirmado={() => { this.setState({ Mostrar: false }) }} Titulo='Error' />
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
                            <Row size={20}>
                                <Col style={Style.Col}>
                                    <Left>
                                        <Text style={Style.Text}>2X2</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={this.state.Array.length == 2} selectedColor='violet' onPress={() => this.setState({ Array: [2, 2] })} />
                                    </Right>
                                </Col>
                                <Col style={Style.Col}>
                                    <Left>
                                        <Text style={Style.Text}>3X3</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={this.state.Array.length == 3} selectedColor='violet' onPress={() => this.setState({ Array: [3, 3, 3] })} />
                                    </Right>
                                </Col>
                                <Col style={Style.Col}>
                                    <Left>
                                        <Text style={Style.Text}>4X4</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={this.state.Array.length == 4} selectedColor='violet' onPress={() => this.setState({ Array: [4, 4, 4, 4] })} />
                                    </Right>
                                </Col>
                            </Row>
                            <Row size={60}>
                                <Col style={Style.Col}>
                                    <MatrizView Fila={this.state.Array} Columna={this.state.Array} Datos={value => this.Datos = value} Array={[]} Bloqueado={false} />
                                </Col>
                            </Row>
                            <Row size={20}>
                                <Col style={Style.Col}>
                                    <Button full icon iconRight onPress={this.Funcion.bind(this)}>
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