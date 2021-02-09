import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import { DrawerContentAdmin } from './DrawerContentAdmin';
import AdminHeaderMenu from './AdminHeaderMenu';
import Feedback from './Feedback'
function AllProducts({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>AllProducts</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('adminmenu')}>
                <Text style={styles.textstyle}>
                    HOME
             </Text>
            </TouchableOpacity>
        </View>
    );
}
function AddProducts({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
            <Text>AddProducts</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('adminmenu')}>
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
export default function AdminPage() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContentAdmin {...props} />}>
            <Drawer.Screen name="adminmenu" component={AdminHeaderMenu} />
            <Drawer.Screen name="All Products" component={AllProducts} />
            <Drawer.Screen name="Add Products" component={AddProducts} />
            <Drawer.Screen name="View Feedback" component={Feedback} />
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