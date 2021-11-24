import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader';
import { Appbar, Button, Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PushProfileAddress } from '../../../API/Index';
import { COLORS, SIZES } from '../../../constants';
import FormInput from '../../AuthScreen/component/FormInput';
import FormInput2 from '../../AuthScreen/component/formInput2';

export default function FormAddress({ navigation }) {
        const dispatch = useDispatch()
        const destination = useSelector(state => state.address.destination)
        const [completeAddress, setcompleteAddress] = useState('')
        const [Name, setname] = useState('')
        const [profileaddress, setprofileaddress] = useState(null)
        const [visible, setVisible] = useState(false);


        /**
         *? Address book me bhi dalni hogi samja so post request 
         */

        const handlleruser = async () => {
                setVisible(true)
                if (completeAddress.length > 4) {
                        setprofileaddress({
                                description: destination.description,
                                location: destination.location,
                                completeAddress: completeAddress

                        })
                        console.log(profileaddress)

                        await PushProfileAddress(profileaddress).then((res) => {
                                dispatch({
                                        type: 'SET_DESTENATION',
                                        payload: { ...destination, name: Name, completeAddress: completeAddress }
                                })
                                setVisible(false)
                                navigation.pop(3)

                        }).catch((err) => {
                                setVisible(false)
                                alert("first you should be login ...")
                                navigation.navigate("Mobile")

                        })

                }


        }


        return (
                <View>
                        <Appbar.Header>
                                <Appbar.BackAction onPress={() => navigation.goBack()} />
                                <Appbar.Content title="Confirm Address" />

                        </Appbar.Header>
                        <AnimatedLoader
                                visible={visible}
                                overlayColor="rgba(255,255,255,0.95)"
                                source={require("../../../assets/messages/tri.json")}
                                animationStyle={{
                                        width: 250,
                                        height: 250
                                }}
                                speed={1}
                        >

                        </AnimatedLoader>

                        <View style={{ marginTop: SIZES.padding * 3 }}>
                                <Text style={{ margin: 5, fontWeight: '700', color: COLORS.black }}>YOUR LOCATION DETECTED</Text>
                                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 5, }}>
                                        <Text numberOfLines={1} style={{ backgroundColor: COLORS.white, height: 40, textAlignVertical: 'center' }}>{destination.description}</Text>
                                        <Divider style={{ borderWidth: 1, borderColor: COLORS.green }} />
                                </View>
                        </View>
                        <View style={{ marginTop: 5, marginHorizontal: 4 }}>
                                <Text style={{ margin: 5, fontWeight: '700', color: COLORS.black }}>NAME *</Text>
                                <FormInput2

                                        onChangeText={(e) => setname(e)}
                                        placeholderText="Name....."
                                        iconType="user"
                                />
                        </View>
                        <View style={{ marginTop: 5, marginHorizontal: 4 }}>
                                <Text style={{ margin: 5, fontWeight: '700', color: COLORS.black }}>COMPLETE ADDRESS*</Text>
                                <FormInput2

                                        onChangeText={(e) => setcompleteAddress(e)}
                                        placeholderText="Floor number, How to reach  "

                                />


                        </View>

                        <View style={{ marginVertical: SIZES.padding * 3, marginHorizontal: SIZES.padding }}>
                                <Button mode="contained" color={completeAddress.length > 4 && Name ? COLORS.green : COLORS.darkGray2} onPress={handlleruser}>
                                        Confirm n Preceed
                                </Button>
                        </View>



                </View>
        )
}
