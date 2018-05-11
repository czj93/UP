import {View, Text, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';


class Avatar extends Component {

    static defaultStyle = StyleSheet.create({
        layout : {
            flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
        },
        avatarWrap:{
            position: 'relative'
        },
        avatar:{
            width:25, height: 25, borderRadius: 12
        },
        honour:{
            position: 'absolute' ,width: 10, height: 10, bottom: 0, right: 0, zIndex: 2
        },
        text: {
            fontSize: 14, color: '#fff', marginLeft: 10
        }
    })

    static defaultProps = {
        layoutStyle:{},
        avatarWrap: {},
        avatarStyle: {},
        honourStyle:{},
        textStyle:{}
    }

    constructor(props){
        super(props)
    }

    render(){
        let {data, layoutStyle, avatarWrap, avatarStyle, honourStyle, textStyle}  = this.props

        return (
            <View  style={[Avatar.defaultStyle.layout, layoutStyle]}>
                <View style={[ Avatar.defaultStyle.avatarWrap, avatarWrap ]}>
                    <Image source={{ uri: data.headpic }} defaultSource={require('../../resource/img/head.png')} style={[Avatar.defaultStyle.avatar, avatarStyle]} />
                    {
                        data.userHonourType 
                        ? <Image souce={{ uri: data.userHonourType.imageUrl }} style={[Avatar.defaultStyle.honour ,honourStyle]}/>
                        :null
                    }
                </View>
                <Text style={[Avatar.defaultStyle.text, textStyle]}>{data.nickname}</Text>
            </View>
        )
    }
}


export default Avatar