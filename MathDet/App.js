import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Menu from './Src/Views/Menu';

export default class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

const Router = createAppContainer(createStackNavigator({
  Menu: { screen: Menu, navigationOptions: () => ({ header: null }) }
}));