import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class RegisterTab extends Component {
  static navigationOptions = {
    title: 'Register',
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-add-circle' style={{color: tintColor}} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}> 
        <Text> RegisterTab </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})