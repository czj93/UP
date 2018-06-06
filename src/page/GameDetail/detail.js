import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
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

    render(){
        const { game } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.detail}>
                    <View style={styles.labelLayout}>
                        <Image source={require("../../resource/img/game-detail/icon_day.png")} style={{ width: 16, height: 16 }} />
                        <Text style={styles.labelText}>发售日:</Text>
                    </View>
                    <View></View>
                    <View style={styles.labelLayout}>
                        <Image source={require("../../resource/img/game-detail/icon_time.png")} style={{ width: 16, height: 16 }} />
                        <Text style={styles.labelText}>通    关:</Text>
                        <Text style={styles.contentText}>1009</Text>
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
                        <Text style={styles.contentText}>{ game.officialUrl ? 'game.officialUrl' : '暂无' }</Text>
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
        height: 206
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