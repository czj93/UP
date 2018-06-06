import {Dimensions,Text, View, Button, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Banner from './banner'
import Info from './info'
const { width, height } = Dimensions.get('window');

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { game, interestGameTotal } = this.props
        return (
            <View style={styles.container}>
                <Banner bannerList={game.gameImageList} />
                <Info {...this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    }
})

export default Header