import React, { useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import Share from 'react-native-share'
import files from '../assets/filesBase64';
import { AuthContext } from './AuthProvider';
import { useSelector } from 'react-redux';



export function DrawerContent(props) {
        const { logout } = useContext(AuthContext);
        const Userdetails = useSelector(state => state.address.userData)

        const myCustomShare = async () => {
                const shareOptions = {
                        message: 'Order your next vegetables N Fruits  from ShahBasket  App. I\'ve already ordered  placed more than 10 orders on it. \ get the app now https://abhishekshah.netlify.app/',
                        // url: files.image1,
                        urls: [files.appLogo]
                }

                try {
                        const ShareResponse = await Share.open(shareOptions);
                        console.log(JSON.stringify(ShareResponse));
                } catch (error) {
                        console.log('Error => ', error);
                }
        };




        return (

                <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: COLORS.green, height: 250, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require("../assets/banners/103.png")} style={{ height: 150, width: 150 }} />
                                <Text style={{ color: COLORS.white, fontWeight: '700', ...FONTS.h2 }}>SHAH BASKET</Text>

                        </View>
                        {
                                Userdetails !== null ? <>
                                        <TouchableOpacity style={{ height: 40, marginTop: 10, flexDirection: "row", alignItems: 'center' }} onPress={myCustomShare}>
                                                <Image source={icons.share} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.green, height: 20, width: 20 }} />
                                                <View>
                                                        <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Refer and Earn </Text>
                                                        <Text style={{ fontSize: 12, color: COLORS.gray }}>Earn by refering prople you know </Text>
                                                </View>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: 40, marginTop: 10, flexDirection: "row", alignItems: 'center' }} onPress={() => props.navigation.navigate("Pastorder")}>
                                                <Image source={icons.packet} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.green, height: 20, width: 20 }} />
                                                <View>
                                                        <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Order History </Text>
                                                        <Text style={{ fontSize: 12, color: COLORS.gray }}>Check Your Order Status</Text>
                                                </View>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: 40, marginTop: 10, flexDirection: "row", alignItems: 'center' }} onPress={() => props.navigation.navigate("BottomScreen")}>
                                                <Image source={icons.location} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.green, height: 20, width: 20 }} />
                                                <View>
                                                        <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Update your Address </Text>
                                                        <Text style={{ fontSize: 12, color: COLORS.gray }}>update your profile and address</Text>
                                                </View>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: 40, marginTop: 10, flexDirection: "row", alignItems: 'center' }} onPress={() => props.navigation.navigate("Support")}>
                                                <Image source={icons.support} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.green, height: 20, width: 20 }} />
                                                <View>
                                                        <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Help Center </Text>
                                                        <Text style={{ fontSize: 12, color: COLORS.gray }}>Reach to Support Team </Text>
                                                </View>

                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 0, left: 0, height: 40, marginTop: 2, flexDirection: "row", backgroundColor: COLORS.lightGray2, alignItems: 'center' }} onPress={() => logout()}>
                                                <Image source={icons.logout} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.black, height: 25, width: 25 }} />
                                                <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Log Out</Text>

                                        </TouchableOpacity>
                                </>
                                        : <View>
                                                <TouchableOpacity style={{ height: 40, marginTop: 10, flexDirection: "row", alignItems: 'center' }} onPress={myCustomShare}>
                                                        <Image source={icons.share} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.green, height: 20, width: 20 }} />
                                                        <View>
                                                                <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Refer and Earn </Text>
                                                                <Text style={{ fontSize: 12, color: COLORS.gray }}>Earn by refering prople you know </Text>
                                                        </View>

                                                </TouchableOpacity>



                                                <TouchableOpacity style={{ height: 40, marginTop: 10, flexDirection: "row", alignItems: 'center' }} onPress={() => props.navigation.navigate("Support")}>
                                                        <Image source={icons.support} style={{ marginLeft: SIZES.padding, marginRight: 10, tintColor: COLORS.green, height: 20, width: 20 }} />
                                                        <View>
                                                                <Text style={{ ...FONTS.h3, fontWeight: '600' }}>Help Center </Text>
                                                                <Text style={{ fontSize: 12, color: COLORS.gray }}>Reach to Support Team </Text>
                                                        </View>

                                                </TouchableOpacity>

                                        </View>
                        }

                </View>
        );
}

