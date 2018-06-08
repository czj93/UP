import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

class Tabbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: 0
        }
        this.typeArray = [
            {
                type: 'default',
                text: '默认'
            },{
                type: 'oldest',
                text: '最早'
            },{
                type: 'newest',
                text: '最新'
            }
        ]
    }

    hanleTypeClick = () => {
        let nextType = this.state.type + 1

        if(nextType >= this.typeArray.length ){
            nextType = 0
        }

        this.setState({ type: nextType }, () => {
            this.props.changeApprList(1, this.typeArray[nextType].type)
        })

    }

    handleRef = (view) => {
        this.container = view
        this.props.setChildComponent(view)
    }

    render(){
        const { tabs, activeTab, totalAppreciationCount } = this.props
        return (
            <View style={styles.tabbar} ref={ this.handleRef } onLayout={ (e) => {
                this.container.measure((x, y, w, h, l, t) => {
                    this.props.setTabbarOffsetTop(t - 65)
                })
            }}>
                <View style={ styles.tabberWrap }>
                    {
                        tabs.map((item , i) => 
                            <TouchableOpacity onPress={ () => this.props.goToPage(i) } key={i} style={{ marginRight: 20 }} >
                                <View style={activeTab == i && styles.line}>
                                    <Text style={[styles.tabText, activeTab == i && styles.tabTextActive ]}>{ item }</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </View>
                {
                    activeTab == 0 
                    ? <TouchableOpacity onPress={() => {
                        this.hanleTypeClick()
                    }}>
                        <View style={styles.right}>
                            <Image source={require('../../resource/img/game-detail/icon_rank.png')}></Image>
                            <Text style={styles.rightText}>{ this.typeArray[this.state.type].text }</Text>
                        </View>
                    </TouchableOpacity> 
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop: 10
    },
    tabbar: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e4e4e4',
        backgroundColor: '#fff'
    },
    right:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    rightText:{
        color: '#5CA2CA',
        fontSize: 11,
        marginLeft: 5
    },
    tabberWrap:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
    },
    tabText:{
        fontSize: 14,
        color: '#999'
    },
    tabTextActive:{
        color: '#444'
    },
    line:{
        borderBottomColor: '#FFD222',
        borderBottomWidth: 1,
        paddingBottom: 12,
        paddingTop: 12
    }
})

export default Tabbar