import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: ''
    }
    this.handleRedirectImage = this.handleRedirectImage.bind(this)
    this.handleRedirectVideo = this.handleRedirectVideo.bind(this)
    this.handleRedirectTimelapse = this.handleRedirectTimelapse.bind(this)
  }
  
  handleRedirectImage() {
      this.setState({
        nav: 'Images Redirect clicked'
    })
  }

  handleRedirectVideo() {
    this.setState({
      nav: 'Videos Redirect clicked'
    })
  }

  handleRedirectTimelapse() {
    this.setState({
      nav: 'Timelapse Redirect clicked'
    })
  } 
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Home/Landing Page</Text>
        <Text style={styles.alert}>{this.state.nav}</Text>
        <Button 
          style={styles.navBtn}
          title='View Images'
          onPress={this.handleRedirectImage}
        />
        <Button 
          style={styles.navBtn}
          title='View Videos'
          onPress={this.handleRedirectVideo}
        />
        <Button 
          style={styles.navBtn}
          title='Create Timelapse'
          onPress={this.handleRedirectTimelapse}
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
  },
  titleText: {
    fontSize: 30,
    marginTop: 40,
  },
  alert: {
    marginTop: 10,
    marginBottom: 10,
  }
});