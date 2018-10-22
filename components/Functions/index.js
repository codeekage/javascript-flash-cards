import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Button, Container, Header, Content, List, ListItem,  Icon, Left, Right } from 'native-base';
import NotificationScreen from '../Layout/Notifications'
import TopicList from '../Layout/Topics'
import ApplicationFooter from '../Layout/Footer'
import { Functions } from '../Topics'

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) =>  {
        const params = navigation.state.params || {};
        return {
            title: 'Functions',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon active name='ios-home' style={{color : 'pink'}} />
            ),
            headerLeft: (
                <Button transparent onPress={params.openDrawer}>
                    <Icon active name='menu' style={{color: 'black', fontSize: 25}} />
                </Button>
            ),
              headerRight: (
                <Button transparent onPress={params.openNotifications}>
                    <Icon active name='ios-notifications-outline' style={{color: 'black', fontSize: 25}} />
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
         <Container>
            <Content>
            <List dataArray={Functions} renderRow={(data)=>
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
   Functions: HomeScreen,
   Notifications : NotificationScreen 
}
)