import {Dimensions,View, Text, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'

const { width, height } = Dimensions.get('window');

class ApprItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        return (
            <TouchableWithoutFeedback onPress={ () => {
                data.contentType == 1 ? this.props.navigation.navigate('ArticleDetail', {link: data.linkUrl}) :
                data.contentType == 2 ? this.props.navigation.navigate('ApprDetail', {link: data.linkUrl}) : null
                
            } }>
                <View style={{ marginBottom: 15, backgroundColor: '#222' }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                            <View style={{marginLeft: 15, marginTop: 10, marginBottom: 10, position: 'relative'}}>
                                <Image source={{ uri: data.author.headpic }} defaultSource={require('../../resource/img/head.png')} style={{ width:25, height: 25, borderRadius: 12  }} />
                                {
                                    data.author.userHonourType 
                                    ? <Image souce={{ uri: data.author.userHonourType.imageUrl }} style={{ position: 'absolute' ,width: 10, height: 10, bottom: 0, right: 0, zIndex: 2 }}/>
                                    :null
                                }
                                
                            </View>
                            <Text style={{ fontSize: 14, color: '#fff', marginLeft: 10 }}>{data.author.nickname}</Text>
                        </View>
                        <View style={{position: 'relative'}}>
                            <Image source={{ uri: data.imageUrl }}  style={{ width: width, height: 160 }} ></Image>
                            <Text style={{ fontSize:20, color: '#fff', position: 'absolute', bottom: 15, paddingLeft: 15, paddingRight: 15,lineHeight:24 }}>{ data.contentTitle }</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <ImageBackground source={require('../../resource/img/index/img_bj.png')} style={{ width: 30, height: 30, marginTop: 10, marginBottom: 10, marginLeft: 15 }}>
                                    {
                                        data.upPercent ? 
                                        <Text style={{fontSize: 11, color: '#999', lineHeight: 30, textAlign: 'center', color: '#fff', fontFamily: 'Avenir-Black'}}>{data.upPercent + '%'}</Text>
                                        : null
                                    }
                                </ImageBackground>
                                <Text style={{ fontSize: 12, color: '#fff', marginLeft: 5 }}>{ data.contentGameName }</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Image source={require('../../resource/img/index/icon_like.png')} style={{ width: 8, height: 9 }} />
                                    <Text style={{fontSize: 11, color: '#999', marginLeft: 5}}>{data.upOrDown || 0 }</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20 }}>
                                    <Image source={require('../../resource/img/index/icon_talk.png')} style={{ width: 10, height: 7 }} />
                                    <Text style={{fontSize: 11, color: '#999', marginLeft: 5}}>{data.commentNum || 0 }</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const style = StyleSheet.create({
    header: {

    }
})

export default ApprItem