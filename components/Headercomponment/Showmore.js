import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../../constants';

export default function Showmore({onPress,heading,label}) {
  return (
    <View
      style={{
        marginVertical: 15,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: 'bold', ...FONTS.h4}}>{heading}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{color: COLORS.orange, fontWeight: 'bold',}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
