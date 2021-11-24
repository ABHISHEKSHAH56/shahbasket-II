import React, { useContext, useState } from 'react';
import {
        View,
        Text,
        TouchableOpacity,
        Image,
        Platform,
        StyleSheet,
        ScrollView,
        TextInput
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import { useDispatch } from 'react-redux';
import { AppVerifyMobile } from '../../API/Index';
import { COLORS, SIZES } from '../../constants';
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from './component/FormButton';
import FormInput from './component/FormInput';

const UserInfo = ({ navigation }) => {
        const [email, setemail] = useState("")
        const [name, setname] = useState("")
        const [visible, setVisible] = useState(false);
        const dispatch = useDispatch()
        const { check } = route.params
        const handellform=async()=>{
                setVisible(true)
                const data={
                        email:email,
                        name:name
                }
                console.log(data)
               await  AppVerifyMobile(data).then((res)=>{
                       dispatch({
                        type: 'SET_USER_DATA',
                        payload: {                
                          userdata: res.data.user
                        }
                      })

                       setVisible(false)
                       if(check) nvaigation.pop(3)
                       navigation.pop()
                      
               }).catch((err)=>console.log(err))
        }

        return (
                <ScrollView showsVerticalScrollIndicator={false} style={{Flex:1}}>
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
                        <View style={{height:SIZES.height/2-25,marginTop:20,justifyContent:"center",alignItems:"center"}}>
                        <Image
                                source={require('../../assets/banners/6.png')}
                                style={styles.logo}
                        />
                        <Text style={{ fontSize: 25, color: COLORS.black, fontWeight: '700', marginVertical: SIZES.padding }}>User Information</Text>
                       
                        </View>
                       <View style={{marginHorizontal:15}}>
                               <Text style={{fontWeight:"bold",fontSize:14,marginBottom:10}}>Name</Text>
                                <TextInput
                                onChangeText={(e)=>setname(e)}
                                value={name} 
                                        style={{
                                                marginHorizontal:5,
                                                paddingHorizontal:5,
                                                backgroundColor:COLORS.white2,
                                                width:SIZES.width-25,
                                                borderRadius:20,
                                                borderBottomWidth:2,
                                                borderColor:COLORS.blue,
                                                borderColor:COLORS.gray,
                                                elevation:1

                                        }}
                                        
                                        />
                                <Text style={{fontWeight:"bold",fontSize:14,marginBottom:10}}>Email</Text>
                                <TextInput 
                                        onChangeText={(e)=>setemail(e)}
                                        value={email}
                                        textContentType={"emailAddress"}
                                        style={{
                                                marginHorizontal:5,
                                                backgroundColor:COLORS.white2,
                                                width:SIZES.width-25,
                                                borderRadius:20,
                                                borderBottomWidth:2,
                                                borderColor:COLORS.gray,
                                                elevation:1

                                        }}
                                        
                                        />        
                        

                       </View>
                        



                        <FormButton
                                buttonTitle="Confirm"
                                onPress={handellform}
                        />







                </ScrollView>
        );
};

export default UserInfo;

const styles = StyleSheet.create({
       
        logo: {
                height: SIZES.height/3,
                width:SIZES.height/3 ,
                resizeMode: 'contain',
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
});