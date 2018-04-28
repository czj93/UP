import {Dimensions,Text, View, StyleSheet, Button} from 'react-native';
import React, {Component} from 'react';

const { width, height } = Dimensions.get('window');
import WeekGame from './WeekGame'
import Banner from './Banner'

class Index extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View tabLabel='UP' style={{width:width,height:height,paddingTop:25,backgroundColor:'#171717'}}>
                <Banner />
                <Button 
                    title="详情页"
                    onPress={ () => this.props.navigation.navigate('GameDetail', { gameName: '第五人格' }) }
                />
                <WeekGame />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textColor: {
        color: "#fff"
    }
})

export default Index