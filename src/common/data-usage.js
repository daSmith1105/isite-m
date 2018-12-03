import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DataUsage = () => {
    return (
        <View style={styles.dataUsage}>
            <Text style={styles.info}>Used: <Text style={styles.status}>2GB</Text> / 10GB</Text>
        </View>
    );
}

export default DataUsage;

const styles = StyleSheet.create({
    dataUsage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    status: {
        color: '#18B21D',
        fontSize: 12,
        fontWeight: 'bold',
    },
  });