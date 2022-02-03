import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import Icon from 'react-native-vector-icons/Feather'
import Fcon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { OrderInitate } from '../../API/Index'
import Showmore from '../../components/Headercomponment/Showmore'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

export default function Checkout21({navigation}) {
    const [paymentstate, setpaymentstate] = useState('UPI')
    const [visible, setVisible] = useState(false);
    const data = useSelector(state => state.address.orderinitate)
    const orderplacefun=()=>{
        data['paymentoption']=paymentstate=='COD'?"COD":"ONLINEPAY"
        setVisible(true)
        console.log(data.paymentoption)
        OrderInitate(data).then((res)=>{
            console.log(res)
            setVisible(false)
            
        })
    }
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
                        <Icon name="arrow-left" size={24 } />
                        </TouchableOpacity>
                        
                        <View style={{width:SIZES.width-80,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',textAlign:'center',fontSize:18}}>Checkout</Text>
                            
                        </View>
                       
                    

                </View>
            </SafeAreaView>
           <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:20,marginHorizontal:15}}>
              <View style={{flexDirection:'row',}}>
                  <Image source={icons.check_circle}  style={{width:15,height:15,tintColor:COLORS.green}} />
                  <Text style={{marginLeft:2,fontWeight:'bold',fontSize:12}}>Delivery</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                  <Image source={icons.check_circle}  style={{width:15,height:15,tintColor:COLORS.primary}} />
                  <Text style={{marginLeft:2,fontWeight:'bold',fontSize:12,color:COLORS.gray}}>Payment</Text>
              </View>     
              
           </View>
           {/* details */}
           <AnimatedLoader
                                visible={visible}
                                overlayColor="rgba(255,255,255,0.95)"
                                source={require("../../assets/messages/tri.json")}
                                animationStyle={{
                                        width: 250,
                                        height: 250
                                }}
                                speed={1}
                        >

            </AnimatedLoader>


          
               <View style={{backgroundColor:'#EAEFF5',marginHorizontal:10}}>
                   
                        <View style={{marginHorizontal:15,marginVertical:15}}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>Payment Method</Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>setpaymentstate("UPI")}  style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:paymentstate=='UPI'?COLORS.blue:COLORS.white,borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16,color:paymentstate=='UPI'?COLORS.white:COLORS.black}}>UPI</Text>
                            {paymentstate=='UPI' ?<Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.white}} />
                                :<Icon name="circle" size={24} color={COLORS.gray}/>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setpaymentstate("NB")}  style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:paymentstate=='NB'?COLORS.blue:COLORS.white,borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16,color:paymentstate=='NB'?COLORS.white:COLORS.black}}>Net Banking</Text>
                            {paymentstate=='NB' ?<Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.white}} />
                                :<Icon name="circle" size={24} color={COLORS.gray}/>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setpaymentstate("ATM")} style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:paymentstate=='ATM'?COLORS.blue:COLORS.white,borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16,color:paymentstate=='ATM'?COLORS.white:COLORS.black}}>Credit/ Debit /ATM Card</Text>
                            {paymentstate=='ATM' ?<Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.white}} />
                                :<Icon name="circle" size={24} color={COLORS.gray}/>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setpaymentstate("COD")} style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:paymentstate=='COD'?COLORS.blue:COLORS.white,borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16,color:paymentstate=='COD'?COLORS.white:COLORS.black}}>Cash on Delivery</Text>
                            {paymentstate=='COD' ?<Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.white}} />
                                :<Icon name="circle" size={24} color={COLORS.gray}/>
                            }
                        </TouchableOpacity>
                           

                                    


                              
                               

                          
                      
                      

                  

               </View>
            <View style={{position:'absolute',bottom:25,left:0,right:0}}>
            <View style={{  marginHorizontal:5,flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.info}  style={{height:25,width:25}}/>
                    <Text style={{fontWeight:'bold',marginHorizontal:10,fontSize:16}}>Total:</Text>
                    <Text >Rs 96.00</Text>
                </View>
                <TouchableOpacity onPress={orderplacefun} style={{backgroundColor:COLORS.green,flexDirection:"row",justifyContent:'center',borderRadius:10,width:150,height:40,alignItems:'center'}}>
                    <Text style={{color:COLORS.white,fontWeight:'bold',marginRight:4}}>Place order</Text>
                   <Icon name="arrow-right" color={"#fff"} size={20} />
                </TouchableOpacity>
            </View>
            </View>
            









        </View>
    )
}
