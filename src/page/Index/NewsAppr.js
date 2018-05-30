import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';

import gStyle from '../../global/global_style'
import Avatar from '../Components/avatar'

class NewsAppr extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let {item}  = this.props
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.props.navigation.navigate('ApprDetail', {link: item.linkUrl})
            }}>
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
                            <View style={{ marginRight: 15  }}>
                                {
                                    item.upOrDown == 1 
                                    ? <Image style={{ width: 15, height: 15 }} source={require('../../resource/img/icon_like/icon_list_like.png')} />
                                    : <Image style={{ width: 15, height: 15 }} source={require('../../resource/img/icon_like/icon_list_unlike.png')}  />
                                }
                            </View>
    
                        </View>
                    </View>
                    <View style={[gStyle.rec, {marginTop: 10}]}>
                        <View style={gStyle.rbc}>
                            <Image source={require('../../resource/img/index/icon_like.png')} style={{ width: 7, height: 8 }} />
                            <Text style={{fontSize: 11, color: '#999', marginLeft: 5}}>{item.praiseNum || 0 }</Text>
                        </View>
                        <View style={[gStyle.rbc, { marginLeft: 20}]}>
                            <Image source={require('../../resource/img/index/icon_talk.png')} style={{ width: 10, height: 7 }} />
                            <Text style={{fontSize: 11, color: '#999', marginLeft: 5}}>{item.commentNum || 0 }</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


export default NewsAppr