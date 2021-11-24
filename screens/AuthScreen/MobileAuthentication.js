import React, { useContext, useState } from 'react';
import {
        View,
        Text,
        TouchableOpacity,
        Image,
        Platform,
        StyleSheet,
        ScrollView
} from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from './component/FormButton';
import FormInput from './component/FormInput';
import SocialButton from './component/SocialButton';
import auth from "@react-native-firebase/auth"
import { useDispatch } from 'react-redux';

const MobileAuthenticationScreen = ({ navigation }) => {
        const [phone, setphone] = useState('');
        const dispatch = useDispatch()
        const handel = async() => {
                if (phone && phone.length > 9) {
                        const x = '+91' + phone                        
                        navigation.navigate('OtpVerify', {
                                phone: x,
                        })

                        
                }
                else {
                        alert("number must be 10 digit")
                }
        }

        return (
                <ScrollView contentContainerStyle={styles.container}>
                        <Image
                                source={require('../../assets/banners/6.png')}
                                style={styles.logo}
                        />
                        <Text style={{ fontSize: 25, color: COLORS.black, fontWeight: '700', marginVertical: SIZES.padding }}>Mobile Authentication</Text>

                        <FormInput
                                labelValue={phone}
                                onChangeText={(phone) => setphone(phone)}
                                placeholderText="Mobile Number"
                                iconType="phone"
                                keyboardType="numeric"
                        />



                        <TouchableOpacity onPress={handel} style={{marginHorizontal:25,marginVertical:25,backgroundColor:COLORS.blue,borderRadius:30,height:50,width:SIZES.width-60,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:COLORS.white,fontWeight:"bold"}}>Confirm</Text>
                        </TouchableOpacity>







                </ScrollView>
        );
};

export default MobileAuthenticationScreen;

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
});