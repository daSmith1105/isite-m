import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DateSelect from './date-select';
import Snapshot from './snapshot';

const SecondaryBar = () => {
    return (
        <View style={styles.infoBar}>
            <DateSelect />
            <Snapshot />
        </View>
    );
}

export default SecondaryBar;

const styles = StyleSheet.create({
    infoBar: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
  });