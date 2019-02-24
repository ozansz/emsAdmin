import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Icon, Container, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';

export default class RegisterTab extends Component {
  static navigationOptions = {
    title: 'Register',
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-add-circle' style={{color: tintColor}} />
    )
  }

  onGradeValueChange(val) {
    this.setState({
      grade: val
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      grade: undefined
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.header}>Register New Participant</Text>
          <Form style={styles.form}>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>School</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Department</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Grade</Label>
              <Picker
                placeholder="Grade"
                selectedValue={this.state.grade}
                onValueChange={this.onGradeValueChange.bind(this)}
              >
                <Picker.Item label="Prep School" value="prep" />
                <Picker.Item label="1st Grade" value="1" />
                <Picker.Item label="2nd Grade" value="2" />
                <Picker.Item label="3rd Grade" value="3" />
                <Picker.Item label="4th Grade" value="4" />
                <Picker.Item label="Graduate" value="grad" />
              </Picker>
            </Item>
            <Button style={styles.formButton} block>
              <Text style={{color: 'white'}}>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 30,
    },
    form: {
      margin: 10,
      marginTop: 0
    },
    formButton: {
      backgroundColor: "#FFA300",
      marginTop: 20
    }
})