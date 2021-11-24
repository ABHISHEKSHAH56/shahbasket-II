import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS } from '../../constants'

export default function TextButton({
    containerStyle,
    label,
    labelStyle,
    
    onPress
}) {
    return (
        <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            ...containerStyle
        }} onPress={onPress} >
           
            <Text style={{
                ...FONTS.body3,
                ...labelStyle
            }}>{label}</Text>

            
            
        </TouchableOpacity>
    )
}


