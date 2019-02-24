import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';

import HomeTab from './tabs/HomeTab'
import SearchTab from './tabs/SearchTab'
import RegisterTab from './tabs/RegisterTab'
import SettingsTab from './tabs/SettingsTab'
import ProfileTab from './tabs/ProfileTab'
import { Platform } from 'expo-core';

export default class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{paddingLeft: 20}} />,
        title: 'Event Management System',
        headerRight: <Icon name='ios-send' style={{paddingRight: 20}} />,
        headerTitleStyle: {
            fontSize: 16,
            textAlign: 'center'
        }
    }

    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return <AppContainer />
    }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab : {
        screen: SearchTab
    },
    RegisterTab: {
        screen: RegisterTab
    },
    SettingsTab: {
        screen: SettingsTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: true,
        showIcon: true
    }
})

const AppContainer = createAppContainer(AppTabNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
