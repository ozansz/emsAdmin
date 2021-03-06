import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';

import { uiShowTabLabels } from '../ui-config';

import HomeTab from './tabs/HomeTab'
import SearchTab from './tabs/SearchTab'
import RegisterTab from './tabs/RegisterTab'
import SettingsTab from './tabs/SettingsTab'
import ProfileTab from './tabs/ProfileTab'

export default class MainScreen extends Component {
    //static navigationOptions = {
    //    headerLeft: <Icon name='ios-camera' style={{paddingLeft: 20}} />,
    //    title: 'Event Management System',
    //    headerRight: <Icon name='ios-send' style={{paddingRight: 20, color: "#00629B"}} />,
    //    headerTitleStyle: {
    //        fontSize: 16,
    //        textAlign: 'center'
    //    }
    //}
    
    static navigationOptions = {
        header: null
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
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white',
                }
            })
        },
        activeTintColor: "#00629B",
        inactiveTintColor: '#d1cece',
        showLabel: uiShowTabLabels,
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
