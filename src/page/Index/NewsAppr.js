import {View, Text, Image} from 'react-native';
import React, {Component} from 'react';

import Avatar from '../Components/avatar'

class NewsAppr extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let {item}  = this.props
        return (
            <View style={{ paddingBottom: 15, paddingRight: 15, paddingLeft: 15, paddingTop: 15, backgroundColor: '#222', marginBottom: 15 }}>
                <Avatar data={item.author} layoutStyle={{ marginBottom: 10 }} />
                <Text style={{ color: '#d2d2d2', fontSize: 16, lineHeight: 26 }}>{item.contentDigest}</Text>
                {
                    item.imageList && item.imageList.length 
                    ? <View><Image source={{ uri: item.imageList[0] }} style={{ width: 345, height: 147, marginTop: 5  }} /> </View> 
                    : null
                }
                <View style={{ marginTop: 12.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#282828', borderRadius: 4, overflow: 'hidden' }}>
                    <Image source={{ uri: item.game.coverImageUrl }} defaultSource={require('../../resource/img/default.png')} style={{ width: 37, height: 49 }} />
                    <View style={{ flexDirection: 'row',flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#dbdbdb', fontSize: 14 }}>{item.game.gameName}</Text>
                            <Text style={{ color: '#dbdbdb', marginTop: 5, fontSize: 11 }}>{item.gamePlatformName}</Text>
                        </View>
                        <Text>{item.upOrDown}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


export default NewsAppr