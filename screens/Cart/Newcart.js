import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Fcon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import Showmore from '../../components/Headercomponment/Showmore'
import CartCard from '../../components/MainComponent/cartcard'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { SwipeListView } from 'react-native-swipe-list-view';
import { removeFromCart } from '../../stores/Shopping/shopping-actions'
import { useDispatch } from 'react-redux'


function Emptyrender()
{
    return(
        <View >
            <Image source={require("../../assets/messages/empty4.gif")}  style={{width:SIZES.width-50,height:SIZES.height/2,marginVertical:25,marginHorizontal:25}} resizeMode="contain" />
        </View>
    )
}

export default function Newcart({navigation}) {
    const destination = useSelector(state => state.address.destination)
    const User = useSelector(state => state.address.accessToken)
    console.log(User)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.shop.cart)
    const subtotal = cart.reduce((a, c) => a + c.qty*c.basePrice, 0) 
    const tax = 0
    const deliverycharge = subtotal> 300 ? 0 : 50
    const grandTotal = subtotal + deliverycharge + tax
    console.log(destination)

    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <View style={{height:SIZES.height-200}}>
            <SwipeListView
            data={cart}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
                        return (
                            <CartCard data={item} index={index} />
                        )}}
            renderHiddenItem={ (data, rowMap) => (
                <View style={{
                    flexDirection: 'row',                   
                    marginBottom: 15,
                    marginHorizontal: 4,
                    borderRadius: 20,
                    height: 60,
                    shadowColor: COLORS.gray,
                    shadowOffset: {
                      height: 3,
                      width: 5,
                    },
                    shadowRadius: 4,
                    shadowOpacity: 0.1,
                    elevation: 4,
                    backgroundColor:COLORS.orange,                   
                   
                    justifyContent:"flex-end"
                }}>
                    <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginRight:25}} onPress={()=>dispatch(removeFromCart(data.item._id))}>                 
                        <Image source={icons.deletecart} style={{height:35,width:35,}} />
                    </TouchableOpacity>
                </View>
            )}
            
            disableRightSwipe={true}
            ListEmptyComponent={Emptyrender}
            
            rightOpenValue={-75}            
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
                                <TouchableOpacity onPress={()=>navigation.pop()} style={{backgroundColor:COLORS.green,height:25,width:25,borderRadius:25}}>
                                <Icon name="arrow-left" size={24 } color={COLORS.white} />
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=>navigation.navigate('AddressScreen')} style={{width:SIZES.width-80,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View style={{flex:1,marginLeft:4}}>
                                    <Fcon name="location" size={24} color='#F5AC92' style={{width:24,marginRight:5}}  />
                                    </View>
                                    <View style={{flex:9,marginHorizontal:4}}>
                                    {
                                        destination ?  <Text  numberOfLines={1}>{destination.description} </Text> :
                                        <Text  numberOfLines={1} style={{fontWeight:'bold'}}>Choose your Address </Text>
                                   
                                   
                                    }
                                    </View>
                                    
                                </TouchableOpacity>
                            
                            

                        </View>
                    </SafeAreaView>
                    {
                        cart.length>0?
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,marginHorizontal:15}}>
                        <Text style={{fontWeight:'bold',fontSize:14}}> {cart.length} Items </Text>
                        <TouchableOpacity  onPress={()=>navigation.navigate('searchScreen',{focus:false})}>
                            <Text style={{color:COLORS.orange,fontWeight:'bold'}}>Add more +</Text>
                        </TouchableOpacity>
                       </View>:<View></View>
                    }
                </>
                
            }
                
            
            />
           
           
            </View>
           <View style={{position:'absolute',bottom:0,backgroundColor:'#fff',right:2,left:2,borderTopWidth:2,borderTopRightRadius:20,borderTopLeftRadius:20,elevation:2,borderColor:COLORS.lightOrange2}}>
                <View>
                   {
                       cart.length>0?
                       <>
                        <View style={{marginHorizontal:15}}>
                        <Text style={{fontWeight:'bold',...FONTS.h3}}>Bill Details</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                            <Text style={{color:COLORS.gray}}>Subtotal</Text>
                            <Text style={{color:COLORS.gray,fontWeight:'bold'}}>Rs {subtotal.toFixed(2)} </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                            <Text style={{color:COLORS.gray}}>Shipping Charges</Text>
                            <Text style={{color:COLORS.gray,fontWeight:'bold'}}>Rs {deliverycharge.toFixed(2)}</Text>
                        </View>
                        
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                            <Text style={{fontWeight:'bold'}}>Grand Total</Text>
                            <Text style={{fontWeight:'bold'}}>Rs {grandTotal.toFixed(2)}</Text>
                        </View>
                       </>:
                       <View></View>
                   }
               </View>
               
                
                
                
                
              {
                  cart.length>0?User?
                  <TouchableOpacity onPress={()=>navigation.navigate('Checkout')} style={{ flexDirection:'row',  backgroundColor:COLORS.blue ,height:45,marginHorizontal:30,marginVertical:20,width:SIZES.width-SIZES.width/4,borderRadius:15,alignItems:"center",justifyContent:'center'}}>
                  <Text style={{color:'#fff',fontWeight:"bold",fontSize:14}}>Proceed to Checkout </Text>
                  <Icon name="arrow-right" size={24} color="#fff" />
                  </TouchableOpacity>
                  : 
                  <TouchableOpacity onPress={()=>navigation.navigate('Mobile')} style={{ flexDirection:'row',  backgroundColor:'#f94144' ,height:45,marginHorizontal:30,marginVertical:20,width:SIZES.width-SIZES.width/4,borderRadius:15,alignItems:"center",justifyContent:'center'}}>
                  <Text style={{color:'#fff',fontWeight:"bold",fontSize:14}}>Proceed to Login </Text>
                  <Icon name="arrow-right" size={24} color="#fff" />
                  </TouchableOpacity>
                  
                  :
                   <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{ flexDirection:'row',  backgroundColor:COLORS.green ,height:45,marginHorizontal:30,marginVertical:20,width:SIZES.width-SIZES.width/4,borderRadius:15,alignItems:"center",justifyContent:'center'}}>
                   <Text style={{color:'#fff',fontWeight:"bold",fontSize:14}}>Proceed to Shop Now </Text>
                   <Icon name="arrow-right" size={24} color="#fff" />
                  </TouchableOpacity>
              }

           </View>

        </View>
    )
}
