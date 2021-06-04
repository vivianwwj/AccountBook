import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button } from 'react-native';
import { calc, BASE } from '../utils/common';
import { Actions } from 'react-native-router-flux';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // records: [
            //     { ID: 1, catalog: '教育', income: 0, comment: '买ipad', amount: 2470.00 },
            //     { ID: 2, catalog: '娱乐', income: 0, comment: '过618', amount: 1337.70 },
            //     { ID: 5, catalog: '红包', income: 1, comment: '老妈红包', amount: 2500.00 },
            //     { ID: 8, catalog: '红包', income: 1, comment: 'zj红包', amount: 61.00 },
            // ]
            records: []
        }
    }

    showAddDialog = () => {
        Actions.push('adddialog', {});
    }

    totalIncome = () => {
        let sum = 0;
        this.state.records.forEach(({ income, amount }) => {
            if (income === '1') {
                sum += Number(amount);
            }
        })
        return sum.toFixed(2);
    }

    totalOutcome = () => {
        let sum = 0;
        this.state.records.forEach(({ income, amount }) => {
            if (income === '0') {
                sum += Number(amount);
            }
        })
        return sum.toFixed(2);
    }

    async componentDidUpdate() {
        //数据根本回不来情况下的
        try {
            let res = await fetch(BASE + '/list');
            let { err, data } = await res.json();
            //数据回来了，但是数据出错
            if (err) {
                //RN的Alert组件，参数分别为：title,content,按钮
                Alert.alert('错误', '请求数据失败', [{ title: 'ok' }]);
            } else {
                this.setState({
                    records: data
                })
            }
        } catch (e) {
            Alert.alert('错误', '请求数据失败', [{ title: 'ok' }]);
        }
    }
    
    async componentDidMount() {
        //数据根本回不来情况下的
        try {
            let res = await fetch(BASE + '/list');
            let { err, data } = await res.json();
            //数据回来了，但是数据出错
            if (err) {
                //RN的Alert组件，参数分别为：title,content,按钮
                Alert.alert('错误', '请求数据失败', [{ title: 'ok' }]);
            } else {
                this.setState({
                    records: data
                })
            }
        } catch (e) {
            Alert.alert('错误', '请求数据失败', [{ title: 'ok' }]);
        }
    }


    render() {
        return (
            // navigation
            <View style={{ height: "100%", backgroundColor: '#FFF' }}>
                <View style={{ height: calc(100), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2d7afc' }}>
                    <Text style={{ fontSize: calc(38), color: '#FFF', fontWeight: 'bold', marginTop: calc(30) }}>王文婧的小金库</Text>
                </View>

                {/* 概览 */}
                <View style={{ flexDirection: 'row', backgroundColor: '#2d7afc', paddingTop: calc(30) }}>
                    <View style={{ width: calc(150), paddingLeft: calc(5) }} >
                        <Text style={styles.titleSmall}>2021年</Text>
                        <Text style={styles.titleBig}>6月</Text>
                    </View>
                    <View style={{ width: calc(300) }}>
                        <Text style={styles.titleSmall}>支出</Text>
                        <Text style={styles.titleBig}>{this.totalOutcome()}</Text>
                    </View>
                    <View style={{ width: calc(300) }}>
                        <Text style={styles.titleSmall}>收入</Text>
                        <Text style={styles.titleBig}>{this.totalIncome()}</Text>
                    </View>
                </View>

                {/* 列表部分 */}
                <View style={{ height: calc(900), backgroundColor: '#F0F8FF' }}>
                    <FlatList
                        data={this.state.records}
                        keyExtractor={item => item.ID + ''}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{ flexDirection: 'row', marginBottom: calc(20), marginTop: calc(20) }}>
                                    <Text style={{ color: '#2d7afc', fontSize: calc(30), width: calc(150), paddingLeft: calc(5) }}>{item.catalog}</Text>
                                    <Text style={{ color: '#2d7afc', fontSize: calc(30), width: calc(300) }}>{item.comment}</Text>
                                    <Text style={{ color: '#2d7afc', fontSize: calc(30), width: calc(300) }}>{(item.income == 1) ? '+' : '-'}{item.amount}</Text>

                                </View>
                                <View style={{ height: 1, backgroundColor: '#CCC' }}></View>
                            </View>
                        )}
                    />
                </View>

                {/* 记一笔按钮 */}
                <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Button
                        onPress={this.showAddDialog}
                        title="记一笔"
                        color="#2d7afc"
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    titleBig: { color: '#FFF', fontSize: calc(43), fontWeight: 'bold' },
    titleSmall: { color: '#FFF', fontSize: calc(22) },
})

export default List;