import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Svg, {Path} from 'react-native-svg';
import { AppVerifyMobile } from '../../API/Index';

export default function HomeMap() {
  const navigation = useNavigation();
  const destination = useSelector(state => state.address.destination);
  const [formateedAdress, setformateedAdress] = React.useState('');
  const [custome, setcustome] = useState('')
  const dispatch = useDispatch();
  const formhandller=async()=>{
    const data={
      address:{
        location:destination.location,
        destination:destination.destination,
        userAddress:custome

      }
    }
    await AppVerifyMobile(data).then((res)=>{
      dispatch({
        type:"SET_USER_DATA",
        payload:res.data.user
      })

    })
    navigation.pop(2)

  }

  return (
    <View style={{flex:1}}>
      
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          {destination?.location && (
            <Marker
             
              
              draggable
              onDragEnd={e => {
                const {coordinate} = e.nativeEvent;
                Geocoder.init(GOOGLE_API_KEY, {language: 'en'});
                Geocoder.from(coordinate.latitude, coordinate.longitude).then(
                  json => {
                    setformateedAdress(json.results[0].formatted_address);
                  },
                );
                dispatch({
                  type: 'SET_DESTENATION',
                  payload: {
                    location: {
                      lat: coordinate.latitude,
                      lng: coordinate.longitude,
                    },
                    description: formateedAdress,
                  },
                });
              }}
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              identifier="destination">
              <View
                style={[
                  styles.tooltip,
                  {
                    borderLeftColor: '#02dc9f',
                  },
                ]}>
                <View>
                <Text style={{fontSize:12,fontWeight:'bold'}}>YOUR ORDER WILL DELIVER HERE </Text>
                <Text style={{color: '#a4a6ac',fontSize:10}}>Adjust  the pin accuratley </Text>
                        </View>
                
                <Svg
                  width="18"
                  height="15"
                  style={{
                    position: 'absolute',
                    bottom: -15,
                    left: 100,
                  }}
                  viewBox="0 0 18 15">
                  <Path d="M9 15L0.339745 0L17.6603 0L9 152" fill="#FFF" />
                </Svg>
              </View>
              <View
                style={[
                  styles.dotwrapper,
                  {
                    backgroundColor: 'rgba(2,213,155,.25)',
                  },
                ]}>
                <Image source={require('./final.png')} style={ styles.dot} />
               
              </View>
            </Marker>
          )}
        </MapView>
            <View>
                 <SafeAreaView style={{marginHorizontal:20}}>
                     <TouchableOpacity style={{
                        flexDirection:'row',
                        alignItems:'center'
                       
                    }} onPress={()=>navigation.pop()}   >
                        <Feather name="arrow-left" size={30} style={{marginTop:15}} />
                    </TouchableOpacity>

                   </SafeAreaView>
            </View>
            
             <View style={styles.bottomwrapper}>
                
                 <View style={styles.Note}>
                         <View style={{}}>
                         <Text style={{marginVertical:5,color:COLORS.black,fontSize:12,fontWeight:"bold"}}>Locations Detected  *</Text>
                                 <TextInput 
                                 placeholder="Not Able to Detect" 
                                 style={{
                                         
                                         height:50,
                                         color:'#000',
                                         fontWeight:'700',
                                         backgroundColor:'#fff',                                         
                                         marginHorizontal:3,
                                         borderRadius:8,
                                         borderBottomWidth:2,
                                         borderColor:COLORS.primary,
                                         paddingHorizontal:15,
                                         elevation:2
                                 }}
                                  value={destination.description } />

                         </View>
                         <View style={{}}>
                                 <Text style={{marginVertical:5,color:COLORS.black,fontSize:12,fontWeight:"bold"}}>Complete Address *</Text>
                                 <TextInput 
                                 placeholder="Floor,Near By Area "
                                 value={custome}
                                 onChangeText={(e)=>setcustome(e)}
                                 style={{
                                         
                                        height:50,
                                        color:'#000',
                                        fontWeight:'700',
                                        backgroundColor:'#fff',                                         
                                        marginHorizontal:3,
                                        borderRadius:8,
                                        borderBottomWidth:2,
                                         borderColor:COLORS.primary,
                                         paddingHorizontal:15,
                                         elevation:2
                                         
                                 }}
                                   />
                                  {
                                    custome.length>3 || custome.length==0? <View></View>:
                                    <View style={{flexDirection:"row",marginVertical:5,marginHorizontal:5}}>
                                    <Image source={icons.info} style={{height:12,width:12,tintColor:COLORS.red}} />
                                    <Text style={{fontSize:10,color:COLORS.red,marginLeft:5}}>Please Fill The Required </Text>                                    
                                  </View> 
                                  }

                         </View>
                
                    
                 </View>
                 <View style={[styles.footerAction,{backgroundColor:"#f5f5f6"}]}>
                     <TouchableOpacity 
                     onPress={custome.length>3?formhandller:()=>{}}
                        style={{marginHorizontal:20,backgroundColor:custome.length>3?COLORS.green:COLORS.gray,width:SIZES.width-100,height:40,justifyContent:"center",borderRadius:10,alignItems:"center"}}>
                       <Text style={{fontSize:16,color:"#fff"}}>Confirm</Text>
                     </TouchableOpacity>
                   
                 </View>
                 

             </View>

      

      
    </View>
  );
}


const styles = StyleSheet.create({
        dotwrapper:{
            width:30,
            height:30,
            borderRadius:30,
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center'
        },
        dot:{
            height:35,
            width:30,
            borderRadius:25
        },
        tooltip:{
            width:250,
            backgroundColor:'#fff',
            position:'relative',
            borderLeftWidth:6,
            flexDirection:'row',
            justifyContent:'space-between',
            padding:15,
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:2
            },
            shadowRadius:5,
            shadowOpacity:0.05,
            borderRadius:5,
            marginBottom:20
        },
        bottomwrapper:{
            position:'absolute',
            bottom:0,
            width:SIZES.width
    
        },
        Note:{
            backgroundColor:'#f5f5f6',
            
            paddingHorizontal:10,
            paddingVertical:10
        },
        footerAction:{
            width:SIZES.width,           
            alignItems:'center',
           
            paddingBottom:20,
           
        },
        footertext:{
            fontWeight:'bold',
            color:'#fff',
            fontSize:16
        }
    })
    
 