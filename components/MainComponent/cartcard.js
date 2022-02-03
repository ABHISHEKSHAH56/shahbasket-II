import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';
import { addToCart, adjustItemQty, removeFromCart } from '../../stores/Shopping/shopping-actions';

export default function CartCard({data}) { 
  const baseweight=data.baseQty
  const [weight, setweight] = useState(data.qty)
  const [price, setprice] = useState(data.qty*data.basePrice)
  const [measurment, setmeasurment] = useState('Kg')
  
  const dispatch = useDispatch()
  useEffect(() => {
   setprice(data.qty*data.basePrice)
}, [weight,data])

  

  const onincrement=()=>{
      if(weight<1)
      {
          
          dispatch(adjustItemQty(data._id,weight+0.25)) 
          setweight(weight+0.25)        
          
      }
      else{
          
          dispatch(adjustItemQty(data._id,weight+1)) 
          setweight(weight+1) 
        }
      
  }
  const ondecriment=()=>{
      if(weight==baseweight)
      {
          
          dispatch(removeFromCart(data._id))
         
          
          
      }
      else if(weight<=1)
      {
         
          
          dispatch(adjustItemQty(data._id,weight-0.25)) 
          setweight(weight-0.25) 
         
          

      }
      else{
        
        dispatch(adjustItemQty(data._id,weight-1))
        setweight(weight-1) 
      }
      
     
  }




  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        backgroundColor: '#fff',
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
      }}>
      <View
        style={{
          
          
          
          marginLeft: 15,
          justifyContent:"center",
          marginVertical: 5,borderRadius:60,
          
          
        }}>
        <Image
          source={{uri:data.image}}
          resizeMode="contain"
          style={{height: 40, width: 40, alignSelf: 'center',padding:5 }}
        />
      </View>
      <View style={{flex: 2, justifyContent: 'center', marginHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', ...FONTS.h3}}>{data.name}</Text>
        <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
            Rs {price.toFixed(2)}
          </Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center',marginHorizontal:5}}>
       <View
          style={{
            flexDirection: 'row',
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={ondecriment}
            style={{
              backgroundColor: COLORS.red,
              height: 20,
              width: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="minus" color="#fff" size={20} />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: COLORS.lightGray2,
              width: 70,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginHorizontal: 3,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}> {weight} {measurment}</Text>
          </View>
          <TouchableOpacity
            onPress={onincrement}
            style={{
              backgroundColor: COLORS.green,
              height: 20,
              width: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="plus" color="#fff" size={20} />
          </TouchableOpacity>
          </View>
        
      </View>
    </View>
  );
}
