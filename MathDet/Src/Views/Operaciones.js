import React from 'react';
import PropType from 'prop-types';
import { Container, Content, Right, Header, Button, Icon, Picker, Input, Item } from 'native-base';
import ModalStyle from '../Styles/Modal';
import Modal from 'react-native-modalbox';
import Style from '../Styles/MenuStyle';
import { Grid, Col, Row } from 'react-native-easy-grid';
import MatrizView from './MatrizView';
import { AlertasModule } from 'react-native-increibles-alertas';

export default class Operaciones extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Array: [2, 2], Mostrar: false, Operacion: 'Suma', Picker: '0', Escalar: '0' }
        this.Mat1 = () => { return [] }
        this.Mat2 = () => { return [] }
        this.Vars = { Mat1: [], Mat2: [] }
        this.Array = [[2, 2], [3, 3, 3], [4, 4, 4, 4]];
    }

    Funcion() {
        this.Vars = { Mat1: this.Mat1(), Mat2: this.Mat2() }
        if (!this.Validar(this.Vars)) {
            if (this.state.Operacion === 'Suma') this.props.Funcion.Suma(this.Vars.Mat1, this.Vars.Mat2, true);
            else if (this.state.Operacion === 'Resta') this.props.Funcion.Suma(this.Vars.Mat1, this.Vars.Mat2, false);
            else if (this.state.Operacion === 'Escalar') this.props.Funcion.Escalar(this.state.Escalar, this.Vars.Mat1);
        }
    }

    Validar(Vars) {
        let bien = false;
        this.state.Array.map((item, i) => {
            bien = false;
            this.state.Array.map((it, ind) => {
                if (this.state.Operacion !== 'Escalar' && (Vars.Mat1[i][ind] === '' || Vars.Mat2[i][ind] == '')) {
                    bien = true;
                    return;
                } else if (this.state.Operacion === 'Escalar' && (Vars.Mat1[i][ind] === '' || this.state.Escalar === '')) {
                    bien = true;
                    return;
                }
            });
            if (bien) {
                this.setState({ Mostrar: true });
                return
            };
        });
        return bien;
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.props.Cerrar ? null : this.refs.Modal.close();
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
                            <Row size={10}>
                                <Col style={Style.Col}>
                                    <Picker mode='dropdown' note style={[{ width: '100%' }]} selectedValue={this.state.Picker} onValueChange={val => this.setState({ Array: this.Array[val], Picker: val })}>
                                        <Picker.Item label='2X2' value='0' />
                                        <Picker.Item label='3X3' value='1' />
                                        <Picker.Item label='4X4' value='2' />
                                    </Picker>
                                </Col>
                                <Col style={Style.Col}>
                                    <Picker mode='dropdown' note style={[{ width: '100%' }]} selectedValue={this.state.Operacion} onValueChange={value => this.setState({ Operacion: value })}>
                                        <Picker.Item label='Suma' value='Suma' />
                                        <Picker.Item label='Resta' value='Resta' />
                                        <Picker.Item label='Producto' value='Producto' />
                                        <Picker.Item label='Producto Escalar' value='Escalar' />
                                    </Picker>
                                </Col>
                            </Row>
                            <Row size={80}>
                                <Col style={Style.Col} size={49}>
                                    <MatrizView Fila={this.state.Array} Columna={this.state.Array} Datos={value => this.Mat1 = value} Array={[]} Bloqueado={false} />
                                </Col>
                                <Col size={2} />
                                <Col style={Style.Col} size={49}>
                                    {
                                        this.state.Operacion == 'Escalar' ?
                                            <Item last>
                                                <Input style={ModalStyle.Text} keyboardType='decimal-pad' keyboardAppearance='dark' value={this.state.Escalar} onChangeText={value => this.setState({ Escalar: value })} />
                                            </Item> :
                                            <MatrizView Fila={this.state.Array} Columna={this.state.Array} Datos={value => this.Mat2 = value} Array={[]} Bloqueado={false} />
                                    }
                                </Col>
                            </Row>
                            <Row size={10}>
                                <Col style={Style.Col}>
                                    <Button full icon iconRight onPress={this.Funcion.bind(this)}>
                                        <Icon name='send' type='FontAwesome' fontSize={40} />
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </Modal>
        );
    }

}

Operaciones.propTypes = {
    Funcion: PropType.object.isRequired,
    Cerrar: PropType.func.isRequired,
    Abrir: PropType.bool.isRequired
}