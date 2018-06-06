import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import React, {Component} from 'react';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Tabbar from './listTabbar'
import ApprList from './apprList'
import Detail from './detail'

class List extends Component {
    static defaultProps = {
        data: []
    }
    constructor(props){
        super(props)
    }

    render(){
        const { data, game, totalAppreciationCount } = this.props
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <Tabbar totalAppreciationCount={totalAppreciationCount} /> } 
                >
                    <ApprList tabLabel={totalAppreciationCount ? `鉴赏(${totalAppreciationCount})` : ''} data={data}></ApprList>
                    <Detail tabLabel="详情" game={game}  />
                </ScrollableTabView>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop: 10
    }

})

export default List