import {Dimensions,Text, View} from 'react-native';
import React, {Component} from 'react';

const { width, height } = Dimensions.get('window');

class Game extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View tabLabel='Game' style={{width:width,height:height,paddingTop:25,backgroundColor:'#171717'}}>
                <Text style={{ color: '#fff' }}>caozhijian Game</Text>
            </View>
        )
    }
}

export default Game