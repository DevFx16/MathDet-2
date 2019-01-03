import React from 'react';
import { StatusBar } from 'react-native';
import { Spinner } from 'native-base';
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
      return (<Matriz />);
    } else {
      return (<Spinner color='violet' size='large'></Spinner>);
    }
  }
}
