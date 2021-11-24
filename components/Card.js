import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, adjustItemQty, removeFromCart } from '../stores/Shopping/shopping-actions'

export default function CardItem({ data, containerStyle, onpress }) {
  console.log(data._id)

  const baseqty = data.baseQty
  const baseprice = data.basePrice
  const measurment = ['250 gm', '500 gm', '750 gm', "1 Kg", '2 Kg', '2.5 Kg', '5 Kg', "7.5 Kg", "10 Kg", "12.5 kg ", '15 Kg', '20 Kg', '25 Kg', "30 Kg", '35 Kg', '40 Kg', '45 Kg', "50 Kg"]
  const pricearray = [1, 2, 3, 4, 8, 10, 20, 30, 40, 50, 60, 80, 100, 120, 140, 160, 180, 200]
  const baseindex = measurment.indexOf(baseqty)
  const [cureentIndex, setcurrentIndex] = useState(baseindex)
  const [cureentWeight, setcurrentWeight] = useState(baseqty)
  const [currentprice, setcurrentprice] = useState(baseprice)


  useEffect(() => {
    if (data.isCart === undefined) {
      setclick(false)
    }
    else if (data.isCart) setclick(true)
    setcurrentWeight(data.qty)
    setcurrentprice(data.price)
    setcurrentIndex(measurment.indexOf(data.qty))
    if (!data.isCart) setclick(false)
  }, [currentprice, cureentWeight, data])

  const dispatch = useDispatch()
  const [click, setclick] = useState(false)
  const carthandller = () => {
    if (!click) {
      dispatch(addToCart(data._id))
      setclick(true)
    }
    else {
      dispatch(removeFromCart(data._id))
      setcurrentprice(baseprice)
      setcurrentIndex(baseindex)
      setclick(false)
    }

  }















  const handleminus = () => {
    if (cureentIndex > baseindex) {
      const cost = baseprice * pricearray[cureentIndex - 1] / pricearray[baseindex]
       
      setcurrentprice(cost)
      setcurrentWeight(measurment[cureentIndex - 1])
      setcurrentIndex(cureentIndex - 1)

    }
  }

  const handleplus = () => {
    if (cureentIndex < measurment.length - 1) {
      const cost = baseprice * pricearray[cureentIndex + 1] / pricearray[baseindex]
      dispatch(adjustItemQty(data._id, measurment[cureentIndex + 1], cost))
      setcurrentprice(cost)
      setcurrentWeight(measurment[cureentIndex + 1])
      setcurrentIndex(cureentIndex + 1)
    }


  }





  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        elevation: 3,
        marginVertical: 5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,

      }}
      onPress={onpress}

    >
      <View style={{ position: 'absolute', top: 5, left: 15, backgroundColor: data.tag === 'Fresh' ? COLORS.green : COLORS.blue, borderRadius: 3, borderTopRightRadius: 3 }}>
        <Text style={{ color: COLORS.white, fontSize: 10, padding: 2, fontWeight: '700' }}>{data.tag}</Text>
      </View>
      <View style={{ flex: 3, justifyContent: 'flex-start', marginTop: 30, marginLeft: 5 }}>
        <Text style={{ fontWeight: '700', fontSize: 17, marginHorizontal: 4 }}>{data.name}</Text>
        <Text numberOfLines={2} style={{ fontWeight: '500', marginHorizontal: 4, color: COLORS.gray, fontSize: 12 }}>{data.description} </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ margin: 2, color: COLORS.black, fontSize: 14 }}>Quantity: </Text>
          {
            !click ? <View style={{ margin: 2, width: 60, borderWidth: 1, borderColor: COLORS.blue, borderRadius: 4 }}>


              <Text style={{ textAlign: 'center' }} >{data.baseQty}</Text>

            </View> : <View style={{ flexDirection: 'row', borderWidth: 1, justifyContent: 'space-between', borderColor: COLORS.primary, width: 120, height: 25, borderRadius: 5 }} >
              <TouchableOpacity style={{ width: 20, backgroundColor: COLORS.blue, }} onPress={handleminus} >
                <Text style={{ textAlign: 'center', color: COLORS.white }}>-</Text>

              </TouchableOpacity>
              <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>
                {cureentWeight}
              </Text>
              <TouchableOpacity style={{ width: 20, backgroundColor: COLORS.green, }} onPress={handleplus} >
                <Text style={{ textAlign: 'center', color: COLORS.white }}>+</Text>

              </TouchableOpacity>


            </View>
          }


        </View>

        <View style={{ flexDirection: 'row', margin: 2 }}>
          <Text style={{ marginRight: 10 }}>Price:</Text>

          <Image source={icons.inr} style={{ height: 15, width: 15, marginTop: 4 }} />
          {
            click ? <Text style={{ fontWeight: '700' }}>{currentprice}</Text> : <Text style={{ fontWeight: '700' }}>{baseprice}</Text>
          }
        </View>

      </View>


      <View style={{}}>
        <Image source={{ uri: data.image }} style={{ height: 100, width: 100, margin: 4, marginTop: 10 }} resizeMode='contain' />
      </View>
      <View style={{ position: 'absolute', bottom: 3, right: 20, borderRadius: 3, borderTopRightRadius: 3 }}>

        <TouchableOpacity onPress={carthandller} style={{ width: 60, height: 25, backgroundColor: click ? COLORS.gray : '#eb416e', borderRadius: 8 }} >
          {
            click ? <Text style={{ color: COLORS.white, textAlign: 'center', padding: 2, fontSize: 12, fontFamily: '900' }} >Remove</Text> :
              <Text style={{ color: COLORS.white, textAlign: 'center', padding: 2, fontSize: 12, fontFamily: '900' }} >ADD+ </Text>



          }
        </TouchableOpacity>

      </View>



    </View>
  )
}
