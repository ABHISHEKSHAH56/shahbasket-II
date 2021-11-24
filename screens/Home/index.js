import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { SIZES, COLORS, FONTS, icons } from '../../constants'
import { categoreyItem, Mainproduct, productitem } from '../../constants/dummyData'
import CarouselFunction from '../../components/Carousel'
import CardItem from '../../components/Card'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../API/Index'

function renderempty() {
        return (
                <View style={{ marginHorizontal: SIZES.padding, backgroundColor: COLORS.white }}>
                        <Image source={require("../../assets/messages/ordrplaced3.gif")} resizeMode='contain' style={{ width: SIZES.width, height: 350 }} />

                </View>

        )
}






export default function Home({ navigation }) {
        const dispatch = useDispatch()
        const [isloader, setisloader] = useState(true)
        const [categorySelect, setcategorySelect] = useState('All')
        const Userdetails = useSelector(state => state.address.userData)
        useEffect(() => {
                setTimeout(async () => {
                        await fetchProduct().then((res) => {

                                console.log(res.data)
                                const { product } = res.data
                                dispatch({
                                        type: 'FETCH_PRODUCT',
                                        payload: product
                                })
                                setisloader(false)
                                console.log(res.data.data)




                        }).catch((err) => console.log(err.response))

                }, 3000);
        }, [])
        const shop = useSelector(state => state.shop.products)
        const cart = useSelector(state => state.shop.cart)
        const subtotal = cart.reduce((a, c) => {
                if(a==b)
                {
                        a + c.price, 0
                }
        })
        console.log(Userdetails)


        const filterData = React.useMemo(() => {
                let filterProduct = shop;


                if (categorySelect !== 'All') {


                        filterProduct = filterProduct.filter((item) => item.categorey === categorySelect);

                }
                return filterProduct;




        }, [categorySelect, shop]);




        function categorey() {


                return (
                        <FlatList
                                data={categoreyItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                ListFooterComponentStyle={{
                                        marginTop: 20
                                }}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => {
                                        return (
                                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', width: 105, marginRight: 5, marginBottom: SIZES.padding }} onPress={() => setcategorySelect(item.name)} >
                                                        <Image source={item.image} style={{ height: 100, width: 100, borderRadius: 115, paddingVertical: 16, borderBottomWidth: 3, borderColor: COLORS.black }} resizeMode='contain' />


                                                </TouchableOpacity>
                                        )
                                }}


                        />
                )
        }









        function Headers() {
                return (
                        <View style={{ flexDirection: 'row', backgroundColor: 'green', height: 60, justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                                <Image source={icons.menu} style={{ width: 25, height: 25, tintColor: COLORS.white, marginHorizontal: SIZES.padding / 2 }} />
                                        </TouchableOpacity>
                                        <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 15, }}>SHAH BASKET</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate("searchScreen")}>
                                                <Image source={icons.search} style={{ width: 20, height: 20, tintColor: COLORS.white, }} />
                                        </TouchableOpacity>
                                        {
                                                Userdetails === null ? <TouchableOpacity onPress={() => navigation.navigate("Mobile")}>
                                                        <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 15, marginHorizontal: SIZES.padding / 2 }}>LOGIN</Text>
                                                </TouchableOpacity> :
                                                        <TouchableOpacity style={{ marginHorizontal: 15 }} onPress={() => { }}>
                                                                <Image source={icons.delivery} style={{ tintColor: COLORS.white, height: 30, width: 30 }} />
                                                        </TouchableOpacity>
                                        }

                                </View>
                        </View>
                )

        }







        return (
                <>
                        <Headers />
                        {
                                isloader ? <ScrollView
                                        style={{ flex: 1, marginHorizontal: 15 }}
                                        contentContainerStyle={{ alignItems: 'center' }}>
                                        <SkeletonPlaceholder>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                        <View style={{ marginLeft: 20 }}>
                                                                <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                                                                <View
                                                                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                                                                />
                                                        </View>
                                                </View>
                                                <View style={{ marginTop: 10, marginBottom: 30 }}>
                                                        <View style={{ width: 300, height: 20, borderRadius: 4 }} />
                                                        <View
                                                                style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }}
                                                        />
                                                        <View
                                                                style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }}
                                                        />
                                                </View>
                                        </SkeletonPlaceholder>
                                        <SkeletonPlaceholder>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                        <View style={{ marginLeft: 20 }}>
                                                                <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                                                                <View
                                                                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                                                                />
                                                        </View>
                                                </View>
                                                <View style={{ marginTop: 10, marginBottom: 30 }}>
                                                        <View style={{ width: 300, height: 20, borderRadius: 4 }} />
                                                        <View
                                                                style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }}
                                                        />
                                                        <View
                                                                style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }}
                                                        />
                                                </View>
                                        </SkeletonPlaceholder>
                                </ScrollView>
                                        :



                                        <View style={{ flex: 1, backgroundColor: COLORS.white2, borderColor: 'green' }}>
                                                <FlatList
                                                        data={filterData}
                                                        ListEmptyComponent={renderempty}
                                                        ListHeaderComponent={
                                                                <View>


                                                                        <CarouselFunction />
                                                                        <View style={{ margin: 5 }} >
                                                                                <TouchableOpacity onClick={()=>navigation.navigate('Payment')} style={{ ...FONTS.h3, fontWeight: '700', marginLeft: 8 }}>
                                                                                        <Text> Categorey</Text></TouchableOpacity>
                                                                        </View>
                                                                        {categorey()}


                                                                </View>
                                                        }
                                                        keyExtractor={(item, index) => index + 5}
                                                        ListFooterComponent={
                                                                <View>

                                                                        <View style={{ height: 100 }} />
                                                                </View>
                                                        }
                                                        renderItem={({ item }) => {
                                                                return (
                                                                        <CardItem id={item._id}
                                                                                containerStyle={{
                                                                                        height: 150,
                                                                                        marginHorizontal: SIZES.padding,
                                                                                        marginBottom: SIZES.radius
                                                                                }}

                                                                                data={item}
                                                                                onpress={() => { }}

                                                                        />)
                                                        }}
                                                />





                                        </View>
                        }

                        {
                                cart.length > 0 ? <View style={{ height: 50, position: 'absolute', bottom: 0, backgroundColor: COLORS.green, left: 0, right: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 15 }}>
                                                        <Text style={{ color: COLORS.white, fontWeight: '700', }}>{cart.length} ITEM | </Text>
                                                        <Image source={icons.inr} style={{ width: 12, height: 12, tintColor: COLORS.white, marginTop: 5 }} />
                                                        <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 14, marginLeft: 3 }}>{subtotal.toFixed(2)} +  </Text>

                                                </View>
                                                <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 15 }}>
                                                        <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 12 }}>View Cart</Text>
                                                        <Image source={icons.cart} style={{ width: 15, height: 15, tintColor: COLORS.white, marginLeft: 5 }} />
                                                </View>


                                        </TouchableOpacity>
                                </View> : null
                        }
                </>
        )
}
