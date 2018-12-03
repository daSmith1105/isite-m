import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Snapshot = () => {

    handleSnap = () => {
        console.log('Snapshot image requested');
    };

    return (
        <View style={styles.snapShot}>
            <TouchableOpacity onPress={ this.handleSnap }>
                <View style={styles.innerContent}>
                <Text style={styles.innerText}>Snapshot</Text>
                <Ionicons
                    name="ios-camera" 
                    size={30} 
                    color="black" 
                />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Snapshot;

const styles = StyleSheet.create({
    snapShot: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderColor: '#EC7527',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
    },
    innerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerText: {
        fontWeight: 'bold',
    },
  });