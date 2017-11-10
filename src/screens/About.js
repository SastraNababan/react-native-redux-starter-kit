import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Content,
  Body,
  Text,
  H1,
  Button
} from 'native-base'
import {FooterTab} from '../components'

class AboutScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header>
        <Left>
          <Button transparent onPress={ () => navigate('DrawerOpen')}>
            <Icon name="ios-menu"/>
          </Button>
        </Left>
        <Body>
          <Text>About</Text>
        </Body>
        <Right/>
        </Header>
        <Content padder>
          <H1>About Screen </H1>
          <Text>With Redux,Nativebase, ReactNavigation</Text>
        </Content>
        <FooterTab navigate={navigate} current="AboutScreen"/>
      </Container>
      
    )
  }
}

export default AboutScreen
