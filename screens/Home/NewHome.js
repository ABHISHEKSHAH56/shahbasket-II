import React, { useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import Categoreycart from '../../components/card/Categoreycart'
import Maincate from '../../components/card/Maincate'
import PosterCard from '../../components/card/PosterCard'
import Carousel from '../../components/Carousel'
import Logocomponment from '../../components/Headercomponment/Logocomponment'
import SearchComponment from '../../components/Headercomponment/SearchComponment'
import Showmore from '../../components/Headercomponment/Showmore'
import Categoreycard1 from '../../components/MainComponent/Categoreycard1'
import ProductCard1 from '../../components/MainComponent/ProductCard1'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import ProductCard3 from '../../components/MainComponent/ProductCard3'
import { COLORS, FONTS, SIZES,icons } from '../../constants'

const cateitem=[
    {
        id:1,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p1.png'),
        bg:'#79B4B7'
    },
    {
        id:2,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p5.png'),
        bg:'#BEBEF4'
    },{
        id:3,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p4.png'),
        bg:'#B8DFD8'
    },{
        id:4,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p2.png'),
        bg:'#DDDDDD'
    },{
        id:5,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p3.png'),
        bg:'#B980D0'
    },
]




export default function NewHome({navigation}) {
    const loader=useSelector(state => state.address.loader)

    const shop = useSelector(state => state.shop.products)
    var Vegetable=shop.filter((item)=>item.categorey!=="Fruits")
    var fruit=shop.filter((item)=>item.categorey==="Fruits");
   // var filterProduct = shop.filter((item) => item.categorey === categorey);
    console.log(fruit)
   
    const cart = useSelector(state => state.shop.cart)
    const subtotal = cart.reduce((a, c) => a + c.qty*c.basePrice, 0)
    
    function renderloader()
{
    return(
        <View>
            {
                loader ?
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
                                        </SkeletonPlaceholder>:<View>

                                        </View>
            }

        </View>
    )
}
    
    
    return (
        <View style={{backgroundColor:COLORS.white2}}>
            <FlatList
                data={Vegetable}                            
                keyExtractor={(item, index) => index + 5}
                maxToRenderPerBatch={5}
                ListEmptyComponent={renderloader}
                renderItem={({ item }) =>{
                            return(
                                <ProductCard2 data={item} key={item._id} />

                            )}}
                ListHeaderComponent={
                                <View>
                                    <SafeAreaView>
                                        <View style={{
                                            flexDirection:'row',
                                            justifyContent:'space-between',
                                            alignItems:'center',
                                            marginTop:20,
                                            marginBottom:5,
                                            marginHorizontal:10                                      
                                            }}>
                                                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                                         <Logocomponment />
                                                </TouchableOpacity>                                        
                                                <TouchableOpacity>
                                                <Image source={require('../../assets/categorey/user.png')} style={{
                                                    height:50,
                                                    width:50,
                                                    borderRadius:50,
                                                    borderColor:'#000',
                                                    borderWidth:2
                                                }} />
                                                </TouchableOpacity>                 
                                        </View>
                                    </SafeAreaView>
                                  
                            
                                    <SearchComponment  onPress={()=>navigation.navigate('searchScreen',{focus:true})} />
                                    <Showmore onPress={()=>{}} label="Show More" heading="Shop By Categorey" />
                                    <Maincate />
                                    <Showmore onPress={()=>{}} label="Show More" heading="Best Deal" />
                
                                </View>
                    } 
                    
                ListFooterComponent={
                    <>
                        <Carousel />
                        <Showmore onPress={()=>{}} label="Show More" heading="Trendeing" />
                            {/* anewstyle */}
                        <FlatList 
                         data={fruit}
                         keyExtractor={(item)=>item._id}
                         ListEmptyComponent={renderloader}
                         renderItem={({ item }) =>{
                            return(
                                <ProductCard3 data={item} key={item._id} />

                            )}}

                         
                         />        
                        <View style={{marginBottom:100}}></View>
                        
                        
                    </>
                } 
            />    
                
                

                                


                            
                        
                        
                            
                            
                            
                            
            

                    
                
                            
            



                
            {
                cart.length>0 ?<View style={{ height: 50, position: 'absolute', bottom: 0, backgroundColor: '#7b2cbf', left: 0, right: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 15 }}>
                                <Text style={{ color: COLORS.white, fontWeight: '700', }}> {cart.length}  ITEM | </Text>
                                
                                <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 14, marginLeft: 3 }}>Rs {subtotal.toFixed(2)} + </Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 15 }}>
                                <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 12 }}>View Cart</Text>
                                <Image source={icons.cart} style={{ width: 15, height: 15, tintColor: COLORS.white, marginLeft: 5 }} />
                        </View>


                </TouchableOpacity>
            </View>:<View></View>
            }
        </View>
    )}

