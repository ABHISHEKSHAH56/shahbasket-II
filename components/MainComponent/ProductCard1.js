import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';
import { removeFromCart,addToCart } from '../../stores/Shopping/shopping-actions';

export default function ProductCard1({item}) {
    const baseprcie=20
    const baseweight=1
    const maxweight=25
    const [weight, setweight] = useState(baseweight)
    const [price, setprice] = useState(baseprcie)
    const [measuremnt, setmeasuremnt] = useState("kg")
    const [addtocart, setaddtocart] = useState(true)
    const dispatch = useDispatch()

    const AddToCart=()=>{
        setaddtocart(false)
        //dispatch(addToCart(data._id))
        


    }

    const onincrement=()=>{
        if(weight==750)
        {
            setweight(1)
            setprice(baseprcie)
            setmeasuremnt('Kg')
            //dispatch(adjustItemQty(data._id,weight,measuremnt,price))
        }
        else if(weight==maxweight)
        {
            //weight reaches some higer point send some pop up 
            //you can call 
        }
        else if(weight<750 && measuremnt=='gm')
        {
            setweight(weight+250)
            setprice(baseprcie*weight/1000)
        }
        else{
            setweight(weight+1)
            setprice(baseprcie*weight)
            //dispatch(adjustItemQty(data._id,weight,measuremnt,price))
        }
        console.log(price)
    }
    const ondecriment=()=>{
        if(weight==baseweight)
        {
            setaddtocart(true)
            console.log("bh")
            //dispatch(adjustItemQty(data._id,weight,measuremnt,price))

        }
        else if(weight==1)
        {
           
            setweight(750)
            setprice(baseprcie*3/4)
            setmeasuremnt('gm')
            //dispatch(removeFromCart(data._id))

        }
        else if(weight>1 && measuremnt=='kg')
        {
            setweight(weight-1)
            setprice(baseprcie*weight)
            
        }
        else{
            setweight(weight-250)
            setprice(baseprcie*weight/1000)
           // dispatch(adjustItemQty(data._id,weight,measuremnt,price))
           

        }
        console.log(price)
    }






    return (
        <View 
                            style={{
                                height:SIZES.width/2,
                                width:SIZES.width/2+20,
                                backgroundColor:'#fff',
                                marginHorizontal:10,
                                borderRadius:20,
                                elevation:1,
                                marginVertical:2
                            }}
                        
                        >
                            <TouchableOpacity style={{
                                alignSelf:'flex-end',
                                alignItems:'center',
                                backgroundColor:COLORS.green,
                                height:20,
                                width:60,
                                marginHorizontal:10,
                                marginVertical:5,
                                justifyContent:'center',
                                borderRadius:5

                            }}>
                                <Text style={{marginLeft:4,color:'#fff',fontWeight:'700',fontSize:10}}>20% Off</Text>
                                
                            </TouchableOpacity>

                            <View style={{alignSelf:'center'}} >
                                <View style={{backgroundColor:COLORS.lightGray2,width:120,alignItems:'center',borderRadius:10}}>
                                <Image source={item.image}   style={{height:80,width:100}} />
                                </View>
                                

                            </View>
                            <View style={{
                                flexDirection:'row',
                                marginHorizontal:15,
                                marginVertical:5,
                                justifyContent:'space-between'
                               
                            }}>
                                <View style={{paddingHorizontal:5}}>
                                <Text style={{fontWeight:'bold',fontSize:14,textAlign:"center"}}>Potato</Text>                               
                                <Text style={{fontWeight:'bold',color:'#E2703A',fontSize:12,}} >Rs 96.00/Kg</Text>                                
                                <Text style={{fontSize:10,color:COLORS.gray,textDecorationLine:'line-through'}}>Rs 102.00/Kg  </Text>  
                                </View>
                                
                                
                                
                                
                                
                                <View style={{justifyContent:'center'}}>
                               {
                                   addtocart ?
                                     <TouchableOpacity onPress={AddToCart} style={{
                                    height:30,
                                    width:30,
                                    backgroundColor:'#FFC288',                                   
                                    borderRadius:5,
                                    justifyContent:'center',
                                    alignItems:'center'
                                    
                                    
                                }}>
                                    <Icon name="plus" size={24} color={'#fff'} />

                                 </TouchableOpacity> :
                               

                                <View style={{flexDirection:'row', height:25,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10}}>
                                    <TouchableOpacity onPress={ondecriment} style={{backgroundColor:COLORS.red,height:18,width:18,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Icon name="minus" color="#fff" size={16} />
                                    </TouchableOpacity>
                                    <View style={{backgroundColor:COLORS.lightGray2,width:40,height:20,justifyContent:'center',alignItems:'center',borderRadius:5,marginHorizontal:3}}>
                                        <Text style={{fontWeight:'bold',fontSize:12}}>
                                            {weight} {measuremnt}
                                        </Text>

                                    </View>
                                    <TouchableOpacity onPress={onincrement} style={{backgroundColor:COLORS.green,height:18,width:18,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <Icon name="plus" color="#fff" size={16} />
                                    </TouchableOpacity>
                                </View>
                                }


                                </View>
                            </View>

                            
                            
                              
                        </View>
        
    )
}
