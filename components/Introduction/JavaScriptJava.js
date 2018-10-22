import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container, List, ListItem, Text, Body} from 'native-base';
import FlashCards from '../Layout/FlashCards';

const cards = [
    {
        header : 'JavaScript and Java',
        image: require('../../assets/one.png'),
        note : 'Difference betweeen JavaScript and Java',
        body : (
            <List>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.</Text>
                </ListItem>
            </List>
        ),
        footer: ''
    },
    {
        header : 'Cont..',
        image: require('../../assets/two.png'),
        note : 'Difference betweeen JavaScript and Java',
        body : (
            <List>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.</Text>
                </ListItem>
            </List>
        ),
        footer: ''
    },
    {
        header : 'Cont..',
        image: require('../../assets/three.png'),
        note : 'Difference betweeen JavaScript and Java',
        body : (
            <List>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                        JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.    
                    </Text>
                </ListItem>
            </List>
        ),
        footer: ''
    },
    {
        header : 'Cont..',
        image: require('../../assets/four.png'),
        note : 'Difference betweeen JavaScript and Java',
        body : (
            <List>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                        Java is a class-based programming language designed for fast execution and type safety. Type safety means, for instance, that you can't cast a Java integer into an object reference or access private memory by corrupting Java bytecodes. Java's class-based model means that programs consist exclusively of classes and their methods. Java's class inheritance and strong typing generally require tightly coupled object hierarchies. These requirements make Java programming more complex than JavaScript programming.
                    </Text>
                </ListItem>
            </List>
        ),
        footer: ''
    },
    {
        header : 'Cont..',
        image: require('../../assets/four.png'),
        note : 'Difference betweeen JavaScript and Java',
        body : (
            <List>
            <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                        In contrast, JavaScript descends in spirit from a line of smaller, dynamically typed languages such as HyperTalk and dBASE. These scripting languages offer programming tools to a much wider audience because of their easier syntax, specialized built-in functionality, and minimal requirements for object creation.
                    </Text>
                </ListItem>
            </List>
        ),
        footer: ''
    },
    {
        header : 'JavaScript Compared to Java',
        note : 'JavaScript Comparison',
        image: require('../../assets/one-thumb.png'),
        body : (
            <List>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                     1. Object-oriented. No distinction between types of objects. Inheritance is through the prototype mechanism, and properties and methods can be added to any object dynamically.
                    </Text>
                </ListItem>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                      2.Variable data types are not declared (dynamic typing, loosely typed).
                    </Text>
                </ListItem>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                    3. Cannot automatically write to hard disk.
                    </Text>
                </ListItem>
            </List>
        ),
        footer: 'For more information on the differences between JavaScript and Java, see the chapter Details of the object model.'
    },
    {
        header : 'JavaScript Compared to Java',
        note : 'Java Comparison',
        image: require('../../assets/one-thumb.png'),
        body : (
            <List>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                     1. Class-based. Objects are divided into classes and instances with all inheritance through the class hierarchy. Classes and instances cannot have properties or methods added dynamically.
                    </Text>
                </ListItem>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                      2. Variable data types must be declared (static typing, strongly typed).
                    </Text>
                </ListItem>
                <ListItem>
                    <Text style={{textAlign: 'justify'}}>
                    3. Can automatically write to hard disk.
                    </Text>
                </ListItem>
            </List>
        ),
        footer: 'For more information on the differences between JavaScript and Java, see the chapter Details of the object model.'
    },
]

export default class JavaScriptJava extends Component {
  render() {
    return (
     <Container>
       <FlashCards dataSource={cards} />
      </Container>
    );
  }
}

