import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import Style from '../Styles/MatrizStyle';

export default class Matriz extends React.Component {

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={Style.Grid}>
                    <Text style={Style.Text}>Hola Matriz</Text>
                </Content>
            </Container>
        );
    }

}