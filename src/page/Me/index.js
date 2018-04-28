import React, {Component} from 'react';
import {Dimensions,Text, View, Button, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

class Me extends Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            header: null,
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
            <View style={{width:width,height:height,paddingTop:25,backgroundColor:'#171717'}}>
                <Text style={{ color: '#fff' }}>个人主页 { title }</Text>
            </View>
        )
    }
}

export default Me