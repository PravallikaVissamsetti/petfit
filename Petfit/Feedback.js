import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';
import FeedbackCategory from './FeedbackCategory';
import Emojis from './Emojis'
import SendButton from './SendButton';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        lineHeight: 50,
    },
    midtitleText: {
        fontSize: 15,
        fontWeight: "bold",
    },
    ratingText: {
        fontStyle: 'normal',
        fontSize: 14,
    },
    parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

const Feedback = () => {
    return (

        <View style={styles.container}>

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://i.pinimg.com/736x/cc/4c/22/cc4c228e3d69dcd92f7f99b802cb8d24.jpg',
                }}
            />
            <Text style={styles.titleText}> Welcome New User</Text>
            <Text style={styles.midtitleText}>we would like your feedback to Improve our app</Text>
            <Text style={styles.ratingText}>How do you feel about the features of the app</Text>
            <Emojis />
            <Text style={styles.ratingText}>Please select any feedback category</Text>
            <FeedbackCategory />
            <Text style={styles.midtitleText}>Please leave your feedback below:</Text>
            <TextInput
                style={{
                    height: 100,
                    width: 200,
                    margin: 20,
                    padding: 10,
                    borderWidth: 1
                }}
                multiline={true}
            />
            <SendButton />
        </View>

    );
}

export default Feedback;