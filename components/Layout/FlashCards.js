import React, { Component } from 'react'
import {View, Image } from 'react-native'
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Content, Right } from 'native-base';

export default class FlashCards extends React.Component {
  render() {
    return (
       <View>
          <DeckSwiper
            dataSource={this.props.dataSource}
            renderItem={item =>
              <Card transparent>
                <CardItem header style={{backgroundColor: '#e91e63'}}>
                <Left>
                    <Thumbnail large square source={item.image} />
                
                  <Body>
                    <Text style={{fontWeight: 'bold', color : 'white'}}>{item.header}</Text>
                    <Text note style={{color : 'white'}}>{item.note}</Text>
                  </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
               
                    {item.body}
                
                </CardItem>
                <CardItem footer>
                  <Body>
                  <Text note>{item.footer}</Text>
                  </Body>
                </CardItem>
              </Card>
            }
          />
        </View>
    ) 
  }
}