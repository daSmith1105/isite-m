import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DataUsage from './data-usage';

const InfoBar = () => {
    return (
        <View style={styles.infoBar}>
            <Text style={styles.customer}>Golden Triangle Estates</Text>
            <DataUsage />
        </View>
    );
}

export default InfoBar;

const styles = StyleSheet.create({
    infoBar: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    customer: {
        fontSize: 12,
        fontWeight: 'bold',
    },
  });