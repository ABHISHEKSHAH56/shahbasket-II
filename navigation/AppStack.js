import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import AddressBottom from '../screens/Home/Componment/AddressBottom';
import FormAddress from '../screens/Home/Componment/FormAddress';
import HomeMap from '../screens/Maps/HomeMap';
import AddressBook from '../screens/Profile/AddressBook';
import PastOrders from '../screens/Profile/PastOrders';
import Support from '../screens/Profile/Support';
import Search from "../screens/Profile/Search"
import OrderSuccessPage from '../screens/Cart/OrderSucess'
import NewHome from '../screens/Home/NewHome';
import MobileAuthenticationScreen from '../screens/AuthScreen/MobileAuthentication';
import OtpScreen from '../screens/AuthScreen/OtpScreen';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onbording from '../screens/AuthScreen/Onbording';
import Deliverypage from '../screens/Home/Componment/Deliverypage';
import DetailProduct from '../screens/Home/Componment/DetailProduct';
import Newcart from '../screens/Cart/Newcart';
import Checkout from '../screens/Cart/Checkout';
import Checkout21 from '../screens/Cart/Checkout21';
import UserInfo from '../screens/AuthScreen/UserInfo';
import Payment from '../screens/Payment/Payment';

const HomeStack = createNativeStackNavigator();


export default function AppStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;


  useEffect(() => {

    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboardurl';
  } else {
    routeName = 'Home';
  }















  return (
    <HomeStack.Navigator initialRouteName={routeName} screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Onboardurl" component={Onbording} />
      <HomeStack.Screen name="Checkout" component={Checkout} />
      <HomeStack.Screen name="Home" component={NewHome} />
      <HomeStack.Screen name="UserInfo" component={UserInfo} />
      <HomeStack.Screen name="Details" component={DetailProduct} />
      <HomeStack.Screen name="OrderTrack" component={Deliverypage} />
      <HomeStack.Screen name="Payment" component={Checkout21} />
      <HomeStack.Screen name="Cart" component={Newcart} />
      <HomeStack.Screen name="paytmpayment" component={Payment} />
      <HomeStack.Screen name="searchScreen" component={Search} />
      <HomeStack.Screen name="Mobile" component={MobileAuthenticationScreen} />
      <HomeStack.Screen name="OtpVerify" component={OtpScreen} />
      <HomeStack.Screen name="MapScreen" component={HomeMap} />
      <HomeStack.Screen name="AddressScreen" component={AddressBottom} />
      <HomeStack.Screen name="FormAddress" component={FormAddress} />
      <HomeStack.Screen name="Support" component={Support} />
      <HomeStack.Screen name="Pastorder" component={PastOrders} />
      <HomeStack.Screen name="Addressbook" component={AddressBook} />
      <HomeStack.Screen name="OrderSuccess" component={OrderSuccessPage} />
    </HomeStack.Navigator>
  )
}





















