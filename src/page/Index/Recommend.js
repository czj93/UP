import {Dimensions,Text, View, StyleSheet, Button, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';
import React, {Component} from 'react';

const { width, height } = Dimensions.get('window');
import WeekGame from './WeekGame'
import Banner from './Banner'
import Appr from './Appr'

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

class Index extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state={
          ready: true,
          refreshing: false,
          bannerList: [],
          columnList:[]
        }
    }

    _fetchData(cb){
        fetch('https://up.163.com/api/app/recommend/portal',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            cb && cb()
            if(data.code == 0){
                this.setState({
                    bannerList: data.info[0].bannerList
                })
                if(data.info.length){
                    this.setState({
                        columnList:  data.info,
                        ready: false
                    })
                    console.log(this.state.columnList)
                }

            }
        }).catch((error) => {
            cb && cb()
            console.error(error)
        })
    }

    _refresh = () => {
        this.setState({
            refreshing: true
        })
        this._fetchData(() => {
            this.setState({
                refreshing: false
            })
        })
    }

    componentDidMount(){
        this._fetchData()
    }

    render(){
        const {bannerList, refreshing} = this.state;
        const { navigate } = this.props.navigation;
        return (
            <ScrollView tabLabel='Recommend' style={{width:width,height:height,backgroundColor:'#171717'}} 
            refreshControl={<RefreshControl onRefresh={ this._refresh } refreshing={refreshing} />}    
            >
            {
                this.state.ready 
                ? <ActivityIndicator size="large" style={{marginTop:100}} />
                :  this.state.columnList.map((item, i) => {
                    if(item.columnType == 1){
                        return <Banner key={i} bannerList={this.state.columnList[i].bannerList} />
                    }else if(item.columnType == 2 && item.contentDisplayType == 2){ // 游戏列表
                        return <WeekGame key={i} title={item.columnTitle} subTitle={ item.columnSubtitle } list={item.gameList} />
                    }else if(item.columnType == 2 && item.contentDisplayType == 1){ // 鉴赏列表
                        return <Appr key={i} page={'Me'} title={item.columnTitle} list={item.contentList} />
                    } 
                })
            }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textColor: {
        color: "#fff"
    }
})

export default Index