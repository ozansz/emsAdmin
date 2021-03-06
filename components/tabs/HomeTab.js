import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Header, Left, Right, Container, Content, Body } from 'native-base';
import { ieee_blue } from '../../ui-config'
import CustomHeader from '../CustomHeader'

export default class HomeTab extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-home' style={{color: tintColor}} />
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
          <CustomHeader title="EMS Admin" left_icon={<Icon name="ios-camera" />} right_icon={<Icon name="ios-send" style={{color: ieee_blue}} />} />
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})