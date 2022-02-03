import React from 'react';
import {View, Text} from 'react-native';
import AllInOneSDKManager from 'paytm_allinone_react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Payment() {
    const orderDetails={
        orderId:'order89',
        mid:'ndUPBC45334640494343',
        tranxToken:'0a1fea026188466a91980cdfddb73bb41639257613816',
        amount:'1.00',
        callbackUrl:'https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=order89',
        isStaging:true,
        appInvokeRestricted:true,
    }
    const strData = JSON.stringify(orderDetails);
    console.log(orderDetails.isStaging)
    console.log(strData)
  const initatepayment = () => {
        console.log("kuch ho toh rha h ")
        AllInOneSDKManager.startTransaction(
        orderDetails.orderId,
        orderDetails.mid,
        orderDetails.tranxToken,
        orderDetails.amount,       
        orderDetails.callbackUrl,
        orderDetails.isStaging,
        orderDetails.appInvokeRestricted
        )
        .then(result => {
            //updateUI(result);
            console.log(result)
        })
        .catch(err => {
          console.log(err)
            //handleError(err);
        });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity  onPress={initatepayment}>
        <Text >payClick</Text>
      </TouchableOpacity>
    </View>
  );
}
