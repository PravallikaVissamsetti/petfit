import React from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'

const FeedbackCategory = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer} >
                <TouchableOpacity>
                    <Text style={styles.textStyle}>SUGGESTIONS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.textStyle}>COMPLAINTS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.textStyle}>COMPLEMENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 100,
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        borderRadius: 50,
        borderWidth: 7,
        borderColor: '#fff',
        backgroundColor: 'blue',
        width: '105%',
        height: 80,
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default FeedbackCategory;