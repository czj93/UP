import {Dimensions,Text, View, WebView, Button} from 'react-native';
import React, {Component} from 'react';

const { width, height } = Dimensions.get('window');

class article extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
            headerStyle: {
                backgroundColor: '#222',shadowColor: 'transparent', borderBottomColor: '#000'
            },
            headerTintColor: '#fff',
            hearderLeft:(
                <Button onPress={ () => { navigation.goBack() } }  title="<" color="#fff" />
            ),
            headerRight:(
                <Button onPress={ () => {  } } title="..."  color="#fff"></Button>
            )
        }
    }

    getParms = (u, p) => {
        let m = new RegExp("(?:&|/?)"+p+"=([^&$]+)").exec(u)
        return m ? m[1] : null
    }

    render(){
        const { navigate } = this.props.navigation;
        const link = this.props.navigation.getParam('link')
        const id = this.getParms(link, 'id')
        return (
            <WebView 
                source={{ uri: 'https://up.163.com/wap/article.html?articleId=' + id }} 
                style={{width:width,height:height,backgroundColor:'#171717'}}>
            </WebView>
        )
    }
}

export default article