import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';
import { ieee_blue } from '../ui-config';

export default class CustomSearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header style={styles.header} searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search participant" />
                <Icon name="ios-people" style={{color: ieee_blue}} />
            </Item>
            <Button>
                <Text>Search</Text>
            </Button>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white'
    }
})