import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Container, Content, Form, Item, Input, Label, Button, Picker } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CustomHeader from '../CustomHeader'

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
      <SafeAreaView forceInset={{top: 'always'}} style={{backgroundColor: '#212121', flex: 1}}>
        <Container style={styles.container}>
          <CustomHeader style={{margin: 0}} title="Register Participant" left_icon={<Icon name="ios-camera" />} right_icon={<EntypoIcon name="back-in-time" style={{fontSize: 24}} />} />
          <Content>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    form: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 30
    },
    formButton: {
      backgroundColor: "#FFA300",
      marginTop: 20
    }
})