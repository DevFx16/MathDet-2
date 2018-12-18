import React from 'react';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';

export default class Menu extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Grid>
                        <Col>
                            <Row></Row>
                            <Row>
                                <Card>
                                    <CardItem header bordered>
                                        <Text>Matrices</Text>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={{ uri: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2018/11/dragon-ball-super.png?resize=1080%2C600&quality=90&ssl=1' }} style={Style.Img} />
                                    </CardItem>
                                </Card>
                            </Row>
                            <Row></Row>
                        </Col>
                        <Col>
                            <Row></Row>
                            <Row>

                            </Row>
                            <Row></Row>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}