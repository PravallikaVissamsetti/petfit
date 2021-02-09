import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { color } from 'react-native-reanimated';
const AddPet = () => {
    const [value, onChangeText] = useState('');
    const [petDob, setPetDob] = useState('');
    const [petLoc, setPetLoc] = useState('');
    const [petBreed, setPetBreed] = useState('');
    return (
        <>
            {/* <View> 
         <Header centerComponent={{ text: 'Add Pet', style: { color: '#fff' } }} 
containerStyle={{ 
    backgroundColor: '#00004d', 
    justifyContent: 'space-around', 
  }} 
 /> 
 </View> */}
            <View style={{ backgroundColor: "grey" }} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>Pet Name:
    <TextInput
                                style={{ height: 30, marginTop: 15, borderColor: 'white', borderWidth: 1, color: "black", marginLeft: "100px", marginBottom: "5px", backgroundColor: "#fff" }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </Text>
                        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                            Pet DOB:
    <TextInput
                                style={{ height: 30, borderColor: 'white', borderWidth: 1, color: "black", marginLeft: "109px", marginBottom: "5px", backgroundColor: "#fff" }}
                                onChangeText={text => setPetDob(text)}
                                value={petDob}
                            /></Text>
                        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                            Pet Location:
    <TextInput
                                style={{ height: 30, borderColor: 'white', borderWidth: 1, color: "black", marginLeft: "82px", marginBottom: "5px", backgroundColor: "#fff" }}
                                onChangeText={text => setPetLoc(text)}
                                value={petLoc}
                            /></Text>
                        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                            Pet Breed:
    <TextInput
                                style={{ height: 30, borderColor: 'white', borderWidth: 1, color: "black", marginLeft: "100px", marginBottom: "5px", backgroundColor: "#fff" }}
                                onChangeText={text => setPetBreed(text)}
                                value={petBreed}
                            /></Text>
                        <Text style={{ marginLeft: 10, fontWeight: "bold" }} >Owner Details</Text>
                        <Text style={{
                            padding: 20,
                            height: 100,
                            width: 250,
                            margin: 10,
                            borderWidth: 1,
                            backgroundColor: '#fff'
                        }}>
                            Owner
         </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>Add Pets photo/ /video: </Text>
                            <Image source={{ uri: 'https://www.pngitem.com/pimgs/m/33-330111_album-icon-png-transparent-png.png' }} style={{ width: 30, height: 30, marginLeft: "100px" }} /></View>
                        <View>
                            <TouchableOpacity style={styles.button} >
                                <Text style={{ fontWeight: "bold" }}>Add</Text>
                            </TouchableOpacity></View>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    button: {
        width: 80,
        alignItems: "center",
        backgroundColor: "#fff",
        marginLeft: 150,
        padding: 10,
        marginTop: 10,
        marginBottom: 52
    }
})
export default AddPet; 