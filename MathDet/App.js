import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Menu from './Src/Views/Menu';
import { Container } from 'native-base'
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Router />
      </Container>
    );
  }
}

const Router = createStackNavigator({
  Menu: { screen: Menu, navigationOptions: () => ({ header: null }) }
});