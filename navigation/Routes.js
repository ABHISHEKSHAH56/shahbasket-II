import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack'
import { View ,Text} from 'react-native';
import LottieView from 'lottie-react-native'
import { COLORS, SIZES } from '../constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DraweContent';



const Routes = () => {
        const [isLoading, setisLoading] = useState(true)
        const Drawer = createDrawerNavigator();

        useEffect(() => {
                setTimeout(() => {
                   setisLoading(false)

                }, 4000)
        }, []);


        if (isLoading) {
                return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
                               <View style={{height:250,width:SIZES.width}} >
                               <LottieView source={require('../assets/badiya/45869-farmers.json')} autoPlay loop />
                               </View>
                                <View style={{marginHorizontal:5}}>
                                <Text style={{fontSize:30,fontWeight:'bold'}}>Shah <Text style={{color:COLORS.green}}>Basket</Text></Text>
                                
                        </View>
                        </View>
                )
        }

        return (
                <NavigationContainer>

                        <Drawer.Navigator screenOptions={{
                                headerShown: false
                        }} drawerContent={props => <DrawerContent {...props} />}>
                                <Drawer.Screen name="HomeDrawer" component={AppStack} />
                        </Drawer.Navigator>
                </NavigationContainer>
        );
};

export default Routes;
