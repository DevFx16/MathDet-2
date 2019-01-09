import React from 'react';
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
            <Modal isOpen={this.props.Abrir} position='center' style={ModalStyle.ModalOp} ref='Modal' backdropPressToClose={false} swipeToClose={false}>
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
                            <Row>
                                <Col style={Style.Col}>
                                    <MatrizView Orden={this.props.Result.Original} Datos={value => { }} Array={this.props.Result.Original} Bloqueado />
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </Modal>
        );
    }

}

Result.propTypes = {
    Result: PropTypes.object.isRequired,
    Cerrar: PropType.func.isRequired,
    Abrir: PropType.bool.isRequired
} 