import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, Text,  TouchableOpacity,  View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { COLORS, FONTS, SIZES } from '../../constants'
import { addToCart, adjustItemQty, removeFromCart } from '../../stores/Shopping/shopping-actions'

export default function ProductCard3({data}) {
  const navigation=useNavigation()
  const baseweight=data.baseQty
  const maxweight=25  
  const [weight, setweight] = useState(baseweight)
  const [measuremnt, setmeasuremnt] = useState("Kg")
  const [addtocart, setaddtocart] = useState(true)
  const dispatch = useDispatch()
  const percentage=parseInt((data.baseMaxPrice-data.basePrice)*100/data.baseMaxPrice)

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
        elevation: 1,
        marginVertical: 5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        marginHorizontal: 5,
      }}>
      <View
        style={{
          backgroundColor: percentage<25?COLORS.blue:COLORS.green,
          borderRadius: 3,
          borderTopRightRadius: 3,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 12,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 10,
            fontWeight: '700',
            transform: [{rotate: '-90deg'}],
          }}>
           {percentage}% OFF
        </Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Details",{
        data:data
      })}
        style={{
          flex: 2,
          justifyContent: 'center',
          marginHorizontal: 5,
          paddingHorizontal: 5,
        }}>
        <Text style={{fontWeight: 'bold', ...FONTS.h3}}>{data.name}</Text>
        <Text numberOfLines={2} style={{fontSize: 10, color: COLORS.gray}}>
          {data.description}
        </Text>
        {
            data.baseQty<1 ?
            <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
            Rs {data.basePrice*data.baseQty} /<Text style={{color:COLORS.black,fontSize:10,fontWeight:"bold",paddingLeft:2}}> {data.baseQty*1000} gm</Text>
          </Text>:
          <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
          Rs {data.basePrice} /<Text style={{color:COLORS.black,fontSize:10,fontWeight:"bold",paddingLeft:2}}> {data.baseQty} Kg</Text>
        </Text>
         
          }

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

       
        
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Image
          source={{uri:`https://shahbasket.herokuapp.com/${data.image}`}}
          resizeMode="contain"
          style={{height: 80, width: 80, alignSelf: 'center'}}
        />
        {addtocart ? <TouchableOpacity onPress={AddToCart} style={{ width: 60, height: 20, backgroundColor: '#eb416e', borderRadius: 8 ,justifyContent:'center',marginBottom:2}} >
                      <Text style={{ color: COLORS.white, textAlign: 'center', padding: 2, fontSize: 12, fontFamily: '900' }} >ADD+ </Text>
                      </TouchableOpacity>:
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      marginBottom: 4,
                    }}>
                    <TouchableOpacity
                      onPress={ondecriment}
                      style={{
                        backgroundColor: COLORS.red,
                        height: 18,
                        width: 18,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon name="minus" color="#fff" size={16} />
                    </TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: COLORS.lightGray2,
                        width: 50,
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
                        height: 18,
                        width: 18,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon name="plus" color="#fff" size={16} />
                    </TouchableOpacity>
                  </View>
}
      </View>
    </View>
  );
}
