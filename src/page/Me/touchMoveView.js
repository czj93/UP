import React, {Component} from 'react';
import {StyleSheet, Dimensions, View,PanResponder, Button} from 'react-native';

const { width, height } = Dimensions.get('window');


class TouchMoveView extends Component{
    constructor(props){
        super(props)
        this.state = {
            left: 0, 
            top: 0
        }
    }
    
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({
            //  要求成为响应者：  
            //  在RN中事件采用用， 事件冒泡的机制，当多个组件嵌套的时候，并均申请成为事件响应者时，那么只有最深层的组件会响应时间
            //  若在这种情况下， 父组件需要成为响应者的话， 可以通过事件劫持实现  onStartShouldSetPanResponderCapture， onMoveShouldSetPanResponderCapture

            onStartShouldSetPanResponder: (evt, gestureState) => true,              //  在touch start阶段，申请成为事件响应者
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,      //   touch start 事件劫持
            onMoveShouldSetPanResponder: (evt, gestureState) => true,               // 在touchnove阶段成为事件响应者
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,        // touch move 事件劫持
      
            onPanResponderGrant: (evt, gestureState) => {
              // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
              // gestureState.{x,y} 现在会被设置为0
                console.log('233')
                this.offsetX = evt.nativeEvent.locationX
                this.offsetY = evt.nativeEvent.locationY
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}
                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
                // console.log(evt.nativeEvent)
                // 

                let left = evt.nativeEvent.pageX - this.offsetX,
                    top = evt.nativeEvent.pageY - this.offsetY;
                    left = left < 0 ? 0 : left;
                    top = top < 0 ? 0 : top;
                this.setNativeProps({ style: { left: left, top: top } })
                // this.setState({
                //     left: left,
                //     top: top
                // })

            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
              // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
              // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
              // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
              // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
              // 默认返回true。目前暂时只支持android。

              return true;
            },
        });
    }
        

    render(){
        let {left, top} = this.state
        return (
            <View ref={ ref => this._root = ref } {...this._panResponder.panHandlers} style={[styles.container, { left: left, top: top  }]}>
                { this.props.children }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    }
})

export default TouchMoveView