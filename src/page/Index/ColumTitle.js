import {Dimensions, Text, View, Button, Image, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'

const { width, height } = Dimensions.get('window');

class ColumTitle extends Component {
    render(){
        const { title, page, parms } = this.props
        return (
            <View style={{ width: width, paddingBottom: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ position: 'relative' }}>
                    <View style={{ position: 'absolute', top: 4, left: 0, width: 6, height: 10, backgroundColor: '#00e8f8' }}></View>
                    <Text style={{ fontSize: 14, color: '#fff', marginLeft: 15}}>{title}</Text>
                </View>
                <TouchableWithoutFeedback
                 onPress={() => {
                    this.props.navigation.navigate(page, parms)
                 }}
                >
                    <Image style={{ marginRight: 15 }} source={require('../../resource/img/index/btn_home_arrow1.png')}   />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default withNavigation(ColumTitle)