import {Dimensions,View, Text, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
      flex: 1,
      width: width, 
      height: 160,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })

class Banner extends Component {
    render(){
        const {bannerList} = this.props;
        return (
            <View style={{ height: 160 }}>
                <Swiper style={styles.wrapper} showsButtons={false} height={160} width={width} autoplay
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.5)', width: 26, height: 1.5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#0DE8FB', width: 26, height: 1.5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{ bottom: 15 }}
                >
                    {
                        bannerList.map((item, i) => <View style={styles.slide} key={i}>
                            <Image source={{ uri: item.imageUrl }} style={{ width: width, height: 160 }}></Image>
                        </View>)
                    }
                </Swiper>
            </View>
        )
    }
}


export default Banner