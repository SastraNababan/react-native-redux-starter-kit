import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
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
  Button,
  Input,
  Item,
  Form
} from 'native-base'
import {FooterTab} from '../components'
import {counterPlus,counterMinus} from '../store/actions'

class ReduxScreen extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation;
    const {value}=this.props.counter
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
        <Content padder contentContainerStyle={{flex: 1}}>
          <H1>Redux Screen </H1>
          <Text>Simple Redux Counter</Text>
            <Item style={{margin:20}}>
              <Button success rounded onPress={() => this.props.counterMinus()}>
                <Icon name='ios-remove' />
              </Button>
              <Input value={value.toString()}  style={{textAlign:'center',fontSize:20}} />
              <Button success rounded onPress={() => this.props.counterPlus()}>
                <Icon name='add' />
              </Button>
            </Item>
        </Content>
        <FooterTab navigate={navigate} current="ReduxScreen"/>
      </Container>
      
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps ={
 counterPlus,
 counterMinus
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxScreen);
