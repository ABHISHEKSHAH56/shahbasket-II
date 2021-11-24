import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

export default function PosterCard() {
    const items=[
        {
            id: '1',
            chips: 'special',
            title: 'Shop Healthy',
            subtitle: 'Organic vegetables in stock',
            image: require('../../assets/categorey/b1.png'),
            backgroundColor: '#edb96e',
        },
        {
            id: '2',
            chips: 'special',
            title: 'Shop Healthy',
            subtitle: 'Organic vegetables in stock',
            image: require('../../assets/categorey/b1.png'),
            backgroundColor: '#edb96e',
        },
        {
            id: '3',
            chips: 'special',
            title: 'Shop Healthy',
            subtitle: 'Organic vegetables in stock',
            image: require('../../assets/categorey/b1.png'),
            backgroundColor: '#edb96e',
        }
    ]
    return (
        <View >
            <FlatList 
            data={items}
            horizontal={true}
            keyExtractor={(item,index)=>item.id+index}
            renderItem={({item,index})=>{
                return(
                    <View style={{ marginHorizontal:10,backgroundColor:item.backgroundColor,
                                    elevation:2,
                                    paddingLeft:10,
                                    paddingVertical:10,
                                    borderRadius:10
                                    
                                }}>
                <View style={styles.hightlightitems}>
                    <View style={styles.chipscontainer}>
                        <Text style={styles.chips}>{item.chips}</Text>
                    </View>
                    <Image source={item.image} style={styles.hightlightImage} />
                </View>
                <View>
                    <Text style={styles.hightlightTitle}>{item.title}</Text>
                    <Text style={styles.hightlightSubTitle}>{item.subtitle}</Text>
                </View>
            </View>

                )
            }}
            
            
            />
        </View>
            
       
    )
}

const styles = StyleSheet.create({
    hightlight:{
        marginHorizontal:20,
        width:100,
        paddingLeft:20,
        paddingBottom:20,
        borderRadius:10,

    },
    hightlightitems:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginBottom:10               

    },
    chipscontainer:{
        backgroundColor:'#ff6a14',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,                  

    },
    chips:{
        color:'#fff',
        textTransform:'uppercase',
        fontFamily:'Montserrat-Bold',
        fontSize:12,                        

    },
    hightlightImage:{
        height:100,
        width:150
        
    },
    hightlightTitle:{
        fontSize:16,
        textTransform:'uppercase',
        color:'#fff',
        marginBottom:5,

    },
    hightlightSubTitle:{
        fontSize:12,
        color:'#fff'
        
    }
})
