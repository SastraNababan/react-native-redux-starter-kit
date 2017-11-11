import React, { Component } from 'react'
import { View,ScrollView } from 'react-native'
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
  Button,
  Row,
  Grid } 
from 'native-base'
import theme from '../theme'
import {CircleButton,FooterTab} from '../components'
import { connect } from 'react-redux';



class HomeScreen extends Component {
  state = {  }

  // testAction(){
  //   // this.props.dispatch(sampleAction())
  //   this.props.sampleAction()
  // }

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
            <Text>Welcome</Text>
          </Body>
          <Right/>
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <H1>React Native Starter Kit </H1>
            <Text style={{marginBottom:20}}>Powered by Redux, Nativebase, ReactNavigation</Text>
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
  // sampleAction,
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);