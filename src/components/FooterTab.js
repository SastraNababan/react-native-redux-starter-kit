import React, { Component } from 'react'
import {
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base'


const Tabs=[
  {
    caption:'Home',
    route:'HomeScreen',
    icon:'ios-home',
  },
  {
    caption:'About',
    route:'AboutScreen',
    icon:'ios-heart',
  },
  {
    caption:'Redux',
    route:'ReduxScreen',
    icon:'logo-buffer',
  }
]

export default ({navigate,current}) => (
  <Footer>
    <FooterTab>
      {
        Tabs.map((tab,ndx) => (
          <Button key={ndx} active={current==tab.route ? true:false} onPress={()=>navigate(tab.route)} >
            <Icon name={tab.icon}/>
            <Text>{tab.caption}</Text>
          </Button>  
        ))
      }
    </FooterTab>
  </Footer>
)


// <Tab caption="Home"  current={current} target={() => navigate('HomeScreen')}/>
// <Tab caption="About" current={current} target={() => navigate('AboutScreen')}/>
// <Tab caption="Redux" current={current} target={() => navigate('ReduxScreen')}/>