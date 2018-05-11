import React, {Component} from 'react';
import { AppRegistry, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import App from './App';
import Game from './src/page/Game'
import GameDetail from './src/page/GameDetail'
import Me from './src/page/Me'

import UpTab from './src/page/Index/HeadTab'
import TabBarItem from './src/page/Components/TabBarItem'

const HomeNav = TabNavigator({
    UP: {
      screen: UpTab,
      navigationOptions: (navigation) => {
        return {
            tabBarLabel:'UP',
            tabBarIcon: ({focused,tintColor}) => (
                <TabBarItem 
                 tintColor={tintColor}  
                 focused={focused}
                 // 大坑，， Image的资源名字不需要加@2x,@3x, react-native会自行选择合适的设备尺寸的图片， 加上后回出现 找不到的图片的错误  
                 normalImage={require('./src/resource/img/index/icon_up.png')}   
                 selectedImage={require('./src/resource/img/index/icon_up_hover.png')}  
                />
            )
        }
      }
    },
    Game: {
        screen: Game,
        navigationOptions: (navigation) => {
            return {
                tabBarLabel:'Game', 
                tabBarIcon: ({focused,tintColor}) => (
                    <TabBarItem 
                     tintColor={tintColor}  
                     focused={focused}  
                     normalImage={require('./src/resource/img/index/icon_game.png')}  
                     selectedImage={require('./src/resource/img/index/icon_game_hover.png')}  
                    />
                )
            }
        }
    },
    Me: {
        screen: Me,
        navigationOptions: (navigation) => {
            return {
                tabBarLabel:'Me', 
                tabBarIcon: ({focused,tintColor}) => (
                    <TabBarItem 
                     tintColor={tintColor}  
                     focused={focused}  
                     normalImage={require('./src/resource/img/index/icon_me.png')}  
                     selectedImage={require('./src/resource/img/index/icon_me_hover.png')}  
                    />
                )
            }
        }
    }
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 12,
        marginBottom: 2,
      },
      style: {
        height: 50,
        backgroundColor:'#222',
        shadowColor: '#000',
        shadowOpacity: .3,
        shadowOffset:{ width: 0, height: -4 },
        shadowRadius: 15

      },
    }
  
  });

  const MyApp = StackNavigator({
    Home: { screen: HomeNav },
    GameDetail: { screen:  GameDetail}
  
  },{
    headerMode:'screen'
  });

AppRegistry.registerComponent('UP', () => MyApp);
