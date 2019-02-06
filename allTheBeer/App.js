/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Root from './app/Root.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
    paddingTop: 60,
    paddingBottom: 20
  }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <Root />
        </View>
    );
  }
}
