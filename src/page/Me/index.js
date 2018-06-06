import React, {Component} from 'react';
import {StyleSheet, Dimensions,Text, View, Button, Image, Animated, TouchableHighlight, 
    PanResponder, ScrollView, ActionSheetIOS, AppState, Clipboard, TextInput, Share} from 'react-native';

import TouchMoveView from './touchMoveView'


const { width, height } = Dimensions.get('window');
 

var BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel',
  ];
  var DESTRUCTIVE_INDEX = 3;
  var CANCEL_INDEX = 4;

class Me extends Component {
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state
        return {
            header: null,
            headerRight: (
                <Button 
                 title='更多'
                 color='#000'
                 onPress={() => alert('this id button') } 
                />
            )
        }
    }

    constructor(props){
        super(props)

        this.state = {
            fadeAnim: new Animated.Value(0),
            w: 100
        }
    }

    componentDidMount(){
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()

        AppState.addEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        console.log(nextAppState)
    }

    showActionSheet(){
        this.setState({ w: 200 })
        ActionSheetIOS.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
        },
        (buttonIndex) => {
            console.log(buttonIndex);
        });
    }

    showShareAction(){
        console.log(AppState.currentState)
        ActionSheetIOS.showShareActionSheetWithOptions({
            message: 'message1',
            url: 'https://up.163.com',
            subject: 'subject1',
            excludedActivityTypes:[]
        }, (error) => {

        }, (success, method) => {

        })
    }

    _handleClipboard = () => {
        Clipboard.setString('hello world')
        alert('copy success')
    }


    render(){
        const { navigate } = this.props.navigation;
        const title = this.props.navigation.getParam('gameName');
        return (
            <View style={styles.container}>
                {/* <ScrollView> */}
                    <TouchableHighlight
                        onPress={ () => { console.log('press') } }
                        onPressIn={ () => { console.log('press in') } }
                        onPressOut={() => { console.log('press out') }}
                        onLongPress={ () => { console.log('long press')  } }
                    >
                        <View style={styles.v1} ></View>
                    </TouchableHighlight>
                    <Animated.View style={[styles.v1, {opacity: this.state.fadeAnim, height: this.state.w}]} ></Animated.View>

                    <Button title="ActionSheet" onPress={() => {
                        this.showActionSheet()
                    }}></Button>
                    <Button onPress={() => {
                        this.showShareAction()
                    }}  title="ShareActionSheet"></Button>
                    <Button onPress={this._handleClipboard} title="copy"></Button>
                    <TextInput style={styles.input} placeholder='请输入文字' keyboardType='url' editable={true}  />

                    <TouchMoveView>
                        <View style={styles.circle}></View>
                    </TouchMoveView>
                    <TouchMoveView>
                        <View style={styles.circle}></View>
                    </TouchMoveView>
                    <Button title="share" onPress={() => {
                        console.log('111')
                        Share.share({
                            message: 'A framework for building native apps using React',
                            url: 'http://facebook.github.io/react-native/',
                            title: 'React Native'
                        }, {
                            dialogTitle: 'Share React Native website',
                            excludedActivityTypes: [
                            'com.apple.UIKit.activity.PostToTwitter'
                            ],
                            tintColor: 'green'
                        })
                        .then((result) => {
                            if (result.action === Share.sharedAction) {
                                if (result.activityType) {
                                    console.log('shared with an activityType: ' + result.activityType)
                                } else {
                                    console.log('shared')
                                }
                            } else if (result.action === Share.dismissedAction) {
                                console.log('dismissed')
                            }
                        })
                    }}></Button>
                {/* </ScrollView> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {width:width, height: height,paddingTop:25,backgroundColor:'#171717'},
    v1: { width: 200, height: 200, backgroundColor: '#fff'},
    text:{ color: "#fff" },
    input: { color: '#fff', borderColor: '#eee', borderWidth: StyleSheet.hairlineWidth, borderRadius: 4, paddingLeft: 10, lineHeight: 30 },
    circle: { width: 30, height: 30, borderRadius: 100, backgroundColor: '#666' } 
})

export default Me