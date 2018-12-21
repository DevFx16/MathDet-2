import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Spinner } from 'native-base';
import Menu from './Src/Views/Menu';
import Matriz from './Src/Views/Matriz';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Load: false };
    StatusBar.setHidden(true);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Gloria': require('./assets/Fonts/GloriaHallelujah.ttf')
    });
    this.setState({ Load: true });
  }

  render() {
    if (this.state.Load) {
      return (<Router />);
    } else {
      return (<Spinner color='violet' size='large'></Spinner>);
    }
  }
}

const Router = createAppContainer(createStackNavigator({
  Menu: { screen: Menu, navigationOptions: () => ({ header: null }) },
  Matriz: { screen: Matriz, navigationOptions: () => ({ header: null }) }
}));