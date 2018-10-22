import React, { Component } from 'react';
import { Container, List, ListItem, Text, Body} from 'native-base';
import FlashCards from '../Layout/FlashCards';

const cards = [
    {
        header : '',
        image : require(''),
        body : (
            <Body>
                <List>
                    <ListItem>
                        <Text style={{textAlign: 'justify'}}></Text>
                    </ListItem>
                </List>
            </Body>
        ),
        note : '',
        footer : '',
    }
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
  