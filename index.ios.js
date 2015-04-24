/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

var githubNotetaker = React.createClass({
  render: function() {
    var name = 'Gregg';
    return (
      <NavigatorIOS
        styles={styles.container}
        initialRoute={{
          title: 'github Notetaker',
          component: Main
        }} />
    );
  }
});


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
