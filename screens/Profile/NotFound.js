import React from 'react'
import { View, Text, Image } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import { COLORS, SIZES } from '../../constants'

export default function NotFound({ onPress, buttontitle, title }) {
        return (
                <View style={{ marginTop: 5, backgroundColor: COLORS.white, height: SIZES.height - SIZES.height / 4 + 25, justifyContent: 'space-between' }}>

                        <View style={{ marginHorizontal: SIZES.padding }} >
                                <Image resizeMode="contain" source={require("../../assets/badiya/animation.gif")} style={{ width: SIZES.width - 50, height: SIZES.height - SIZES.height / 2 }} />
                        </View>
                        <View style={{ marginHorizontal: SIZES.padding, flexDirection: 'column', justifyContent: 'space-around', }}>
                                <Text style={{ color: COLORS.black, fontSize: 20, textAlign: 'center', fontWeight: '700' }}> {title}</Text>

                        </View>
                        <View style={{ marginHorizontal: SIZES.padding, marginBottom: 50 }}>
                                <Button mode="contained" color={COLORS.green} onPress={onPress}>
                                        {buttontitle}
                                </Button>
                        </View>
                </View>
        )
}
