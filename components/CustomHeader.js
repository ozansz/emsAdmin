import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Left, Right, Body, Icon } from 'native-base';

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{height: 50}}>
            <Header style={styles.header}>
                <Left style={{flex: 1}}>
                    <Icon name={this.props.left_icon} style={styles.hdr_left} />
                </Left>
                <Body style={{flex: 0, alignSelf: 'center'}}>
                    <Text style={styles.hdr_title}>{this.props.title}</Text>
                </Body>
                <Right style={{flex: 1}}>
                    <Icon name={this.props.right_icon} style={styles.hdr_right} />
                </Right>
            </Header>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'white',
    },
    hdr_left: {
      paddingLeft: 10,
    },
    hdr_right: {
      paddingRight: 10,
      color: "#00629B",
    },
    hdr_title: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    }
})