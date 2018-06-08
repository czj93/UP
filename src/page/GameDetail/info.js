import {View, Text, Image, StyleSheet, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import React, {Component} from 'react';

class Info extends Component {
    static defaultProps = {
        interestGameTotal: 0
    }

    constructor(props){
        super(props)
    }

    render(){
        const { game, interestGameTotal } = this.props
        const labelList = game.gameTypeList.concat(game.impressList)
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title} numberOfLines={1} >{ game.gameName }</Text>
                    <View style={styles.labelContainer}>
                        {
                            game.supportChinese ? <Image source={require('../../resource/img/game-detail/img_chinese.png')} style={{ width: 25, height: 15, marginRight: 10 }} /> : null
                        }
                        {
                            labelList.map(item => <Text key={item.labelId} style={styles.labelText}>{ item.labelName+"   " }</Text>)
                        }
                    </View>
                    <View style={styles.focus}>
                        <Image source={require('../../resource/img/game-detail/btn_attention1.png')} style={{ width: 25, height: 25 }}></Image>
                        <Text style={styles.focusText}>{interestGameTotal}人关注</Text>
                    </View>
                </View>
                <ImageBackground source={require('../../resource/img/game-detail/img_bj.png')} style={{ width: 93, height: 74 }}>
                    <View style={{ marginTop: 25 }}><Text style={styles.text1}>鉴赏数不足</Text></View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingTop: 20, 
        paddingLeft: 15, 
        paddingRight: 15,
        paddingBottom: 15
    },
    info:{
        width: 240
    },
    title:{
        fontSize: 20,
        color: "#444"
    },
    labelContainer:{
        marginTop: 15,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
    },
    labelText:{
        fontSize: 11,
        color: "#999"
    },
    focus:{
        marginTop: 20,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
    },
    focusText:{
        color: '#999',
        fontSize: 11,
        marginLeft: 5
    },
    text1:{
        color: '#222',
        fontSize: 10,
        textAlign: 'center'
    }
})

export default Info