import {
Dimensions,
Text, 
View, 
Button, 
ScrollView, 
ActivityIndicator
} from 'react-native';
import React, {Component} from 'react';
import Header from './header'
import Desc from './desc'
import List from './list'

const { width, height } = Dimensions.get('window');

class GameDetail extends Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            title: params ? params.gameName : '游戏详情页',
            headerRight: (
                <Button 
                 title='...'
                 color='#000'
                 onPress={() => alert('this id button') } 
                />
            )
        }
    }

    constructor(props){
        super(props)
        this.state = {
            ready:  false,
            loading: false,
            appreciationList: [],
            game: {},
            hasInterest: false,
            interestGameTotal: 0,
            totalAppreciationCount: 0,
            upPercent: 0,
            upValueDto: {},
            activeTab: 0,
            tabbarOffsetTop: height
        }
        this.id =  this.props.navigation.getParam('id')
        this.page = 1
        this.limit = 10
        this.oldest = 0
        this.newest = 0
    }

    componentDidMount(){
        this._fetchData()
    }

    _fetchData(cb){
        fetch('https://up.163.com/api/app/game/detail?gameId='+this.id,{
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
                console.log(data)
                this.setState({
                    ready: true,
                    ...data.info
                })
            }
        }).catch((error) => {
            cb && cb()
            console.error(error)
        })
    }

    setTabbarOffsetTop = (value) => {
        this.setState({
            tabbarOffsetTop: value
        })
    }

    // 获取tabbar的react 对象
    setChildComponent = (node) => {
        this.tabbarComponent = node
    }

    _scroll = (e) => {
        let eData = e.nativeEvent

        // tabbar 吸顶
        // if(eData.contentOffset.y > this.state.tabbarOffsetTop){
        //     console.log('top')
        //     this.tabbarComponent.setNativeProps({ style:{ top: eData.contentOffset.y - this.state.tabbarOffsetTop, left: 0, right: 0, zIndex: 20, position: 'absolute' } })
        // }else{
        //     console.log('233')
        // }

        if( (eData.contentSize.height - (eData.contentOffset.y + eData.layoutMeasurement.height)) < 100 && !this.state.loading && this.state.activeTab == 0 ){
            console.log('bottom')
            this.changeApprList()
        }
    }

    changeApprList = (page, type) => {
        this.setState({ loading: true })
        if(!page){
            this.page++
        }else{
            this.page = page
        }
        this.oldest = 0
        this.newest = 0
        if(type == 'oldest'){
            this.oldest = 1
        }else if(type == 'newest'){
            this.newest = 1
        }

        this.fetchApprList()
    }

    fetchApprList = () => {
        fetch(`https://up.163.com/api/app/appreciation/listAppreciation?gameId=${this.id}&page=${this.page}&limit=${this.limit}&oldest=${this.oldest}&newest=${this.newest}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.code == 0){
                if(this.page == 1){
                    this.setState({ appreciationList: data.info, loading: false })
                }else{
                    this.setState({ appreciationList: this.state.appreciationList.concat( data.info), loading: false })
                }
            }
        })
    }

    changeTab = (p) => {
        this.setState({
            activeTab: p
        })
    }

    render(){
        const { navigate } = this.props.navigation;
        const title = this.props.navigation.getParam('gameName');
        const {ready, game, interestGameTotal, totalAppreciationCount, upPercent, appreciationList, loading} = this.state
        if(!ready) return <ActivityIndicator size="large" style={{marginTop:100}} /> 
        return (
            <ScrollView 
                ref={view => this.container = view}
                onScroll={this._scroll}
                scrollEventThrottle={100}
                style={{width:width,backgroundColor:'#f2f2f2', flex: 1}}  
            >
                <Header 
                    game={game}  
                    upPercent={upPercent}
                    interestGameTotal={interestGameTotal} 
                    totalAppreciationCount={totalAppreciationCount} 
                />
                <Desc game={game} />
                <List game={game} 
                    data={appreciationList} 
                    changeApprList={this.changeApprList} 
                    totalAppreciationCount={totalAppreciationCount} 
                    changeTab={ this.changeTab }
                    setTabbarOffsetTop={this.setTabbarOffsetTop} 
                    setChildComponent={this.setChildComponent}
                />
                    {
                        loading ? <Text style={{ color: '#222', fontSize: 14, textAlign:'center' }}>正在加载...</Text> : null
                    }
            </ScrollView>
        )
    }
}

export default GameDetail