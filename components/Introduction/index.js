import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Button, Container, Header, Content, List, ListItem,  Icon, Left, Right } from 'native-base';
import NotificationScreen from './Notifications'
import TopicList from '../Layout/Topics'
import ApplicationFooter from '../Layout/Footer'
import { Introduction } from '../Topics'
import IntroductionGuide from './Introduction';
import JavaScriptJava from './JavaScriptJava';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) =>  {
        const params = navigation.state.params || {};
        return {
            title: 'Introduction',
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

    findRoute = (route) => {
        //await AsyncStorage.clear();
        alert(route)
        //this.props.navigation.navigate(route)
      };

    render() {
      return (
        <Container>
            <Content>
            <List dataArray={Introduction} renderRow={(data)=>
              <ListItem onPress={(e) => this.props.navigation.navigate(data.route) }>
                <Left>
                <Text>{data.topic}</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
              </ListItem>
            }>
          </List>
            </Content>
            <Text onPress={() => { this.props.navigation.navigate('Guide')}}>L</Text>
            <ApplicationFooter/>
        </Container>
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
   Intro: HomeScreen,
   Guide : IntroductionGuide,
   JavaJava : JavaScriptJava
},{
    initialRouteName : 'Intro'
} 
)