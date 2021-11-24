import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { SIZES,COLORS } from '../../constants'
import { categoreyItem } from '../../constants/dummyData'

export default function Maincate() {
        const navigation=useNavigation()
    return(
        <FlatList
                            data={categoreyItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ListFooterComponentStyle={{
                                    marginTop: 20
                            }}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                    return (
                                            <TouchableOpacity onPress={()=>navigation.navigate("searchScreen",{
                                                    url:item.name
                                            })} style={{ flex: 1, alignItems: 'center', width: 105, marginRight: 5, marginBottom: SIZES.padding }}  >
                                                    <Image source={item.image} style={{ height: 100, width: 100, borderRadius: 115, paddingVertical: 16, borderBottomWidth: 3, borderColor: COLORS.black }} resizeMode='contain' />


                                            </TouchableOpacity>
                                    )
                            }}


                    />
    )
    

    
}
