import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS, SIZES} from '../../constants';

export default function Categoreycard1({setcategorey,categorey,item}) {
    return (
        <TouchableOpacity style={{
            marginVertical:5,
            height:35,
            minWidth:90,                            
            borderWidth:categorey==item.name?0.5:0,
            backgroundColor:categorey==item.name? '#eb416e':COLORS.white2,
            marginLeft:4,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            elevation:1,
            borderColor:COLORS.gray
            


        }} onPress={()=>setcategorey(item.name)}>
            
            <Text style={{color:categorey==item.name?COLORS.white :COLORS.gray,fontWeight:'bold'}}>{item.name}</Text>
       
            
             </TouchableOpacity>

    )
}
