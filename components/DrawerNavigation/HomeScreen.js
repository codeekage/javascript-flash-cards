import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import {Button, Icon, Image} from 'native-base'
import NotificationScreen from '../Home/Notifications'

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) =>  {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon active name='ios-home' style={{color : 'pink'}} />
            ),
            headerLeft: (
              <Button transparent onPress={params.openDrawer}>
                  <Icon active name='menu' />
              </Button>
            ),
            headerRight: (
              <Button transparent onPress={params.openNotifications}>
                  <Icon active name='ios-notifications-outline' />
              </Button>
            ) 
            
        }
    };

    componentWillMount() {
        this.props.navigation.setParams({ 
          openDrawer : this.openDrawer,
          openNotifications: this.openNotification
        });
      }
    

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    openNotification = () => {
        this.props.navigation.navigate('Notifications')
    }
  
    render() {
      return (
        <Button full
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        >
        <Text style={styles.textWhite}>Go to notif</Text>
        </Button>
      );
    }
}

const styles = StyleSheet.create({
    textWhite : {
        color : 'white'
    },
    icon: {
        width: 24,
        height: 24,
      },
})


export default createStackNavigator({
   Home: HomeScreen,
   Notifications : NotificationScreen 
})