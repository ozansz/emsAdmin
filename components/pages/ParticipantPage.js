import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ParticipantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> ParticipantPage </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})