import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Spinner } from 'native-base';
import Menu from './Src/Views/Menu';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Load: false };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'bree': require('./assets/Fonts/BreeSerif-Regular.ttf')
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
  Menu: { screen: Menu, navigationOptions: () => ({ header: null }) }
}));