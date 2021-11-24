import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default function Categoreycart()
{
  return (
      <TouchableOpacity style={{height:100,width:SIZES.width/4-16,marginVertical:10,marginHorizontal:2}} >
      <View style={{backgroundColor:'#def6e6',alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Image source={require("../../assets/categorey/p2.png")} style={{height:60,width:60}} resizeMode="cover" />

      </View>
      <Text style={{textAlign:'center',fontWeight:'bold',color:COLORS.gray}}>
          Fruit & Vegetable
      </Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
