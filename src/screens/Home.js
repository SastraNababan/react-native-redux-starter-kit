import React, { Component } from 'react'
import { View,ScrollView } from 'react-native'
import {
  Container,
  Header,
  Content,
  Body,
  Text,
  H1,
  Button,
  Row,
  Grid } 
from 'native-base'
import theme from '../theme'
import {CircleButton,FooterTab} from '../components'
import { connect } from 'react-redux';
import {sampleAction} from '../store/actions'


class HomeScreen extends Component {
  state = {  }

  testAction(){
    // this.props.dispatch(sampleAction())
    this.props.sampleAction()
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Text>Welcome</Text>
          </Body>
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <H1>React Native Starter Kit </H1>
            <Text>With Redux,Nativebase, ReactNavigation</Text>
            <CircleButton caption="Start" onPress={() => navigate('AboutScreen')}/>
          </View>
        </Content>
        <FooterTab navigate={navigate} current="HomeScreen"/>
      </Container>
      
    )
  }
}


const mapStateToProps = state => ({
  sampleReducer: state.sampleReducer,
});

const mapDispatchToProps ={
  sampleAction,
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);