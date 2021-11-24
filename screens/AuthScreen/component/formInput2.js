import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../../constants';

const FormInput2 = ({ labelValue, placeholderText, iconType, ...rest }) => {
        return (
                <View style={styles.inputContainer}>


                        <TextInput
                                value={labelValue}
                                style={styles.input}
                                numberOfLines={1}
                                placeholder={placeholderText}
                                placeholderTextColor="#666"
                                {...rest}
                        />
                </View>
        );
};

export default FormInput2;

const styles = StyleSheet.create({
        inputContainer: {
                marginTop: 5,
                marginBottom: 10,
                marginHorizontal: 16,
                borderBottomWidth: 1,
                borderColor: COLORS.green,

                height: SIZES.height / 15,

                borderRadius: 3,

                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
        },
        iconStyle: {
                padding: 10,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRightColor: '#ccc',
                borderRightWidth: 1,
                width: 50,
        },
        input: {
                padding: 10,
                flex: 1,
                fontSize: 16,
                fontFamily: 'Lato-Regular',
                color: '#333',
                justifyContent: 'center',
                alignItems: 'center',
        },
        inputField: {
                padding: 10,
                marginTop: 5,
                marginBottom: 10,
                width: SIZES.width / 1.5,
                height: SIZES.height / 15,
                fontSize: 16,
                borderRadius: 8,
                borderWidth: 1,
        },
});