import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {Component} from 'react';

import Avatar from '../Components/avatar'

class ApprList extends Component {
    constructor(props){
        super(props)
    }

    _renderItem({ item }) {
        let imgsArr = []
        for(let attr in item.imgs){
            imgsArr.push(item.imgs[attr]) 
        }

        let _width = 345
        if(imgsArr.length >= 3){
            _width = 112
            imgsArr = imgsArr.slice(0 ,3)
        }else{
            imgsArr = imgsArr.slice(0)
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Avatar data={item.author} textStyle={{ color: '#999' }} />
                    <Image source={ 
                        item.upOrDown == 1 
                        ? require('../../resource/img/icon_like/icon_choose_like.png') 
                        : require('../../resource/img/icon_like/icon_choose_unlike.png') 
                    } /> 
                </View>
                <Text numberOfLines={3} style={styles.text}>{item.content.substring(0, 10)}</Text>
                <View style={styles.imgs}>
                    {
                        imgsArr.map(image => <View key={item.id} style={styles.imgItem}><Image source={{ uri: image.src }} style={{ width: _width, height: 112 }} /> </View>)
                    }
                </View>
            </View>
        )
    }

    render(){
        const { data } = this.props        
        return (
            <FlatList 
                data={data} 
                bounces={false}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.id.toString()}
            />
        )
    }
}

const styles =  StyleSheet.create({
    container:{
        padding: 15
    },
    header:{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    text:{
        color: '#444',
        fontSize: 15,
        lineHeight: 25,
        marginTop: 10
    },
    imgs:{
        marginTop: 10,
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    imgItem:{
        borderRadius: 6,
        overflow: 'hidden'
    }
})


export default ApprList