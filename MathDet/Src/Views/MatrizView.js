import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Input, Item, Spinner } from 'native-base';
import Style from '../Styles/Modal';
import Menu from '../Styles/MenuStyle';
import PropType from 'prop-types';

export default class MatrizView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Vars: this.props.Bloqueado ? this.props.Array : this.Array() }
        this.Send = () => { return this.state.Vars; }
    }

    componentDidMount() {
        this.props.Datos(this.Send);
    }

    Array() {
        var Vars = [];
        this.props.Fila.map((item, index) => {
            Vars.push([]);
            this.props.Columna.map(() => {
                Vars[index].push('')
            });
        });
        return Vars;
    }

    Cambio(value, fila, col) {
        var Vars = this.state.Vars;
        Vars[fila][col] = value + '';
        this.setState({ Vars });
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.setState({ Vars: this.Array() });
    }

    render() {
        return (
            <Grid>
                {
                    this.state.Vars.length == this.props.Fila.length ?
                        this.props.Fila.map((item, i) => {
                            return (
                                <Row key={i}>
                                    {
                                        this.props.Columna.map((ite, it) => {
                                            return (
                                                <Col key={it} style={Menu.Col}>
                                                    <Item last>
                                                        <Input style={Style.Text} keyboardType='decimal-pad' keyboardAppearance='dark' value={this.state.Vars[i][it]} onChangeText={value => {
                                                            var Vars = this.state.Vars;
                                                            Vars[i][it] = value + '';
                                                            this.setState({ Vars: Vars });
                                                        }} disabled={this.props.Bloqueado} />
                                                    </Item>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                            );
                        }) :
                        <Row>
                            <Col style={Menu.Col}>
                                <Spinner color='violet' size='large'></Spinner>
                            </Col>
                        </Row>
                }
            </Grid>
        );
    }

}

MatrizView.propTypes = {
    Fila: PropType.array.isRequired,
    Columna: PropType.array.isRequired,
    Datos: PropType.func.isRequired,
    Bloqueado: PropType.bool.isRequired,
    Array: PropType.array.isRequired
}