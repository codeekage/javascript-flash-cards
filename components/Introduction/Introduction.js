import React, { Component } from 'react';
import { Container, List, ListItem, Text, Body} from 'native-base';
import FlashCards from '../Layout/FlashCards';

const cards = [
   {
    itemNo : 1,
    header: 'What you should already know',
    note : 'This guide assumes you have the following basic background',
    image: require('../../assets/one.png'),
    body: (
      <Body>
        <List>
          <ListItem>
            <Text>1. A general understanding of the Internet and World Wide Web (WWW)</Text>
          </ListItem>
          <ListItem>
            <Text>2. Good working knowledge of HyperText Markup Language (HTML). </Text>
          </ListItem>
          <ListItem>
            <Text>3.Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript. </Text>
          </ListItem>
          <ListItem itemDivider></ListItem>
          <ListItem itemDivider></ListItem>
          <ListItem itemDivider></ListItem>
        </List>
      </Body>
    ),
    footer: 'Swipe to contiune'
  },
   {
    itemNo : 2,
    image: require('../../assets/two.png'),
    header: 'Where to find JavaScript information?',
    note : 'The JavaScript documentation on MDN includes the following:',
    footer: 'If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.',
    body: (
      <Body>
      
        <List>
          <ListItem>
            <Text>1. Learn Web Development provides information for beginners and introduces basic concepts of programming and the Internet.</Text>
          </ListItem>
          <ListItem>
            <Text>2. JavaScript Guide (this guide) provides an overview about the JavaScript language and its objects. </Text>
          </ListItem>
          <ListItem>
            <Text>3.JavaScript Reference provides detailed reference material for JavaScript. </Text>
          </ListItem>
          <ListItem itemDivider></ListItem>
        </List>
      </Body>
    ),
  },
   
]
export default class IntroductoryGuide extends Component {

  render() {
    return (
     <Container>
       <FlashCards dataSource={cards} />
      </Container>
    );
  }
}

