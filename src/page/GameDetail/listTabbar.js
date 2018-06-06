import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

class Tabbar extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        const { tabs, activeTab, totalAppreciationCount } = this.props
        return (
            <View style={styles.tabbar}>
                <View style={ styles.tabberWrap }>
                    {
                        tabs.map((item , i) => 
                            <TouchableOpacity onPress={ () => this.props.goToPage(i) } key={i}>
                                <View >
                                    <Text style={[styles.tabText, activeTab == i && styles.tabTextActive ]}>{ item }</Text>
                                    <View></View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <TouchableOpacity>
                    <View style={styles.right}>
                        <Image source={require('../../resource/img/game-detail/icon_rank.png')}></Image>
                        <Text style={styles.rightText}>最新</Text>
                    </View>
                </TouchableOpacity>
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
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4'
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

})

export default Tabbar