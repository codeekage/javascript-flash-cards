import React, { Component } from 'react';
import { Container, Header, Content, Text, Footer, FooterTab, Button, Icon, View } from 'native-base';
export default class ApplicationFooter extends Component {
  render() {
    return (
        <Footer style={{height: 30, padding: 10}}>
          <FooterTab>
              <Content>
                <Text style={{textAlign : 'center'}}>Copyright Nerdy  © Geeks 2018</Text>
              </Content>
          </FooterTab>
        </Footer>
    );
  }
}