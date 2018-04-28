import {Dimensions,Text, View, Button} from 'react-native';
import React, {Component} from 'react';

const { width, height } = Dimensions.get('window');

class GameDetail extends Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            title: params ? params.gameName : '游戏详情页',
            headerRight: (
                <Button 
                 title='更多'
                 color='#000'
                 onPress={() => alert('this id button') } 
                />
            )
        }
    }
    render(){
        const { navigate } = this.props.navigation;
        const title = this.props.navigation.getParam('gameName');
        return (
            <View tabLabel='游戏详情' style={{width:width,height:height,paddingTop:25,backgroundColor:'#171717'}}>
                <Text style={{ color: '#fff' }}>game detail { title }</Text>
            </View>
        )
    }
}

export default GameDetail