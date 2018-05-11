import {View, Text, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';

import NewsArticle from './NewsArticle'
import NewsAppr from './NewsAppr'
const { width, height } = Dimensions.get('window');
class News extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            list : [],
            ready: true,
            refreshing: false
        }
        this.page = 1
        this.limit = 10
    }

    _renderItem = ({item}) => {
        switch(item.contentType){
            case 1: return <NewsArticle item={item} />
            case 2: return <NewsAppr item={item} />
            default: return null
        }
    }

    _fetchData = () => {
        
        return fetch('https://up.163.com/api/app/dynamic/getNew',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            
            if(data.code == 0){
                this.setState({
                    ready: false,
                    list : data.info.contentList,
                    refreshing: false
                })
            }else{
                alert(data.message)
            }
        })
    }

    _refresh = () => {
        this.page++
        this.setState({
            refreshing: true
        })
        this._fetchData().catch(() => {
            this.page--
        })
    }

    componentDidMount(){
        this._fetchData()
    }

    render(){
        let {list, refreshing, ready} = this.state
        return (
            <View style={{ backgroundColor: '#171717', width:width,height:height, paddingBottom: 80 }}>
            {
                ready 
                ? <ActivityIndicator size="large" style={{ marginTop: 100 }}/>
                : <FlatList 
                    data={list}
                    refreshing={refreshing}
                    horizontal={false}
                    onRefresh={this._refresh}
                    keyExtractor={(item, index) => item.appreciationId.toString()}

                    renderItem={ this._renderItem }
                />
            }
                
            </View>
        )
    }
}

export default News