import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainNav from './main-nav';

const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text>Dividia</Text>
                <Text>Technologies</Text>
            </View>
            <View>
                <Text>iSite</Text>
                <Text>Cam Viewer</Text>
            </View>
            <MainNav />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#6180F5',
        height: 80,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
  });