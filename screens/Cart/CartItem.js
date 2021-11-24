import React, { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Divider } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { COLORS, icons, SIZES } from '../../constants'
import { adjustItemQty, removeFromCart } from '../../stores/Shopping/shopping-actions'
import ICON from 'react-native-vector-icons/FontAwesome'

export default function CartItem({ item, index }) {
        const baseqty = item.baseQty
        const baseprice = item.basePrice
        const measurment = ['250 gm', '500 gm', '750 gm', "1 Kg", '2 Kg', '2.5 Kg', '5 Kg', "7.5 Kg", "10 Kg", "12.5 kg ", '15 Kg', '20 Kg', '25 Kg', "30 Kg", '35 Kg', '40 Kg', '45 Kg', "50 Kg"]
        const pricearray = [1, 2, 3, 4, 8, 10, 20, 30, 40, 50, 60, 80, 100, 120, 140, 160, 180, 200]
        const baseindex = measurment.indexOf(baseqty)
        const [cureentIndex, setcurrentIndex] = useState(baseindex)
        const [cureentWeight, setcurrentWeight] = useState(0)
        const [currentprice, setcurrentprice] = useState(0)

        useEffect(() => {
                setcurrentWeight(item.qty)
                setcurrentprice(item.price)
                setcurrentIndex(measurment.indexOf(item.qty))
        }, [currentprice, cureentWeight, item])


        const dispatch = useDispatch()


        const handleminus = () => {
                if (cureentIndex > baseindex) {
                        const cost = baseprice * pricearray[cureentIndex - 1] / pricearray[baseindex]
                        dispatch(adjustItemQty(item._id, measurment[cureentIndex - 1], cost))
                        setcurrentprice(cost)
                        setcurrentWeight(measurment[cureentIndex - 1])
                        setcurrentIndex(cureentIndex - 1)

                }
        }

        const handleplus = () => {
                if (cureentIndex < measurment.length - 1) {
                        const cost = baseprice * pricearray[cureentIndex + 1] / pricearray[baseindex]
                        dispatch(adjustItemQty(item._id, measurment[cureentIndex + 1], cost))
                        setcurrentprice(cost)
                        setcurrentWeight(measurment[cureentIndex + 1])
                        setcurrentIndex(cureentIndex + 1)

                }
        }



        return (
                <View>
                        <Divider />
                        <View style={{ flexDirection: 'row', height: 80, justifyContent: 'space-between', marginHorizontal: 15 }}>
                                <View style={{ width: 20, marginTop: 12 }}>
                                        <Text style={{ color: COLORS.black, fontWeight: '700' }}>#{index + 1}</Text>
                                </View>

                                <View style={{ justifyContent: 'space-evenly', flex: 1 }}>

                                        <Text style={{ fontWeight: '700', color: COLORS.blue, }}>

                                                {item.name}/{item.englishName}</Text>

                                        <View style={{ flexDirection: 'row' }}>
                                                <ICON name='inr' size={20} color={COLORS.gray} />
                                                <Text style={{ fontWeight: '700', textAlignVertical: 'center', marginHorizontal: 2, color: COLORS.gray }}>{currentprice}</Text>

                                        </View>

                                </View>
                                <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => dispatch(removeFromCart(item._id))}>
                                                <Image source={icons.trash} style={{ width: 15, height: 15, tintColor: COLORS.red }} />


                                        </TouchableOpacity>

                                        <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 15, justifyContent: 'space-between', borderColor: COLORS.primary, width: 140, height: 25 }} >
                                                <TouchableOpacity style={{ width: 25, backgroundColor: COLORS.blue, borderBottomLeftRadius: 25, borderTopLeftRadius: 25, }} onPress={handleminus} >
                                                        <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: 15, textAlignVertical: 'center', fontWeight: '700' }}>--</Text>

                                                </TouchableOpacity>
                                                <Text>
                                                        {cureentWeight}
                                                </Text>
                                                <TouchableOpacity style={{ width: 25, borderBottomRightRadius: 25, borderTopRightRadius: 25, backgroundColor: COLORS.green, }} onPress={handleplus} >
                                                        <Text style={{ textAlign: 'center', color: COLORS.white, fontWeight: '700' }}>+</Text>

                                                </TouchableOpacity>


                                        </View>


                                </View>

                        </View>


                        <Divider />
                </View>

        )
}
