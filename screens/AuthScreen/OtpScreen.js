import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
        View,
        Text,
        TouchableOpacity,
        Image,
        Platform,
        StyleSheet,
        ScrollView,
        Alert
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { AuthContext } from '../../navigation/AuthProvider';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AnimatedLoader from 'react-native-animated-loader';
import auth from "@react-native-firebase/auth"
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppMobileLogIn } from '../../API/Index';
import { useDispatch } from 'react-redux';

const OtpScreen = ({ navigation, route }) => {
        const [timer, settimer] = useState(60)
        const [code, setcode] = useState(null);
        const [visible, setVisible] = useState(false);
        const [otp, setotp] = useState(null)
        const { phone } = route.params
        const dispatch = useDispatch()
        useEffect(async() => {
                await auth().signInWithPhoneNumber(phone).then((res)=>{
                        console.log(res)
                        setotp(res) 

                }).catch((err)=>console.log(err))
        }, [])
        const handller = () => {
                setVisible(true)
                const data = {
                        phone:phone        
                }
                
                AppMobileLogIn(data).then((response) => {
                        AsyncStorage.setItem("accessToken", response.data.accessToken)                    
                        dispatch({
                          type: 'SET_USER_DATA',
                          payload: {                
                            userdata: response.data.user,
                            accessToken:response.data.accessToken
                        }})
                        
               })
               otp.confirm(code).then((res)=>{
                        if(res.additionalUserInfo.isNewUser) navigation.navigate("UserInfo",{check:true})
                        setVisible(false)
                        navigation.pop(2)                       
                        console.log(res)
               }
                ).catch((err)=>{
                        setVisible(false)
                        alert("Invalid-verification code ")
                        
                })
                
                




        }
        const againhangller = async() => {
                if (timer === 0) {
                        await auth().signInWithPhoneNumber(phone).then((res)=>{
                                settimer(60)
                                setotp(res)
        
                        }).catch((err)=>console.log(err))
                        
                }
        }


        React.useEffect(() => {
                let interval = setInterval(() => {
                        settimer(prev => {
                                if (prev > 0) {
                                        return prev - 1
                                }
                                else {
                                        return prev
                                }
                        })
                }, 1000)
                return () => clearInterval(interval)
        }, [])


        return (
                <ScrollView contentContainerStyle={styles.container}>

                        <AnimatedLoader
                                visible={visible}
                                overlayColor="rgba(255,255,255,0.95)"
                                source={require("../../assets/messages/tri.json")}
                                animationStyle={{
                                        width: 250,
                                        height: 250
                                }}
                                speed={1}
                        >

                        </AnimatedLoader>



                        <Image
                                source={require('../../assets/banners/6.png')}
                                style={styles.logo}
                        />
                        <View style={{ flex: 1, }}>
                                <Text style={{
                                        fontWeight: '700',
                                        fontSize: 25,
                                        color: COLORS.black,
                                        textAlign: 'center'
                                }}>OTP Authentication</Text>

                                <Text style={{
                                        fontWeight: '700',
                                        fontSize: 14,
                                        color: COLORS.gray,
                                        marginHorizontal: 3,
                                        marginVertical: SIZES.padding


                                }}>An authentication code has been sent to your mobile {phone}</Text>

                        </View>
                        <OTPInputView
                                style={{ width: '100%', height: 50, marginVertical: SIZES.padding }}
                                pinCount={6}
                                codeInputFieldStyle={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.lightGray2,
                                        color: COLORS.black,
                                        ...FONTS.h2

                                }}

                                onCodeFilled={(code) => {
                                        setcode(code)
                                        console.log(`Code is ${code}, you are good to go!`)
                                }}
                                
                        />
                        <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginVertical: SIZES.padding
                        }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Didn't receive code ?</Text>
                                <TouchableOpacity onPress={againhangller}>
                                        {
                                                timer > 0 ? <Text style={{ fontSize: 15, color: COLORS.orange }}>Resend ({timer}) </Text>
                                                        : <Text style={{ fontSize: 15, color: COLORS.orange }}>Resend</Text>

                                        }
                                </TouchableOpacity>


                        </View>
                        <TouchableOpacity
                                onPress={code ? handller : null}
                                style={{
                                        marginTop: 10,
                                        width: '100%',
                                        height: SIZES.height / 15,
                                        backgroundColor: code ? COLORS.green : COLORS.gray,
                                        padding: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 3,

                                }} >
                                <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        fontFamily: 'Lato-Regular',

                                }}>Verify</Text>
                        </TouchableOpacity>


                </ScrollView>
        );
};

export default OtpScreen;

const styles = StyleSheet.create({
        container: {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                paddingTop: 50
        },
        logo: {
                height: 150,
                width: 150,
                resizeMode: 'cover',
        },
        text: {
                fontFamily: 'Kufam-SemiBoldItalic',
                fontSize: 28,
                marginBottom: 10,
                color: '#051d5f',
        },
        navButton: {
                marginTop: 15,
        },
        forgotButton: {
                marginVertical: 35,
        },
        navButtonText: {
                fontSize: 18,
                fontWeight: '500',
                color: '#2e64e5',
                fontFamily: 'Lato-Regular',
        },
        borderStyleBase: {
                width: 30,
                height: 45
        },

        borderStyleHighLighted: {
                borderColor: "#03DAC6",
        },

        underlineStyleBase: {
                width: 30,
                height: 45,
                borderWidth: 0,
                borderBottomWidth: 1,
        },

        underlineStyleHighLighted: {
                borderColor: "#03DAC6",
        },
});