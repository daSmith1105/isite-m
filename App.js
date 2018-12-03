import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import ImageScreen from './src/screens/imageScreen';
import TimelapseScreen from './src/screens/timelapseScreen';
import VideoScreen from './src/screens/videoScreen';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <HomeScreen /> */}
        <ImageScreen />
        {/* <LoginScreen /> */}
        {/* <TimelapseScreen /> */}
        {/* <VideoScreen /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
