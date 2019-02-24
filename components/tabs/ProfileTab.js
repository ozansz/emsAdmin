import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class ProfileTab extends Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({tintColor}) => (
      <Icon name='person' style={{color: tintColor}} />
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
        <Text> ProfileTab </Text>
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