import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MobileAuthenticationScreen from '../screens/AuthScreen/MobileAuthentication';
import OtpScreen from '../screens/AuthScreen/OtpScreen';
import SignupScreen from '../screens/AuthScreen/RegisterationScreen';
import LoginScreen from '../screens/AuthScreen/SignInScreen';
import Onbording from '../screens/AuthScreen/Onbording';
import { WEB_CLIENT_ID } from "@env"
import Userdetails from '../screens/AuthScreen/Userdetails';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;


  useEffect(() => {

    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });

  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboardurl';
  } else {
    routeName = 'Mobile';
  }

  return (
    <Stack.Navigator initialRouteName={routeName} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboardurl" component={Onbording} />
      <Stack.Screen name="Mobile" component={MobileAuthenticationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="OtpVerify" component={OtpScreen} />

    </Stack.Navigator>
  );
};

export default AuthStack;
