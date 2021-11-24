import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS } from '../../constants'

export default function TextIconButton({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPostion,
    iconStyle,
    onPress
}) {
    return (
        <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            ...containerStyle
        }} onPress={onPress}>
            {
                iconPostion=="LEFT" && <Image source={icon} style={{...styles.image,...iconStyle}} />
            }
            <Text style={{
                ...FONTS.body3,
                ...labelStyle
            }}>{label}</Text>

            {
                iconPostion=="RIGHT" && <Image source={icon} style={{...styles.image,...iconStyle}} />
            }
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        marginLeft:5,
        width:20,
        height:20,
        tintColor:COLORS.black
    }
})
