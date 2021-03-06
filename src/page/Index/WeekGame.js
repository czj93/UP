import {Dimensions, Text, View, Button, Image, FlatList, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'

import ColumTitle from './ColumTitle'

const { width, height } = Dimensions.get('window');

class WeekGame extends Component {
    constructor(props){
        super(props)
    }

    _renderItem = ({item}) => {
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.props.navigation.navigate('GameDetail', {id: item.gameId})
            }}>
                <View style={{ marginLeft: 15, marginTop: 15 }}>
                    <Image source={{ uri: item.coverImageUrl.replace('http:', 'https:') }} defaultSource={require('../../resource/img/default.png')} style={{ width: 75, height: 100, borderRadius: 6, borderWidth: 2, borderColor: '#000' }}></Image>
                    <Text numberOfLines={1} style={{ fontSize: 11, color: '#fff', marginTop: 10, width: 75 }}>{ item.gameName }</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render(){
        const {title, list, subTitle} = this.props
        return (
            <View style={{ width:width, paddingBottom: 20, paddingTop: 20 }}>
                <ColumTitle page={'Me'} parms={{}} title={title} />
                <View style={{ backgroundColor: '#393e49', paddingTop: 20, paddingBottom: 20 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline', marginLeft: 15, marginBottom: 15 }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>{ subTitle.slice(0, 1) }</Text>
                            <Text style={{ fontSize: 11, color: '#fff'}}>{ subTitle.slice(1) }</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(151,151,151, .2)', height: 1, marginLeft: 15, marginRight: 15 }}></View>
                    </View>
                    <FlatList 
                        data={list}
                        horizontal={true}
                        initialNumToRender={4}
                        keyExtractor={(item, index) => item.gameId.toString()}
                        getItemLayout={(data, index) => ( {length: 100, offset: 100 * index, index} )}
                        renderItem={ this._renderItem }
                    />
                </View>
            </View>
        )
    }
}

export default withNavigation(WeekGame)