import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import db from '../config'
import HomeScreen from './HomeScreen'

export default class ExchangeScreen extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            itemName: '',
            description: ''
        }
    }
    addItem = (itemName, description) => {
        var username = this.state.username
        db.collection('exchange_requests').add({
            'username': username,
            'item_name': itemName,
            'description': description
        })
        this.setState({
            itemName: '',
            description: ''
        })
        return Alert.alert('Item ready to echange', '', [
            {
                text: 'OK', onPress: () => {
                    this.props.navigation.navigate('HomeScreen')
                }
            }
        ])
    }
    render() {
        return (
            <View>
                <TextInput placeholder="item name"
                    onChangeText={(text) => {
                        this.setState({
                            itemName: text
                        })
                    }}
                />
                <TextInput placeholder="description"
                    onChangeText={(text) => {
                        this.setState({
                            description: text
                        })
                    }}
                />
                <TouchableOpacity onPress={() => {
                    this.addItem(this.state.itemName, this.state.description)
                }}>
                    <Text style={{ color: '#ffff', fontSize: 18, fontWeight: 'bold' }}>Add Item</Text>
                </TouchableOpacity>
            </View>
        )
    }
}