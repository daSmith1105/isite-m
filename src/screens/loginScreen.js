import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const customerList = ['gte', 'birch'];

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      status: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin() {
    let input = this.state.text.toLowerCase().trim();
    if (!input.length) {
        this.setState({
            status: 'Please enter a company code.'
        });
    }
    else if ( customerList.indexOf(input) !== -1){
        this.setState({
            status: 'You logged in successfully!'
        });
    } else {
        this.setState({
            status: 'Customer not found. Please try again.'
        });  
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Login Page</Text>
        <Text style={styles.tempOutput}>Approved logins: birch, gte</Text>
        <Text style={styles.successText}>
            {this.state.status}
        </Text>

        <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder='input company code'
        />
        <Button 
            style={styles.loginBtn}
            title='Login'
            onPress={this.handleLogin}
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
    fontSize: 25,
    marginTop: 40,
  },
  tempOutput: {
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
  },
  textInputStyle: {
    marginTop: 30,
    marginBottom: 30,
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 1,
  },
  successText: {
    marginTop: 20,
    color: 'green',
    fontSize: 15,
    textAlign: 'center',
  }
});