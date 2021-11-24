import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

export default function Checkout({navigation}) {
    const cart = useSelector(state => state.shop.cart)
    const destination = useSelector(state => state.address.destination)
    const subtotal = cart.reduce((a, c) => a + c.qty*c.basePrice, 0) 
    const tax = 0
    const deliverycharge = subtotal> 300 ? 0 : 50
    const grandTotal = subtotal + deliverycharge + tax
    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
           <SafeAreaView>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:20,
                    marginBottom:5,
                    marginHorizontal:10

                    
                    }}>
                        <TouchableOpacity onPress={()=>navigation.pop()} style={{height:25,width:25,borderRadius:25}}>
                        <Icon name="arrow-left" size={24 }  />
                        </TouchableOpacity>
                        
                        <View style={{width:SIZES.width-80,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',textAlign:'center',fontSize:18}}>Checkout</Text>
                            
                        </View>
                       
                    

                </View>
            </SafeAreaView>
           <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:20,marginHorizontal:15}}>
              <View style={{flexDirection:'row',}}>
                  <Image source={icons.check_circle}  style={{width:15,height:15,tintColor:COLORS.primary}} />
                  <Text style={{marginLeft:2,fontWeight:'bold',fontSize:12}}>Delivery</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                  <Image source={icons.check_circle}  style={{width:15,height:15,tintColor:COLORS.gray}} />
                  <Text style={{marginLeft:2,fontWeight:'bold',fontSize:12,color:COLORS.gray}}>Payment</Text>
              </View>     
              
           </View>
           {/* details */}

          
               <View style={{height:SIZES.height-200,backgroundColor:'#EAEFF5',marginHorizontal:10}}>
                   <ScrollView showsVerticalScrollIndicator={false}>
                       <View style={{marginVertical:15}}>
                           <View style={{marginHorizontal:15,}}>
                               <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>Delivery Address</Text>
                           </View>
                           <View style={{marginHorizontal:10,marginTop:10,flexDirection:"row"}}>
                                <TouchableOpacity onPress={()=>navigation.navigate("AddressScreen")} style={{
                                    height:120,
                                    width:40,
                                    backgroundColor:'#fff',
                                    borderRadius:15,
                                    elevation:2 ,
                                   
                                    justifyContent:'center',
                                    alignItems:"center"                              
                                    
                                }}>                                   
                                   <Icon name='plus' size={35} color={COLORS.blue} />                                      
                                </TouchableOpacity>
                                <View style={{
                                    height:120,
                                    width:SIZES.width-100,
                                    marginHorizontal:25,
                                    backgroundColor:'#fff',
                                    borderRadius:15,
                                    elevation:2,
                                    justifyContent:'space-around'
                                    
                                    
                                }}>
                                    <View style={{paddingHorizontal:15,paddingTop:15}}>
                                     <Text style={{overflow:'hidden',color:COLORS.black,fontSize:14}} >{destination.description}</Text>
                                    </View>

                                    <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}>
                                        <Text style={{paddingRight:4,fontSize:12,color:COLORS.gray}}>Delivery Address</Text>
                                        <Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.green}} />


                                    </View>


                               </View>
                               {/* add address */}
                               


                           </View>


                          
                       </View>


                       {/* user details */}
                       <View style={{marginVertical:15}}>
                           <View style={{marginHorizontal:15,marginBottom:5,flexDirection:"row",justifyContent:"space-between"}}>
                               <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>User Details</Text>
                               <TouchableOpacity>
                               <Text style={{fontWeight:'bold',fontSize:12,color:COLORS.black}}>Change</Text>
                               </TouchableOpacity>
                           </View>
                           <View style={{backgroundColor:"#fff",marginHorizontal:10,borderRadius:15}}>
                               <View style={{flexDirection:"row",marginTop:10,marginHorizontal:10,}}>
                                   <Text style={{marginHorizontal:5,fontWeight:"bold",fontSize:16}}>Name :</Text>
                                   <Text style={{marginHorizontal:5,fontSize:16,color:COLORS.darkGray}}>Abhishek Shah</Text>
                               </View>
                               <View style={{flexDirection:"row",marginVertical:10,marginHorizontal:10,}}>
                                   <Text style={{marginHorizontal:5,fontWeight:"bold",fontSize:16}}>Phone :</Text>
                                   <Text style={{marginHorizontal:5,fontSize:16,color:COLORS.darkGray}}>+91 8076367467</Text>
                               </View>

                            </View>
                        </View>   
                       

                       {/* ordersummary */}
                       <View style={{marginVertical:15}}>
                           <View style={{marginHorizontal:15,marginBottom:5}}>
                               <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>Order Summary</Text>
                           </View>
                           
                            
                            {/* items */}
                            {
                                cart.map((item)=>{
                                    const cost=item.basePrice*item.qty
                                    return(
                                        <View key={item._id}>
                                            <View style={{marginHorizontal:25,height:1,borderWidth:1,borderRadius:10,borderColor:"#fff"}}></View>
                                            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:15,marginVertical:10}}>
                                            <Text style={{flex:2,fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                                            <Text style={{flex:1.5,marginRight:4}}>Qty: {item.qty} Kg</Text>
                                            <Text style={{flex:1}}>Rs {cost.toFixed(2)} </Text>
                                            </View>
                                            
                                    
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <Text ellipsizeMode="clip" style={{fontWeight:"bold",marginHorizontal:15}} numberOfLines={1}>
                             - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                             - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
    </Text>
                       <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:5}}>
                           <View style={{paddingHorizontal:5,flex:2,alignItems:"flex-end"}}>
                             <Text style={{fontWeight:"bold",fontSize:16}} >Subtotal</Text>
                            </View>
                            <View style={{marginRight:15,paddingHorizontal:15,flex:1,alignItems:"flex-end"}}>
                             <Text>Rs {subtotal.toFixed(2)} </Text>
                            </View>                     
                            
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:5}}>
                           <View style={{paddingHorizontal:5,flex:2,alignItems:"flex-end"}}>
                             <Text style={{fontWeight:"bold",fontSize:16}} >Deliverycharge</Text>
                            </View>
                            <View style={{marginRight:15,paddingHorizontal:15,flex:1,alignItems:"flex-end"}}>
                             <Text>Rs {deliverycharge.toFixed(2)} </Text>
                            </View>                     
                            
                        </View>
                    </ScrollView>
               </View>
            <View style={{marginHorizontal:5,flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.info}  style={{height:25,width:25}}/>
                    <Text style={{fontWeight:'bold',marginHorizontal:10,fontSize:16}}>Total:</Text>
                    <Text >Rs {grandTotal.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Payment')} style={{backgroundColor:COLORS.blue,flexDirection:"row",justifyContent:'center',borderRadius:10,width:120,height:40,alignItems:'center'}}>
                    <Text style={{color:COLORS.white,fontWeight:'bold',marginRight:4}}>CONFIRM</Text>
                    <Image source={icons.check_circle} style={{height:20,width:20,tintColor:COLORS.white}}/>
                </TouchableOpacity>
            </View>
            









        </View>
    )
}
