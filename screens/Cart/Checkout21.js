import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Fcon from 'react-native-vector-icons/Ionicons'
import Showmore from '../../components/Headercomponment/Showmore'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

export default function Checkout21({navigation}) {
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

          
               <View style={{backgroundColor:'#EAEFF5',marginHorizontal:10}}>
                   
                        <View style={{marginHorizontal:15,marginVertical:15}}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>Payment Method</Text>
                        </View>
                        <TouchableOpacity style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:COLORS.blue,borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16,color:COLORS.white}}>Wallet / UPI</Text>
                            <Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.white}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:"#fff",borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16}}>Net Banking</Text>
                            <Icon name="circle" size={24} color={COLORS.gray}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:"#fff",borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16}}>Credit/ Debit /ATM Card</Text>
                            <Icon name="circle" size={24} color={COLORS.gray}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal:20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',  width:SIZES.width-60,height:90 ,backgroundColor:"#fff",borderRadius:10,marginHorizontal:20,marginVertical:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16}}>Cash on Delivery</Text>
                            <Icon name="circle" size={24} color={COLORS.gray}/>
                        </TouchableOpacity>
                           

                                    


                              
                               

                          
                      
                      

                  

               </View>
            <View style={{position:'absolute',bottom:25,left:0,right:0}}>
            <View style={{  marginHorizontal:5,flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.info}  style={{height:25,width:25}}/>
                    <Text style={{fontWeight:'bold',marginHorizontal:10,fontSize:16}}>Total:</Text>
                    <Text >Rs 96.00</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('OrderTrack')} style={{backgroundColor:COLORS.green,flexDirection:"row",justifyContent:'center',borderRadius:10,width:150,height:40,alignItems:'center'}}>
                    <Text style={{color:COLORS.white,fontWeight:'bold',marginRight:4}}>Place order</Text>
                   <Icon name="arrow-right" color={"#fff"} size={20} />
                </TouchableOpacity>
            </View>
            </View>
            









        </View>
    )
}
