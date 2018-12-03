import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageList from '../components/imageList';
import Header from '../common/header';
import InfoBar from '../common/info-bar';
import SecondaryBar from '../common/secondary-bar';
import QuickNav from'../common/quick-nav';

export default class ImageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whatever: ''
    }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Header  />
        <InfoBar />
        <SecondaryBar />
        <View style={styles.content}>
          <ImageList />
          <QuickNav />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
  },
});