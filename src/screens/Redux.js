import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Container,
  Header,
  Content,
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
          <Body>
            <Text>Redux</Text>
          </Body>
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
