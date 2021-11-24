import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper'
import { COLORS, icons, SIZES } from '../../constants'
import { Linking } from 'react-native'

export default function Support({ navigation }) {
        return (
                <View style={{ backgroundColor: COLORS.white, height: SIZES.height, justifyContent: 'space-between' }}>
                        <Appbar.Header style={{ backgroundColor: COLORS.white }}>
                                <Appbar.BackAction onPress={() => navigation.goBack()} />
                                <Appbar.Content title="Reach The Support Team" />

                        </Appbar.Header>


                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: SIZES.padding * 2 }}>
                                <Image source={icons.support} style={{ width: 100, height: 100, tintColor: COLORS.primary }} />
                                <View>
                                        <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: '700', color: COLORS.black }}>
                                                How can we help you ?
                                        </Text>
                                </View>
                        </View>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:${+918076367467}`)} style={{ borderWidth: 2, borderColor: COLORS.orange, borderRadius: 10, marginHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Image source={icons.phone} style={{ width: 40, height: 40, margin: 5, tintColor: COLORS.green }} />
                                <View>
                                        <Text style={{}}> Call us On Helpline Number</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '700' }}>+918076367467</Text>
                                </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@shahbasket.com')} style={{ bottom: 20, marginVertical: SIZES.padding * 2, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={icons.email} style={{ width: 60, height: 60, tintColor: COLORS.green }} />
                                </View>
                                <View>
                                        <Text style={{ color: COLORS.gray, textAlign: 'center' }}>Send us on email </Text>
                                        <View>
                                                <Text style={{ fontWeight: '700', margin: 3 }}>support@shahbasket.com</Text>
                                        </View>
                                </View>

                        </TouchableOpacity>


                </View >
        )
}
