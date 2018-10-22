import React, { Component } from 'react';
import { Container, List, ListItem, Text, Body} from 'native-base';
import FlashCards from '../Layout/FlashCards';

const cards = [
    {
        header : 'JavaScript and the ECMASCript Specification',
        image : require('../../assets/one.png'),
        body : (
            <Body>
                <List>
                    <ListItem>
                        <Text style={{textAlign: 'justify'}}>
                            JavaScript is standardized at Ecma International — the European association for standardizing information and communication systems (ECMA was formerly an acronym for the European Computer Manufacturers Association) to deliver a standardized, international programming language based on JavaScript. This standardized version of JavaScript, called ECMAScript, behaves the same way in all applications that support the standard. Companies can use the open standard language to develop their implementation of JavaScript. The ECMAScript standard is documented in the ECMA-262 specification. See New in JavaScript to learn more about different versions of JavaScript and ECMAScript specification editions.
                        </Text>
                    </ListItem>
                </List>
            </Body>
        ),
        note : 'Understanding JavaScript and ECMAScript',
        footer : '',
    },
    {
        header : 'JavaScript and the ECMASCript Specification',
        image : require('../../assets/two.png'),
        body : (
            <Body>
                <List>
                    <ListItem>
                        <Text style={{textAlign: 'justify'}}>
                        The ECMA-262 standard is also approved by the ISO (International Organization for Standardization) as ISO-16262. You can also find the specification on the Ecma International website. The ECMAScript specification does not describe the Document Object Model (DOM), which is standardized by the World Wide Web Consortium (W3C) and/or WHATWG (Web Hypertext Application Technology Working Group). The DOM defines the way in which HTML document objects are exposed to your script. To get a better idea about the different technologies that are used when programming with JavaScript, consult the article JavaScript technologies overview.
                        </Text>
                    </ListItem>
                    <ListItem itemDivider></ListItem>
                    <ListItem itemDivider></ListItem>
                </List>
            </Body>
        ),
        note : 'Understanding JavaScript and ECMAScript',
        footer : '',
    },
    {
        header : 'JavaScript documentation versus the ECMAScript specification',
        image : require('../../assets/three.png'),
        body : (
            <Body>
                <List>
                    <ListItem>
                        <Text style={{textAlign: 'justify'}}>
                            The ECMAScript specification is a set of requirements for implementing ECMAScript; it is useful if you want to implement standards-compliant language features in your ECMAScript implementation or engine (such as SpiderMonkey in Firefox, or V8 in Chrome).
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text style={{textAlign: 'justify'}}>
                        The ECMAScript document is not intended to help script programmers; use the JavaScript documentation for information on writing scripts.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text style={{textAlign: 'justify'}}>
                            The ECMAScript specification uses terminology and syntax that may be unfamiliar to a JavaScript programmer. Although the description of the language may differ in ECMAScript, the language itself remains the same. JavaScript supports all functionality outlined in the ECMAScript specification
                        </Text>
                    </ListItem>
                  
                </List>
            </Body>
        ),
        note : 'Understanding JavaScript and ECMAScript',
        footer : '',
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
  