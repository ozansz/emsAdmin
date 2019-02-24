import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class SearchTab extends Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-search' style={{color: tintColor}} />
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
        <Text> SearchTab </Text>
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