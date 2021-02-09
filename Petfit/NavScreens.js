import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PetView from './PetView';
import Loginpage from './Loginpage';
import DrawScreens from './DrawScreens';
import AdminMenu from './AdminMenu';
const Stack = createStackNavigator();
const NavScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        title: 'LOGIN',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'Calibri',
                            textAlign: "center"
                        },
                    }
                    } name="loginpage" component={Loginpage} />
                <Stack.Screen
                    options={{
                        title: 'PETFIT',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'Calibri'
                        },
                    }
                    }
                    name="Drawscreen" component={DrawScreens} />
                <Stack.Screen
                    options={{
                        title: 'PetFit',
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'Calibri'
                        },
                    }
                    }
                    name="petview" component={PetView} />
                <Stack.Screen
                    options={{
                        title: 'PetFit',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: 'Calibri'
                        },
                    }
                    }
                    name="adminmenu" component={AdminMenu} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavScreens; 