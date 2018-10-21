import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Right } from 'native-base';

export default class TopicList extends React.Component {
  
  render() {
    return (
        <Content>
          <List dataArray={this.props.topics} renderRow={(data)=>
              <ListItem onPress={(e) => this.props.route(e)}>
                <Left>
                <Text>{data.route}</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
              </ListItem>
            }>
          </List>
        </Content>
    );
  }
}