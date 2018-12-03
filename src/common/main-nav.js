import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainNav = () => {

    expand = () => {
        console.log('Main nav clicked');
    };

    return (
        <View style={styles.mainNav}>
            <TouchableOpacity onPress={ this.expand } style={styles.expandNav}>
                <Ionicons
                    name="md-menu" 
                    size={40} 
                    color="black" 
                />
            </TouchableOpacity>
        </View>
    );
}

export default MainNav;

const styles = StyleSheet.create({
    mainNav: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    expandNav: {

    },
  });