// import React, { useEffect, useState } from 'react'
// import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
// import { COLORS, FONTS, icons, SIZES } from '../../constants'
// import { categoreyItem, Mainproduct } from '../../constants/dummyData'
// import CardItem from '../../components/Card'
// import { Appbar, Divider } from 'react-native-paper'
// import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import Logocomponment from '../../components/Headercomponment/Logocomponment'
import SearchComponment from '../../components/Headercomponment/SearchComponment'
import Categoreycard1 from '../../components/MainComponent/Categoreycard1'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, icons, SIZES } from '../../constants'


const cate=[
        {
            id:1,
            name:"All"
        },
        {
            id:2,
            name:"Vegetable"
        },{
            id:3,
            name:"Fruits"
        },{
            id:4,
            name:"Green Veg"
        },{
            id:5,
            name:"Daily Need"
        },
    ]




function renderemptyerror() {
        return (
                <View style={{ marginHorizontal: SIZES.padding, marginVertical: SIZES.padding * 3 }}>
                        <Image source={require("../../assets/messages/search1.gif")} resizeMode='contain' style={{ width: SIZES.width, height: 300 }} />
                </View>
        )
}





export default function Search({ navigation,route }) {
        const [categorey, setcategorey] = useState(route.params.url?route.params.url:"All" )
        const product = useSelector(state => state.shop.products)
        const cart = useSelector(state => state.shop.cart)
        const subtotal = cart.reduce((a, c) => a + c.qty*c.basePrice, 0) 
        const [search, setsearch] = useState('')
        
        





        const filterData = React.useMemo(() => {
                let filterProduct = product;
                if (search) {
                        filterProduct = filterProduct.filter(
                                (item) => item.name.toLowerCase().includes(search.toLowerCase()) ||
                                        item.englishName.toLowerCase().includes(search.toLowerCase())

                        );

                }

                if (categorey !== 'All' ) {

                    if(categorey==="Vegetable")
                    {
                        filterProduct = filterProduct.filter((item)=>item.categorey!=="Fruits");
                    }
                    else{
                        filterProduct = filterProduct.filter((item) => item.categorey === categorey);
                    }
                }
               
                return filterProduct;




        }, [categorey, product, search]);










        





        return (

               <View  style={{backgroundColor:COLORS.white2,flex:1}} >
                   <FlatList 
                    data={filterData}
                    keyExtractor={(item)=>item._id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={renderemptyerror}
                    renderItem={({item})=>{
                        return <ProductCard2 data={item} key={item._id} />

                    }}
                    ListFooterComponent={
                        <View style={{height:100}}>
                            </View>
                    }


                    ListHeaderComponent={
                        <>
                         <SafeAreaView>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            marginTop:20,
                            marginBottom:5,
                            marginHorizontal:10

                            
                            }}>
                            <TouchableWithoutFeedback onPress={()=>navigation.pop()} >
                            <Icon name="arrow-left" size={24 } color={COLORS.gray} />
                            </TouchableWithoutFeedback>                        
                            <View>
                                <Text style={{fontWeight:'bold',textTransform:'uppercase',fontSize:18}}>
                                    Search
                                </Text>
                            </View>
                            <TouchableOpacity>
                            <Icon name="filter" size={24 } color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                        </SafeAreaView>
                        {/* search */}
                        <View style={{
                            marginVertical:10,
                            marginHorizontal:10,
                            padding:5,
                            backgroundColor:COLORS.lightGray2,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            borderRadius:15,
                            borderColor:'#efeff0',
                            borderWidth:2
                        }}>
                            <View style={{
                                 flexDirection:'row',
                                 alignItems:'center',
                            }}>                           
                                <TextInput placeholderTextColor="#afb1b6"
                                    value={search}
                                    keyboardType="ascii-capable"
                                    autoFocus={route.params.focus}
                                    onChange={(e)=>setsearch(e.nativeEvent.text)}                                    
                                    placeholder="Search Anything ......" />
                            </View>
                            <TouchableOpacity >
                                    <Icon name="search" size={24} style={{marginRight:5}} />
                            </TouchableOpacity>                        
                        </View>

                        {/* categorey */}
                        <View style={{marginVertical:5}}>
                                <FlatList
                                    data={cate}
                                    style={{marginVertical:5}}
                                    
                                    keyExtractor={(item,index)=>index+3}
                                    horizontal={true}
                                    renderItem={({item})=>{
                                        return (
                                            <Categoreycard1 categorey={categorey} setcategorey={setcategorey} item={item} />
                                            
                                            )
                                    }}

                                
                                
                                />
                        </View>
                    </>
                        
                    }




                    
                    />
                {
                cart.length>0 ?
                <View style={{ height: 60, position: 'absolute', bottom: 0, backgroundColor: '#7b2cbf', left: 0, right: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
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
                </View>:
                <View></View>
            }    
              
                </View>
            





            















        )
}
