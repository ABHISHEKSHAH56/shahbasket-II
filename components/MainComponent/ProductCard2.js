import { useNavigation } from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';
import { addToCart, adjustItemQty, removeFromCart } from '../../stores/Shopping/shopping-actions';

export default function ProductCard2({data}) {  
  const baseweight=data.baseQty
  const navigation=useNavigation()
  const maxweight=25  
  const [weight, setweight] = useState(baseweight)
  const [measuremnt, setmeasuremnt] = useState("Kg")
  const [addtocart, setaddtocart] = useState(true)
  const dispatch = useDispatch()
  
  


  useEffect(() => {
    if (data.isCart === undefined) {
      setaddtocart(true)
    }
    else if (data.isCart) setaddtocart(false)
    setweight(data.qty)
    if (!data.isCart) setaddtocart(true)
  }, [data])

  const AddToCart=()=>{
      setaddtocart(false)
      dispatch(addToCart(data._id))
      


  }

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
          setaddtocart(true)
          
          
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
        marginBottom: 20,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        borderRadius: 20,
        height: 100,
        shadowColor: COLORS.gray,
        shadowOffset: {
          height: 3,
          width: 5,
        },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 4,
      }}>
      <TouchableOpacity  onPress={()=>navigation.navigate("Details",{data:data})}
        style={{
          flex: 1.2,
          
          borderRadius: 10,
          marginLeft: 5,
          marginVertical: 5,
        }}>
        <Image
          source={{uri:`https://shahbasket.herokuapp.com/${data.image}`}}
          resizeMode="contain"
          style={{height: 80, width: 80, alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Details",{data:data})} style={{flex: 2, justifyContent: 'center', marginHorizontal: 10}}>
        <Text style={{fontWeight: 'bold', ...FONTS.h3}}>{data.name}</Text>
        <Text numberOfLines={2} style={{fontSize: 10, color: COLORS.gray}}>
         {data.description}
        </Text>
      </TouchableOpacity>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <View>
          {
            data.baseQty<1 ?
            <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
            Rs {data.basePrice*data.baseQty} /<Text style={{color:COLORS.black,fontSize:10,fontWeight:"bold",paddingLeft:2}}> {data.baseQty*1000} gm</Text>
          </Text>:
          <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
          Rs {data.basePrice} /<Text style={{color:COLORS.black,fontSize:10,fontWeight:"bold",paddingLeft:2}}> {data.baseQty} Kg</Text>
        </Text>
         
          }
          <View style={{flexDirection: 'row'}}>
            {
              data.baseQty<1?<Text
              style={{
                fontSize: 10,
                color: COLORS.gray,
                textDecorationLine: 'line-through',
              }}>
              Rs {data.baseMaxPrice*data.baseQty}/{data.baseQty*1000}gm{' '}
            </Text>:<Text
              style={{
                fontSize: 10,
                color: COLORS.gray,
                textDecorationLine: 'line-through',
              }}>
              Rs {data.baseMaxPrice}.00/Kg{' '}
            </Text>
            }
            <Text
              style={{
                marginLeft: 4,
                color: COLORS.green,
                fontWeight: '700',
                fontSize: 10,
              }}>
              {parseInt((data.baseMaxPrice-data.basePrice)*100/data.baseMaxPrice)}% OFF
            </Text>
          </View>
        </View>
        {
          addtocart ?
          <TouchableOpacity onPress={AddToCart} style={{alignSelf:'center' ,backgroundColor:COLORS.green,height:25,width:55,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10}} >
          <Text style={{fontWeight:'bold',color:'#fff',paddingVertical:2}}>Add</Text>     
          </TouchableOpacity>:
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
           {
             weight<1? <Text style={{fontWeight: 'bold', fontSize: 12}}> {weight*1000} Gm</Text>:
             <Text style={{fontWeight: 'bold', fontSize: 12}}> {weight} {measuremnt}</Text>
           }
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
        }
      </View>
    </View>
  );
}
