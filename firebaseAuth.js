import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { AuthContext, Authprovider } from './navigation/AuthProvider'
import auth from "@react-native-firebase/auth"
import { NavigationContainer } from '@react-navigation/native'
import { MyBottomTabs } from './navigation/BottomTabnavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupScreen from './screens/AuthScreen/RegisterationScreen'
import LoginScreen from './screens/AuthScreen/SignInScreen'
import MobileAuthenticationScreen from './screens/AuthScreen/MobileAuthentication'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'
import Onbording from './screens/onboardingScreen/Onbording'
import OtpScreen from './screens/AuthScreen/OtpScreen'
import HomeMap from './screens/Home/HomeMap'

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const OnboardStack = createNativeStackNavigator();
const AppStack = () => {
        return (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="HomeTabs" component={MyBottomTabs} />
                        <Stack.Screen name="MapScreen" component={HomeMap} />
                </Stack.Navigator>
        )
}




const AuthStackManager = () => {

        const [isFirstTime, setisFirstTime] = useState(true)

        useEffect(() => {
                AsyncStorage.getItem('viewfirst').then((value) => {
                        if (value === null) {
                                setisFirstTime(true)
                        }
                        else {
                                setisFirstTime(false)

                        }


                })
        }, []);

        return (
                <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                        {
                                isFirstTime ? <AuthStack.Screen name="Onboardurl" component={Onbording} /> : <>
                                        <AuthStack.Screen name="Mobile" component={MobileAuthenticationScreen} />
                                        <AuthStack.Screen name="Login" component={LoginScreen} />
                                        <AuthStack.Screen name="SignUp" component={SignupScreen} />
                                        <AuthStack.Screen name="OtpVerify" component={OtpScreen} />

                                </>
                        }
                </AuthStack.Navigator>



        )






}




export default function FirebaseAuth() {
        const [User, setUser] = useState(AuthContext)
        const [initlizaing, setinitlizaing] = useState(true)
        const [isLoading, setisLoading] = useState(true)


        useEffect(() => {
                setTimeout(() => {
                        setisLoading(false)

                }, 2000)
        }, [])
        //
        //this is first screen
        useEffect(() => {
                GoogleSignin.configure({
                        webClientId: '139508279121-fj5a9lrg5ba40s2k4jdlfkr2ukjpbaju.apps.googleusercontent.com',
                });

        }, []);
        //this is authentication setup
        const onAuthStateChanged = (user) => {
                setUser(user)
                if (initlizaing) setinitlizaing(false)
        }


        useEffect(() => {

                const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
                return subscriber;

        }, [])


        if (isLoading) {
                return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <LottieView source={require('./assets/badiya/45869-farmers.json')} autoPlay loop />
                        </View>
                )
        }

        if (initlizaing) return null;







        return (
                <Authprovider>
                        <NavigationContainer>
                                {


                                        User ? <AppStack /> : <AuthStackManager />



                                }
                        </NavigationContainer>

                </Authprovider>

        )
}
