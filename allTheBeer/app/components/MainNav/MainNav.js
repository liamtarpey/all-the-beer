import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    headerText: {
        color: '#fff',
        fontSize: 20
    }
});

class MainNav extends PureComponent {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>All the beer</Text>
            </View>
        );
    }
}

export default MainNav;
