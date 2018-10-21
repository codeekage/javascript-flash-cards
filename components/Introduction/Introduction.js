import React, { Component } from 'react';
import { Container, List, ListItem, Text} from 'native-base';
import FlashCards from '../Layout/FlashCards';

const cards = [
   {
    itemNo : 1,
    header: 'What you should already know',
    note : 'This guide assumes you have the following basic background',
    body: (
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
        <ListItem itemDivider><Text>...</Text></ListItem> 
      </List>
    ),
    footer: 'Swipe to contiune'
  },
   {
    itemNo : 2,
    header: 'Where to find JavaScript information?',
    note : 'The JavaScript documentation on MDN includes the following:',
    footer: 'If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.',
    body: (
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
        <ListItem itemDivider><Text>...</Text></ListItem> 
      </List>
    ),
  },
   {
    itemNo : 2,
    header: 'What is JavaScript?',
    note : 'The JavaScript documentation on MDN includes the following:',
    footer: 'If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.',
    body: (
      <List>
        <ListItem>
          <Text style={{textAlign : 'justify'}}>
            JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.x. having complex animations, clickable buttons, popup menus, etc.).  There are also more advanced server side versions of JavaScript such as Node.Js which allow you to add more functionality to a website than simply downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
          </Text>
        </ListItem>
        <ListItem itemDivider><Text>...</Text></ListItem> 
      </List>
    ),
  },
   {
    itemNo : 2,
    header: 'Cont..',
    note : 'Understanding JavaScript',
    body: (
      <List>
        <ListItem>
          <Text style={{textAlign : 'justify'}}>
          JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
          </Text>
        </ListItem>
        <ListItem>
          <Text style={{textAlign : 'justify'}}>
            1. Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
          </Text>
        </ListItem>
        <ListItem>
          <Text style={{textAlign : 'justify'}}>
            2. Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
          </Text>
        </ListItem>
        <ListItem itemDivider><Text>...</Text></ListItem> 
      </List>
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

