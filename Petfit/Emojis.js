import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Emojis = () => {
    return (
        // Try setting `flexDirection` to `column`.
        <View style={styles.container}>
            {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */
            }
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/emoji-10/24/96-512.png' }} style={{ width: 50, height: 50, justifyContent: "space-between" }} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/emoji-10/24/96-512.png' }} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/250/250123.png' }} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8UuIOe91sjmkWm50zPinsa9oBg6oNd2rApw&usqp=CAU' }} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                <Image source={{ uri: 'https://icon-library.com/images/1-512_58150.png' }} style={{ width: 50, height: 50 }} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 80,
    }
})
export default Emojis