import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whatever: ''
    }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Videos Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    marginTop: 40,
  },
});