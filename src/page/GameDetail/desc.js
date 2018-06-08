import {View, Text, Image, StyleSheet, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import React, {Component} from 'react';

class Desc extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { game } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.desc}>
                    <Text style={styles.title}>简介</Text>
                    <Text style={styles.descText}>{ game.description }</Text>
                </View>
                <View style={styles.platform}>
                    {
                        game.platformList.map(item => <View key={item.platformId} style={styles.platformItem}><Text style={styles.platformText}>{item.platformName}</Text></View>)
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop: 10
    },
    desc:{
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e4e4e4'
    },
    title:{
        fontSize: 14,
        color: '#444',
        fontWeight: "600"
    },
    descText:{
        fontSize: 14,
        color: '#666',
        lineHeight: 24,
        marginTop: 10,
        textAlign: 'justify'
    },
    platform:{
        paddingRight: 15,
        paddingBottom: 15,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    platformItem:{
        borderRadius: 100,
        marginTop: 15,
        marginLeft: 15,
        backgroundColor: '#e8e8e8'
    },
    platformText:{
        fontSize: 14,
        color: '#444',
        borderRadius: 100,
        lineHeight: 27,
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Desc