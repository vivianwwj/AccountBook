import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, TextInput, Button, Alert } from 'react-native';
import { calc, BASE, QueryString } from '../utils/common'
import { Actions } from 'react-native-router-flux';

class AddDialog extends Component {
    constructor(props) {
        super(props),
            this.catalogs = [
                //支出
                ['生活', '教育', '娱乐', '医疗'],

                //收入
                ['工资', '投资', '红包'],
            ]

        this.state = {
            income: 0,
            // 那一项
            catalog: this.catalogs[0][0],
            // 那个列表
            catalogs: this.catalogs[0],
            comment: '',
            amount: 0
        }
    }
    cancel = () => {
        Actions.pop();
    }

    submit = async () => {
        try {
            let res = await fetch(BASE + '/add?' + QueryString({
                catalog: this.state.catalog,
                income: this.state.income,
                comment: this.state.comment,
                amount: this.state.amount
            }));
            //这边漏了括号
            let { err } = await res.json();
            if (err) {
                Alert.alert('错误', '网络错误', '添加失败，请检查网络状态')
            } else {
                Actions.pop();//返回记一笔那一页
            }
        } catch (e) {
            Alert.alert('错误', '网络错误', '添加失败，请检查网络状态')
        }
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.income}
                    style={{ height: calc(50), width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({
                        income: itemValue,
                        catalog: this.catalogs[itemValue][0],
                        catalogs: this.catalogs[itemValue]
                    })}
                >
                    <Picker.Item label="收入" value='1' />
                    <Picker.Item label="支出" value='0' />
                </Picker>

                <Picker
                    selectedValue={this.state.catalog}
                    style={{ height: calc(50), width: '100%' }}
                    onValueChange={itemValue => this.setState({
                        catalog: itemValue
                    })}
                >
                    {this.state.catalogs.map((item, index) => (
                        // 循环体里面一定要有key
                        <Picker.Item label={item} value={item} key={index} />
                    )
                    )}
                </Picker>

                <TextInput
                    style={{ width: '100%', height: 40, textDecorationLine: 'underline', fontSize: 15, marginLeft: 5 }}
                    placeholder="备注"
                    onChangeText={text => this.setState({
                        comment: text
                    })}
                />

                <TextInput
                    style={{ width: '100%', height: 40, textDecorationLine: 'underline', fontSize: 15, marginLeft: 5 }}
                    placeholder="金额"
                    onChangeText={text => this.setState({
                        amount: text
                    })}
                    keyboardType="number-pad"
                />

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}><Button title="添加" color="#2d7afc" onPress={this.submit} /></View>
                    <View style={{ flex: 1 }}><Button title="取消" color="#CCC" onPress={this.cancel} /></View>
                </View>
            </View>

        )
    }
}

export default AddDialog;