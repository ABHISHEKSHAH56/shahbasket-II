import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../constants'

export default function Logocomponment() {
    return (
        <View>
                        <View style={{marginHorizontal:5}}>
                            <Text style={{fontSize:30,fontWeight:'bold'}}>Shah<Text style={{color:COLORS.green}}>Basket</Text></Text>
                            <Text style={{fontWeight:'bold',fontSize:11,marginHorizontal:12}}>True text never Die </Text>
                        </View>
            </View>
    )
}
