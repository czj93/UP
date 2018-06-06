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
            appreciationList: [],
            game: {},
            hasInterest: false,
            interestGameTotal: 0,
            totalAppreciationCount: 0,
            upPercent: 0,
            upValueDto: {}
        }
    }

    componentDidMount(){
        this._fetchData()
    }

    _fetchData(cb){
        fetch('https://up.163.com/api/app/game/detail?gameId=70675',{
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

    render(){
        const { navigate } = this.props.navigation;
        const title = this.props.navigation.getParam('gameName');
        const {ready, game, interestGameTotal, totalAppreciationCount, upPercent, appreciationList} = this.state
        if(!ready) return <ActivityIndicator size="large" style={{marginTop:100}} /> 
        return (
            <ScrollView 
                style={{width:width,backgroundColor:'#f2f2f2'}}  
            >
                <Header 
                    game={game}  
                    upPercent={upPercent}
                    interestGameTotal={interestGameTotal} 
                    totalAppreciationCount={totalAppreciationCount} 
                />
                <Desc game={game} />
                <List game={game} data={appreciationList} totalAppreciationCount={totalAppreciationCount} />
            </ScrollView>
        )
    }
}

export default GameDetail