import {Dimensions,View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');


const renderPagination = (index, total, context) => {
    return (
        <View style={styles.pagination}>
            <Text style={styles.paginationText}>{index + 1}/{total}</Text>
        </View>
    )
}

class Banner extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {bannerList} = this.props;
        return (
            <Swiper style={styles.wrapper} showsButtons={false} renderPagination={renderPagination} height={210} loop={true} width={width} autoplay
            >
                {
                    bannerList.map((item, i) => <View style={styles.slide} key={i}>
                        <Image source={{ uri: item.imageUrl }} style={{ width: width, height: 210 }}></Image>
                    </View>)
                }
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    slide: {

    },
    pagination:{
        width: 35,
        height: 22,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 100,
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 10,
        lineHeight: 22,
        textAlign: 'center'
    }
})

export default Banner