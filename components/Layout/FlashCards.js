import React, { Component } from 'react'
import {View, Image } from 'react-native'
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Content } from 'native-base';

export default class FlashCards extends React.Component {
  render() {
    return (
       <View>
          <DeckSwiper
            dataSource={this.props.dataSource}
            renderItem={item =>
              <Card style={{ elevation: 3, height: 400 }}>
                <CardItem header>
                  <Body>
                    <Text style={{fontWeight: 'bold'}}>{item.header}</Text>
                    <Text note>{item.note}</Text>
                  </Body>
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