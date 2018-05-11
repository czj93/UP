import {Dimensions, Text, View, Button, Image, FlatList} from 'react-native';
import React, {Component} from 'react';

import ColumTitle from './ColumTitle'
import ApprItem from './ApprItem'


class Appr extends Component {
    constructor(props){
        super(props)
    }

    _renderItem = ({ item }) => {
        return <ApprItem data={item} />
    }

    render(){
        const {list, title, page} = this.props;

        return (
            <View>
                <ColumTitle page={page} parms={{}} title={title} />
                <FlatList 
                    data={list}
                    initialNumToRender={3}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => item.contentId.toString()}
                    getItemLayout={(data, index) => ( {length: 250, offset: 265 * index, index} )}
                />
            </View>
        )
    }
}

export default Appr