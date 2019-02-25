import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Container } from 'native-base';
import CustomHeader from '../CustomHeader';
import { ieee_blue } from '../../ui-config';

export default class SettingsTab extends Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-settings' style={{color: tintColor}} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView forceInset={{top: 'always'}} style={{backgroundColor: '#212121', flex: 1}}>
        <Container style={styles.container}>
          <CustomHeader title="Settings" left_icon={<Icon name="ios-camera" />} right_icon={<Icon name="ios-bug" style={{color: ieee_blue}} />} />
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})