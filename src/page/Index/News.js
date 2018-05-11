import {View, Text} from 'react-native';
import React, {Component} from 'react';

class News extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View>
                <Text style={{ color: '#fff', fontSize: 20 }}>动态</Text>
            </View>
        )
    }
}

export default News