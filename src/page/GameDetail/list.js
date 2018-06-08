import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Dimensions} from 'react-native';
import React, {Component} from 'react';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Tabbar from './listTabbar'
import ApprList from './apprList'
import Detail from './detail'

const { width, height } = Dimensions.get('window');

class List extends Component {
    static defaultProps = {
        data: []
    }
    constructor(props){
        super(props)
        this.state = {
            tabViewStyle: {},
            firstTabSwitch: true
        }
        this.tabItems= []
    }

    _setHandleTabHeight(index) {
        this.props.changeTab(index)
        setTimeout(() => {
            console.log(this.tabItems[index])
            this.tabItems[index].getOffset(this._setTabHeight.bind(this))
        }, 1)
    }

    _setTabHeight(ox, oy, width, height, px, py) {
        // this.setState({tabViewStyle: {height: height}})
        if(this.state.firstTabSwitch){
          this.setState({tabViewStyle: {height: height}, firstTabSwitch:false})
        } else{
          this.setState({tabViewStyle: {height: 'auto'},firstTabSwitch:true})
        }
    }

    render(){
        const { data, game, totalAppreciationCount } = this.props
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={ this.state.tabViewStyle }
                    scrollWithoutAnimation={true}
                    // prerenderingSiblingsNumber={0} 
                    onChangeTab = {obj =>  this._setHandleTabHeight(obj.i)}
                    renderTabBar={() => <Tabbar totalAppreciationCount={totalAppreciationCount} setChildComponent={this.props.setChildComponent} setTabbarOffsetTop={this.props.setTabbarOffsetTop} changeApprList={this.props.changeApprList} /> } 
                >
                    <ApprList ref={ item =>  this.tabItems[0] = item} tabLabel={totalAppreciationCount ? `鉴赏(${totalAppreciationCount})` : ''} data={data}></ApprList>
                    <Detail ref={ item =>  this.tabItems[1] = item} tabLabel="详情" game={game}  />
                </ScrollableTabView>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10
    }

})

export default List