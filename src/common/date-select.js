import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DateSelect = () => {
    return (
        <View style={styles.dateSelect}>
            <Text>This will be the date selector</Text>
        </View>
    );
}

export default DateSelect;

const styles = StyleSheet.create({
    dateSelect: {
        borderColor: '#3352FF',
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
  });