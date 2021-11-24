import React from 'react'
import { View, Text, Image } from 'react-native'
import { Appbar } from 'react-native-paper'
import { COLORS, SIZES } from '../../constants'
import NotFound from './NotFound'

export default function PastOrders({ navigation }) {
        return (
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                        <Appbar.Header style={{ backgroundColor: COLORS.white }}>
                                <Appbar.BackAction onPress={() => navigation.goBack()} />
                                <Appbar.Content title="Orders" />

                        </Appbar.Header>
                        <NotFound buttontitle="Shop Now" title="Not Found" onPress={() => navigation.navigate("HomeTabs", {
                                screen: "Home"

                        })} />

                </View>

        )
}
