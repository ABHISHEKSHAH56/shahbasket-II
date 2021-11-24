import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'
import Icon from 'react-native-vector-icons/Feather'

export default function SearchComponment({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.search1}>
                        <View style={styles.inputwrapper}>                           
                            <TextInput placeholderTextColor="#afb1b6" editable={false} keyboardType="ascii-capable" placeholder="Where are to deliver?" />
                        </View>
                        <TouchableOpacity onPress={onPress}>
                                <Icon name="search" size={24} style={{marginRight:5}} />
                        </TouchableOpacity>

                        
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    
    search1:{
        marginVertical:10,
        marginHorizontal:10,
        padding:5,
        backgroundColor:COLORS.lightGray2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:15,
        borderColor:'#efeff0',
        borderWidth:2

    },
    inputwrapper:{
        flexDirection:'row',
        alignItems:'center',


    },
    pinkdot:{
        width:10,
        height:10,
        borderRadius:10,
        backgroundColor:'#ff5563',
        marginRight:10

    },
})


