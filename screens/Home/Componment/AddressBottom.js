// import React, { useEffect, useState } from 'react'
// import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
// import Animated from 'react-native-reanimated';
// import ICONS from 'react-native-vector-icons/FontAwesome5'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 import { GOOGLE_API_KEY } from "@env"
 import Geolocation from '@react-native-community/geolocation'
 import Geocoder from 'react-native-geocoding';
// import BottomSheet from 'reanimated-bottom-sheet';
 import { FONTS, icons, COLORS, SIZES } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';


import React from 'react'
import { StyleSheet, Text, View,Image,Alert } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'





export default function AddressBottom({ navigation }) {
     const dispatch = useDispatch() 
    const getcurrentlocation = () => {
        Geolocation.getCurrentPosition(info => {
                Geocoder.init(GOOGLE_API_KEY, { language: "en" });
                Geocoder.from(info.coords.latitude, info.coords.longitude).then(json => {

                        dispatch({
                                type: 'SET_DESTENATION',
                                payload: {
                                        location: {
                                                lat: info.coords.latitude,
                                                lng: info.coords.longitude

                                        },
                                        description: json.results[0].formatted_address
                                }



                        })
                        navigation.navigate('MapScreen')

                })
        },
                error => { Alert.alert(error.message, "Turn on Your Location or Type manually") },
                {
                        enableHighAccuracy: false,
                        timeout: 2000,
                        maximumAge: 3600000
                }


        )}
    return (
        <View style={styles.container} >
            <SafeAreaView>
                <View style={styles.card}>
                    <View style={styles.drop}>
                        <Text style={styles.dropText}> Drop Address</Text>
                        <TouchableOpacity onPress={()=>navigation.pop()}>
                            <Feather name="x" size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                         <GooglePlacesAutocomplete
                                                renderRightButton={() => {
                                                        return (
                                                                <View style={styles.inputwrapper}>
                                                                    <Feather name="search" size={24} style={{marginRight:10}} />
                                                                </View>
                                                        )
                                                }}

                                                
                                                placeholderTextColor="#afb1b6" placeholder="Where are to deliver?"
                                                nearbyPlacesAPI="GooglePlacesSearch"
                                                debounce={400}
                                                styles={{

                                                        container: {
                                                                flex: 1,
                                                                marginTop: 15,
                                                                elevation: 1,
                                                                backgroundColor: COLORS.white2,
                                                                borderRadius: 10
                                                            },
                                                        textInput: {
                                                                fontSize: 16,
                                                                height: 50,
                                                        },
                                                }}
                                                minLength={4}
                                                enablePoweredByContainer={false}
                                                fetchDetails={true}
                                                returnKeyType={"search"}

                                                onPress={(data, details = null) => {
                                                        // 'details' is provided when fetchDetails = true

                                                        dispatch({
                                                                type: 'SET_DESTENATION',
                                                                payload: {
                                                                        location: details.geometry.location,
                                                                        description: data.description
                                                                }
                                                        })
                                                        navigation.navigate('MapScreen')
                                                }}
                                                query={{
                                                        key: GOOGLE_API_KEY,
                                                        language: 'en',
                                                }}
                                        />
                                </View>







                    
                    <View style={styles.bottomCard}>
                        <View style={styles.bottomCardPin}>
                            <Fontisto name="map-marker-alt" size={20} style={styles.bottomCardIcon} />
                            <Text style={styles.bottomCardText}>Tap to Select from map</Text>
                        </View>
                        <TouchableOpacity style={styles.bottomCircle} onPress={getcurrentlocation}>
                            <Feather name="arrow-right" size={20} style={{color:'#fff'}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.containerwrapper}>
                <Text style={styles.bidtitle}>Recently Search places</Text>
                <View>
                    
                      
                            <View style={styles.favwrapper}>
                                <View style={styles.favwrapper2}>
                                    <Fontisto name="home" size={18} style={{marginRight:15,color:'#77D970'}} />
                                
                                    <View>
                                    <Text style={styles.favTitle} >Home</Text>
                                    <Text style={styles.subTitle}>16/1301 E-block</Text>
                                    </View>
                                </View>    
                                <View>
                                    <Feather name="minus-circle" size={24} style={{color:'#FF0075'}} />
                                </View>

                            </View>
                        
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'

    },
    card:{
        padding:20,
        marginHorizontal:10,
        borderColor:'#efefef',
        borderWidth:1,
        borderRadius:20,
        marginTop:50,


    },
    drop:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',


    },
    dropText:{
        fontWeight:'bold',
        color:'#ff5563'

    },
    inputwrapper:{
        flexDirection:'row',
        alignItems:'center',


    },
    bottomCard:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:20,

   },
   bottomCardPin:{
       flexDirection:'row',
       alignItems:'center'

   },
   bottomCardIcon:{
       color:'#ff4858',
       marginRight:10,


   },
   bottomCardText:{
       color:'#92939b',
       fontWeight:'500',
       fontSize:16

   },
   bottomCircle:{
       width:50,
       height:50,
       borderRadius:50,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#000'

   },
   containerwrapper:{
       paddingHorizontal:20,
       marginTop:20

   },
   bidtitle:{
       fontWeight:'bold',
       fontSize:20,
       color:'#404152',
       marginBottom:20,
   },
   favwrapper:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginBottom:20,


   },
   favwrapper2:{
       flexDirection:'row'
   },
   favTitle:{
       fontWeight:'bold',
       fontSize:16,
       color:'#555664',
       marginBottom:5

   },
   subTitle:{
       color:'#a9abb8'
   }
   
});

