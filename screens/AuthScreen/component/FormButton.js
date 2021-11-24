import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

const FormButton = ({ buttonTitle, ...rest }) => {
        return (
                <TouchableOpacity style={styles.buttonContainer} {...rest}>
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity>
        );
};

export default FormButton;

const styles = StyleSheet.create({
        buttonContainer: {
                marginTop: 20,
                marginHorizontal:35,
                height: SIZES.height / 15,
                backgroundColor: '#2e64e5',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 55,
        },
        buttonText: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                fontFamily: 'Lato-Regular',
        },
});