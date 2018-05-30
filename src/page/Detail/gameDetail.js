import {Dimensions,Text, View, WebView, Button} from 'react-native';
import React, {Component} from 'react';

const { width, height } = Dimensions.get('window');

class gameDetail extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
            header: () => {
                return (
                    <View style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, paddingTop: 10  }} >
                        <Button onPress={ () => { navigation.goBack() } }  title="返回" color="#fff" />
                    </View>
                )
            }
        }
    }

    getParms = (u, p) => {
        let m = new RegExp("(?:&|/?)"+p+"=([^&$]+)").exec(u)
        return m ? m[1] : null
    }

    render(){
        const { navigate } = this.props.navigation;
        const id = this.props.navigation.getParam('id')
        return (
            <WebView 
                source={{ uri: 'https://up.163.com/wap/game/detail.html?gameId=' + id }} 
                style={{width:width,height:height,backgroundColor:'#171717'}}>
            </WebView>
        )
    }
}

export default gameDetail