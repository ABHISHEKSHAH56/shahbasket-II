import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import auth from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { AppGoogleLogIn, AppLogIn, Applogout, AppMobileLogIn, AppSignUp, AppVerifyMobile } from '../API/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null)
  const [confirm, setConfirm] = useState(null);
  const dispatch = useDispatch()
  auth
  return (
    <AuthContext.Provider value={{
        logout: async () => {
        try {
          await auth().signOut();
          await Applogout().then((res) => {
            AsyncStorage.setItem("accessToken", '')
          })
          dispatch({
            type: 'SET_USER_DATA',
            payload: {
             userdata: null
            }
          })



        } catch (error) {
          console.log(error)

        }
      },

    }}>
      {children}
    </AuthContext.Provider>
  )
}