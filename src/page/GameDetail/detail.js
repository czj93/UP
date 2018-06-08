import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Linking} from 'react-native';
import React, {Component} from 'react';

class Detail extends Component {
    constructor(props){
        super(props)
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('GameDetail', {id: item.gameId})
            }}>
                <View style={styles.gameItem}>
                    <Image source={{ uri: item.coverImageUrl.replace('http:', 'https:') }} 
                        defaultSource={require('../../resource/img/default.png')} 
                        style={styles.gameImage}
                    />
                    <Text numberOfLines={1} style={styles.gameText}>{ item.gameName }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _formatGameDuration(t){
        let h = Math.floor(t/60),
         m = Math.floor(t%60),
            str = `大约 `;
        h ? str += h + '小时' : '';
        m ? str += m + '分钟' : '';
        str += ' 通关'
        return str
    }

    getOffset(cb){
        this.container.measure(cb)
    }

    render(){
        const { game } = this.props
        return (
            <View style={styles.container} ref={view  => this.container = view}>
                <View style={styles.detail}>
                    <View style={styles.labelLayout}>
                        <Image source={require("../../resource/img/game-detail/icon_day.png")} style={{ width: 16, height: 16 }} />
                        <Text style={styles.labelText}>发售日:</Text>
                    </View>
                    <View></View>
                    <View style={styles.labelLayout}>
                        <Image source={require("../../resource/img/game-detail/icon_time.png")} style={{ width: 16, height: 16 }} />
                        <Text style={styles.labelText}>通    关:</Text>
                        <Text style={styles.contentText}>{ game.gameDuration ? this._formatGameDuration(game.gameDuration) : '暂无通关时长' }</Text>
                    </View>
                    <View style={styles.labelLayout}>
                        <Image source={require("../../resource/img/game-detail/icon_merchant.png")} style={{ width: 16, height: 16 }} />
                        <Text style={styles.labelText}>开发商:</Text>
                        <View>
                            {
                                game.companyList.map(company => <Text key={company.labelId} style={styles.contentText}>{company.labelName}</Text>)
                            }
                        </View>
                    </View>
                    <View style={styles.labelLayout}>
                        <Image source={require("../../resource/img/game-detail/icon_wap.png")} style={{ width: 16, height: 16 }} />
                        <Text style={styles.labelText}>官    网:</Text>
                        {
                             game.officialUrl 
                             ? <Text style={styles.contentText} onPress={ () => {
                                Linking.openURL(game.officialUrl)
                             } }>点击进入</Text>
                             : <Text style={styles.contentText}>暂无</Text>
                        }
                        
                    </View>
                </View>
                <View style={styles.game}>
                    <Text style={styles.gameTitle}>相关游戏</Text>
                    <FlatList 
                        data={game.relationGameList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
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

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f2f2f2'
    },
    labelLayout:{
        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
        marginTop: 20
    },
    labelText:{
        width: 50,
        fontSize: 14,
        color: '#999',
        marginLeft: 10
    },
    contentText:{
        fontSize: 14,
        color: '#444',
        marginLeft: 10
    },
    detail:{
        backgroundColor: '#fff',
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    game:{
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        height: 260
    },
    gameTitle:{
        fontSize: 14,
        color: '#444',
        marginLeft: 15,
        fontWeight: '600'
    },
    gameItem:{
        marginLeft: 15, 
        marginTop: 15
    },
    gameText:{ 
        fontSize: 13, 
        color: '#222', 
        marginTop: 10, 
        width: 75 
    },
    gameImage:{ 
        width: 90, 
        height: 120, 
        borderRadius: 6, 
        borderColor: '#000' 
    }
})

export default Detail