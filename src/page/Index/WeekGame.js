import {Dimensions, Text, View, Button, Image} from 'react-native';
import React, {Component} from 'react';

import ColumTitle from './ColumTitle'

const { width, height } = Dimensions.get('window');

class WeekGame extends Component {
    render(){
        return (
            <View style={{ width:width }}>
                <ColumTitle page={'Me'} parms={{}} title={'一周新游'} />
                
            </View>
        )
    }
}

export default WeekGame