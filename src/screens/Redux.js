import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Icon,
  Body,
  Text,
  H1,
  Button
} from 'native-base'
import {FooterTab} from '../components'

class ReduxScreen extends Component {
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
          <Text>Redux</Text>
        </Body>
        <Right/>
        </Header>
        <Content padder>
          <H1>Redux Screen </H1>
          <Text>With Redux,Nativebase, ReactNavigation</Text>
        </Content>
        <FooterTab navigate={navigate} current="ReduxScreen"/>
      </Container>
      
    )
  }
}

export default ReduxScreen
