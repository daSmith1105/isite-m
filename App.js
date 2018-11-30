import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleClear() {
    this.setState({
      count: 0
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Dividia Technologies</Text>
        <Text>iSite Camera Viewer</Text>
        
        <Text>{this.state.count}</Text>
        <Button
          title="View Images"
          onPress={this.handleClick}
          accessibilityLabel="Button 1"
        />
        <Button
          title="View Videos"
          onPress={this.handleClick}
          accessibilityLabel="Button 2"
        />
        <Button
          title="Create Timelapse"
          onPress={this.handleClick}
          accessibilityLabel="Button 3"
        />
        <Button
          title="Clear Count"
          onPress={this.handleClear}
          accessibilityLabel="Clear"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
