import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { TextButton, TextIconButton } from '../../../components'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'


const track_order_status = [
    {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received"
    },
    {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared"
    },
    {
        id: 3,
        title: "Delivery in Progress",
        sub_title: "Hang on! Your food is on the way"
    },
    {
        id: 4,
        title: "Delivered",
        sub_title: "Enjoy your meal!"
    },
    {
        id: 5,
        title: "Rate Us",
        sub_title: "Help us improve our service"
    }
]






export default function Deliverypage({navigation}) {
    const [currentStep, setcurrentStep] = useState(2)
     function renderHeder()
     {
         return(
             <SafeAreaView >
                 <Text style={{fontWeight:'bold',fontSize:18,margin:20,textAlign:'center'}}>DELIVERY STATUS</Text>
             </SafeAreaView>
         )
     }
    return (
        <View style={{
            flex:1,
            paddingHorizontal:SIZES.padding,
            backgroundColor:COLORS.white
        }}>
            {/* header */}
            {renderHeder()}
            {/* info */}
            <View style={{
                marginTop:SIZES.padding,
                paddingHorizontal:SIZES.padding
            }}>
                <Text style={{
                    textAlign:'center',color:COLORS.gray,...FONTS.body4
                }}>Estimated Delivery</Text>
                <Text style={{
                    textAlign:'center',...FONTS.h3,fontWeight:'bold'
                }}>21 Sept 2021</Text>

            </View>

            {/* deliveryinfo */}

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{
                    marginTop:SIZES.padding,
                    paddingVertical:SIZES.padding,
                    borderRadius:SIZES.radius,
                    borderWidth:2,
                    borderColor:COLORS.lightGray2,
                    backgroundColor:COLORS.white2
                }}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:"space-between",
                        alignItems:'center',
                        marginBottom:20,
                        paddingHorizontal:SIZES.padding
                    }}>
                        <Text style={{...FONTS.h3,fontWeight:'bold'}}>Track Order</Text>
                        <Text style={{color:COLORS.gray,...FONTS.body3}}>NYONHDHD</Text>
                        </View>


                        {/* linedivder */}
                        <View style={{height:2,backgroundColor:COLORS.gray}} />

                        {/* status */}
                        <View style={{
                            marginTop:SIZES.padding,
                            paddingHorizontal:SIZES.padding
                        }}>
                            {track_order_status.map((item,index)=>{
                                return(
                                    <View key={`Statuslist-${index}`}>
                                        <View style={{
                                            flexDirection:'row',
                                            alignItems:'center',
                                            marginVertical:-5,
            
                                        }}>
                                        <Image source={icons.check_circle} style={{
                                            width:40,
                                            height:40,
                                            tintColor:index<=currentStep?COLORS.primary :COLORS.lightGray1
                                        }} />
                                        <View style={{marginLeft:SIZES.radius}}>
                                            <Text style={{...FONTS.h3,fontWeight:'bold'}}>{item.title}</Text>
                                            <Text style={{color:COLORS.gray,...FONTS.body4}}>{item.sub_title}</Text>
        
                                        </View>
                                        </View>
                                        {
                                            index < track_order_status.length - 1 &&
                                             <View>
                                                 {
                                                     index<currentStep && <View
                                                     style={{
                                                        height:40,
                                                        width:3,
                                                        marginLeft:18,
                                                        backgroundColor:COLORS.primary,
                                                        zIndex:-1
                                                    }}
                                                     
                                                     />
                                                 }
                                                {
                                                    index >= currentStep && <Image
                                                    source={icons.dotted_line}
                                                    resizeMode="cover"
                                                    style={{
                                                        width:4,
                                                        height:40,
                                                        marginLeft:17
                                                    }}
                                                    
                                                    />
                                           
                                                }
                                            
                                            
                                            </View>
                                        }
                                        
        
                                    </View>
                                  

                                )
                            })}
                            

                        </View>


                </View>

            </ScrollView>
            {/* footer */}

            <View style={{
                marginTop:SIZES.radius,
                marginBottom:SIZES.padding
            }}>
                {
                    currentStep <track_order_status.length-1 && <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        height:60
                    }}>
                        {/* button */}
                        <TextButton
                        label="Cancel"
                        labelStyle={{
                            color:COLORS.primary,
                            fontWeight:'bold',padding:2
                        }}
                        onPress={()=>navigation.pop()}
                        containerStyle={{
                            backgroundColor:COLORS.lightGray2,                            
                            borderRadius:SIZES.base,
                            width:120,
                            height:60
                        }}

                            
                        
                        />
                        <TextIconButton
                        containerStyle={{
                            flex:1,
                            marginLeft:SIZES.radius,
                            borderRadius:SIZES.base,
                            backgroundColor:COLORS.orange,
                            width:150,
                            height:60
                        }}
                        label="Map View"
                        labelStyle={{
                            color:COLORS.white,
                            ...FONTS.h3,fontWeight:'bold',padding:2
                        }}
                        icon={icons.map}
                        iconStyle={{
                            width:25,
                            height:25,
                            marginRight:SIZES.base,
                            tintColor:COLORS.white
                        }}
                        iconPostion="LEFT"
                        onPress={()=>navigation.navigate("Home")}
                        
                        
                        />

                    </View>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
