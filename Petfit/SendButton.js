import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default class SendButton extends Component {
    ButtonClickCheckFunction = () => {
        alert("We thankyou for your feedbacks.we will get back to you soon")
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity
                    style={styles.SendButtonStyle}
                    activeOpacity={.5}
                    onPress={this.ButtonClickCheckFunction}
                >
                    <Text style={styles.TextStyle}> SEND </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },

    SendButtonStyle: {

        marginTop: 30,
        paddingTop: 15,
        paddingBottom: 35,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 105
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    }

});

AppRegistry.registerComponent('SendButton', () => SendButton);