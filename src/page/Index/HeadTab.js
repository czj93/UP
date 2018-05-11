import React, {Component} from 'react';
import { AppRegistry, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Recommend from './Recommend'
import News from './News'

const UpTab = TabNavigator({
    recommend: {
        screen: Recommend,
        navigationOptions: (navigation) => {
            return {
                tabBarLabel:'推荐'
            }
        }
    },
    news: {
        screen: News,
        navigationOptions: (navigation) => {
            return {
                tabBarLabel:'动态'
            }
        }
    }
},{
    tabBarPosition: 'top',
    swipeEnabled:true,
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      
      labelStyle: {
        fontSize: 16,
        lineHeight: 50
      },
      style: {
        backgroundColor:'#222'

      },
      tabStyle:{
        justifyContent: 'flex-start'
      }
    }
  
  })

export default UpTab