import React from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Input, Item } from 'native-base';
import Style from '../Styles/Modal';
import Menu from '../Styles/MenuStyle';
import PropType from 'prop-types';

export default class MatrizView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                {
                    this.props.Fila.map((item, i) => {
                        return (
                            <Row key={i}>
                                {
                                    this.props.Columna.map((ite, it) => {
                                        return (
                                            <Col key={it} style={Menu.Col}>
                                                <Item last>
                                                    <Input style={Style.Text} keyboardType='decimal-pad' keyboardAppearance='dark'/>
                                                </Item>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        );
                    })
                }
            </Grid>
        );
    }

}

MatrizView.propTypes = {
    Fila: PropType.array.isRequired,
    Columna: PropType.array.isRequired
}