import React, { useState } from 'react'
import { Image, ScrollView, ScrollViewComponent, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS, SIZES } from '../../../constants'
export default function DetailProduct({route,navigation}) {
    const {data}=route.params
    const [heart, setheart] = useState(false)
    console.log(navigation,route.params.data)
    return (
        <View style={{
            flex:1,
            backgroundColor:'#FFF'
        }}>
           <SafeAreaView style={{
               backgroundColor:'#49c074',
               borderBottomLeftRadius:40,
               borderBottomRightRadius:40,
           }}>
               <View style={{
                   flexDirection:'row',
                   justifyContent:'space-between',
                   padding:20,
                   paddingBottom:50,

               }}>
                   <TouchableOpacity onPress={()=>navigation.pop()}>
                       <Icon style={{color:'#FFFF'}} name="chevron-left" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity  >
                       <Icon name="heart" size={24} />
                    </TouchableOpacity>

               </View>
           </SafeAreaView>

           <View style={{
               backgroundColor:'#ecfbf1',
               marginHorizontal:20,
               paddingVertical:20,
               borderRadius:20,
               marginTop:-30
           }}>
               <Text style={{color:'#00312d',fontFamily:'Montserrat-Bold',fontSize:24,textAlign:'center'}}>{data.name}</Text>
               
               <View style={{
                   alignItems:'center',
                   marginVertical:20

               }}>
                    <Image  source={{uri:`https://shahbasket.herokuapp.com/${data.image}`}}
            style={{height:200, width:200, alignSelf: 'center'}}
          />
                   
               </View>
           </View>
           
           <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20,}} >
                    
                        <View style={{marginVertical:10}} >
                            <Text style={{color:'#00312d',fontSize:18,fontWeight:"bold"}}>Description</Text>
                        </View>
                        
                    <View>
                        <Text numberOfLines={4} style={{color:'#666666',fontSize:16,marginHorizontal:10}}>
                            {data.description}
                        </Text>
                    </View>
                    </ScrollView>
                    <View style={{
               paddingHorizontal:20,
               marginTop:30,
           }}>
                            <View style={{
                                backgroundColor:'#346473',
                                padding:20,
                                borderRadius:20,
                                marginTop:40,
                                shadowColor:'#0000',
                                shadowOffset:{
                                    height:3,
                                    width:0,

                                },
                                shadowRadius:5,
                                shadowOpacity:0.5,
                                elevation:1 

                            }}>
                                <TouchableOpacity>
                                    <Text style={{color:'#fff', textAlign:'center', fontSize:16}}>Add to basket </Text>
                                </TouchableOpacity>
                            </View>
           </View>



        </View>
    )
}

const styles = StyleSheet.create({
    iconsHeader:{

    }
})
