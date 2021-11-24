import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { SIZES } from '../../constants';

const DeliveryStatus = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal:SIZES.body1
            }}
        >
            <Text>DeliveryStatus</Text>
        </View>
    )
}

export default DeliveryStatus;