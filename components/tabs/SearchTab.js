import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Container } from 'native-base';
import CustomSearchHeader from '../CustomSearchHeader';

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
      <SafeAreaView forceInset={{top: 'always'}} style={{backgroundColor: '#212121', flex: 1}}>
        <Container style={styles.container}>
          <CustomSearchHeader />
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})