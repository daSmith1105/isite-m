import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const QuickNav = () => {
    return (
        <View style={styles.quickNav}>
            <Text style={styles.time}>12AM</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>6AM</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>12PM</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>6PM</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
            <Text style={styles.time}>.</Text>
        </View>
    );
}

export default QuickNav;

const styles = StyleSheet.create({
    quickNav: {
        width: '16%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    time: {
        fontSize: 10,
        fontWeight: 'bold',
    }
  });