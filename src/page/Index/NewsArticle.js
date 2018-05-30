import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';

import Avatar from '../Components/avatar'


class NewsArticle extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let {item}  = this.props
        return (
            <View style={{ paddingBottom: 15, paddingRight: 15, paddingLeft: 15, paddingTop: 15, backgroundColor: '#222', marginBottom: 15 }}>
                <Avatar data={item.author} layoutStyle={{marginBottom: 10}}/>
                <Text style={{ color: '#d2d2d2', fontSize: 16, lineHeight: 26 }}>{item.contentDigest}</Text>
                {
                    item.imageList && item.imageList.length 
                    ? <TouchableWithoutFeedback onPress={() => { 
                        this.props.navigation.navigate('ArticleDetail', {link: item.linkUrl})
                     }}>
                        <View><Image source={{ uri: item.imageList[0] }} style={{ width: 345, height: 147, marginTop: 5  }} /> </View> 
                    </TouchableWithoutFeedback>
                    : null
                }
            </View>
        )
    }
}


export default NewsArticle