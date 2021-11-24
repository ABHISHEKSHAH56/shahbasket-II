import React from 'react'
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default function OrderSuccessPage({ navigation }) {
        useEffect(() => {
                setTimeout(() => {
                        navigation.navigate("Home")


                }, 4000);


        }, [])
        return (
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                        <Image source={require("../../assets/messages/ordrplaced.gif")} resizeMode="contain" style={{ marginHorizontal: SIZES.padding, marginVertical: SIZES.padding, width: SIZES.width - 25 }} />
                </View>
        )
}
