import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import HeaderMenu from './HeaderMenu';
import AboutpetCarousel from './AboutpetCarousel';
import { DrawerContent } from './DrawerContent';
import AddPets from './AddPets'
function UserProfile({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text>UserProfile</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('headermenu')}>
                <Text style={styles.textstyle}>
                    Home
             </Text>
            </TouchableOpacity>
        </View>
    );
}
function Help({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '500',
                    marginBottom: 20,
                }}>CustomerCare Number</Text>
                <Text style={styles.custnum}>08572028282</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('headermenu')}>
                <Text style={styles.textstyle}>
                    HOME
             </Text>
            </TouchableOpacity>
        </View>
    );
}
function Support({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
            <View>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}>Feel Free to Write Over Mail</Text>
                <Text style={styles.textbox}>petfit2020@support.com</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('headermenu')}>
                <Text style={styles.textstyle}>
                    HOME
             </Text>
            </TouchableOpacity>
        </View>
    );
}
function About({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', backgroundColor: 'lightgrey' }}>
            <View style={{ width: '100%', padding: 18, marginTop: 100, marginBottom: 28 }}>
                <Text style={{ fontSize: 24, fontFamily: 'sans-serif', color: 'black', marginBottom: 20 }}>About PetFit</Text>
                <Text style={{ marginBottom: 29, fontSize: 20 }}
                >
                    You Can Find Desired One across breeds</Text>
                <AboutpetCarousel />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('headermenu')}>
                <Text style={styles.textstyle}>
                    HOME
             </Text>
            </TouchableOpacity>
        </View>
    );
}
function Logout({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('loginpage')}>
                <Text style={styles.textstyle}>
                    LOGOUT
             </Text>
            </TouchableOpacity>
        </View>
    );
}
const Drawer = createDrawerNavigator();
export default function DrawScreens() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="headermenu" component={HeaderMenu} />
            <Drawer.Screen name="UserProfile" component={UserProfile} />
            <Drawer.Screen name="Help" component={Help} />
            <Drawer.Screen name="AddPet" component={AddPets} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({
    textbox:
    {
        fontSize: 22,
        width: 280,
        height: 50,
        borderColor: '#a9a9a9',
        borderWidth: 3,
        borderRadius: 5,
        borderBottomColor: 'black',
        marginBottom: 30,
        backgroundColor: 'green',
        color: 'white'
    },
    custnum:
    {
        fontSize: 22,
        width: 280,
        height: 50,
        borderColor: '#a9a9a9',
        borderWidth: 3,
        borderRadius: 5,
        borderBottomColor: 'black',
        marginBottom: 30,
        backgroundColor: 'lightgrey',
        color: 'black',
        fontWeight: 500,
        textAlign: 'center'
    },
    textstyle:
    {
        fontSize: 23,
        backgroundColor: '#1e90ff',
        color: 'white',
        textAlign: 'center',
        padding: 8,
        borderRadius: 5,
        height: 48
    }
}) 