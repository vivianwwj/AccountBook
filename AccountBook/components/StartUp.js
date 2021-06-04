import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { calc } from '../utils/common'
import { Actions } from 'react-native-router-flux';
//不需要下面这样
//import List from './List';

class StartUp extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(function () {
            //接收两个参数
            //跳转至哪个界面，第二个参数是props，放了就会成为第一个界面的props
            Actions.push('list', {});
        }, 2000)
    }

    render() {
        return (
            <View style={styles.bg}>
                {/* 套上两层是因为很多时候Image和Text并没有办法撑起布局，需要View撑起布局 */}
                <View style={styles.logoContainer}>
                    {/* node中资源加载需要require */}
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Mi今天写代码了么</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: { backgroundColor: '#2d7afc', height: " 100%" },
    logo: { width: calc(281), height: calc(111) },
    logoContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: calc(280) },
    title: { color: '#FFF', fontSize: calc(64) },
    titleContainer: { flexDirection: 'row', justifyContent: 'center' }
})

export default StartUp;