import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Header, Button, Icon, Right, Picker } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Modal from 'react-native-modalbox';
import MatrizView from './MatrizView';
import ModalStyle from '../Styles/Modal';
import PropType from 'prop-types';
import Style from '../Styles/MenuStyle';
import { AlertasModule } from 'react-native-increibles-alertas';
import Result from './Result';

export default class ModalBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Array: [2, 2], Mostrar: false, Picker: '0', Abrir: false, Result: {} }
        this.Datos = () => { }
        this.Vars = [];
        this.Array = [[2, 2], [3, 3, 3], [4, 4, 4, 4]];
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
        if (!bien) this.setState({ Result: this.props.Funcion(this.state.Array.length, this.Vars), Abrir: true });
    }

    render() {
        if (this.state.Abrir) {
            return (<Result Abrir={this.state.Abrir} Result={this.state.Result} Cerrar={() => this.setState({ Abrir: false })} />);
        } else {
            return (
                <Modal isOpen={this.props.Abrir} position='center' style={ModalStyle.ModalOp} ref='Modal' backdropPressToClose={false} swipeToClose={false}>
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
                                <Row size={15}>
                                    <Col style={Style.Col}>
                                        <Picker mode='dropdown' note style={[{ width: '100%' }]} selectedValue={this.state.Picker} onValueChange={val => this.setState({ Array: this.Array[val], Picker: val })}>
                                            <Picker.Item label='2X2' value='0' />
                                            <Picker.Item label='3X3' value='1' />
                                            <Picker.Item label='4X4' value='2' />
                                        </Picker>
                                    </Col>
                                </Row>
                                <Row size={70}>
                                    <Col style={Style.Col}>
                                        <ScrollView>
                                            <MatrizView Orden={this.state.Array} Datos={value => this.Datos = value} Array={[]} Bloqueado={false} />
                                        </ScrollView>
                                    </Col>
                                </Row>
                                <Row size={15}>
                                    <Col style={Style.Col}>
                                        <Button full icon iconRight onPress={this.Funcion.bind(this)}>
                                            <Icon name='send' type='FontAwesome' fontSize={40} />
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
}

ModalBox.propTypes = {
    Funcion: PropType.func.isRequired,
    Abrir: PropType.bool.isRequired,
    Cerrar: PropType.func.isRequired,
}