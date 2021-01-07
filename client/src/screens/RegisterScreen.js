import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { confirmPasswordValidator } from '../helpers/confirmPasswordValidator'
// import SwitchSelector from "react-native-switch-selector"
// import { StackActions } from '@react-navigation/native'

// const pushAction = StackActions.push('RegisterEmployerScreen');
// const popAction = StackActions.pop('RegisterEmployerScreen');

import {withRouter} from 'react-router-dom';

const options = [{
        label: <span> EMPLOYEE </span>,
        value: {
            employee: true
        },
        selectedBackgroundColor: "#FFFFFF",

    },
    {
        label: "EMPLOYER",
        value: "employer",
        selectedBackgroundColor: "#FFFFFF"
    }
];

const onChange = (newValue) => {
    console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === "employer");

const RegisterScreen = (props, { navigation }) => {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const confirmPasswordError = confirmPasswordValidator(confirmPassword.value, password.value)
        if (emailError || passwordError || nameError || confirmPasswordError) {
            setName({...name, error: nameError });
            setEmail({...email, error: emailError });
            setPassword({...password, error: passwordError });
            setConfirmPassword({...confirmPassword, error: confirmPasswordError});
            return;
        }
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Dashboard' }],
        // })
        props.history.push('/dashboard');
    }

    return ( 
        <Background>
            <BackButton goBack = { () => {
                props.history.push('/');
            } }/> 
            <Logo />
            <Header> Create Account </Header> 
            <View style = { styles.row } >
                <Button 
                    mode = "contained"
                    onPress = {
                        // () => navigation.replace('RegisterEmployerScreen')
                        () => {
                            props.history.push('/company/signup');
                        }
                    }
                    style = {
                        { marginTop: 0 }
                    } 
                    > Employer </Button>  
            </View>
            <TextInput 
                label = "Full Name"
                returnKeyType = "next"
                value = { name.value }
                onChangeText = {
                    (text) => setName({ value: text, error: '' })
                }
                error = {!!name.error }
                errorText = { name.error }
                />
            <TextInput 
                label = "Email"
                returnKeyType = "next"
                value = { email.value }
                onChangeText = {
                    (text) => setEmail({ value: text, error: '' })
                }
                error = {!!email.error }
                errorText = { email.error }
                autoCapitalize = "none"
                autoCompleteType = "email"
                textContentType = "emailAddress"
                keyboardType = "email-address"
                />
            <TextInput 
                label = "Password"
                returnKeyType = "done"
                value = { password.value }
                onChangeText = {
                    (text) => setPassword({ value: text, error: '' })
                }
                error = {!!password.error }
                errorText = { password.error }
                secureTextEntry 
                />
            <TextInput 
                label = "Confirm Password"
                returnKeyType = "done"
                value = { confirmPassword.value}
                onChangeText = {
                    (text) => setConfirmPassword({ value: text, error: '' })
                }
                error = {!!confirmPassword.error }
                errorText = { confirmPassword.error }
                secureTextEntry 
                />
            <Button 
                mode = "contained"
                onPress = { onSignUpPressed }
                style = {
                    { marginTop: 24 }
                } > Sign Up </Button> 
            <View style = { styles.row } >
                <Text> Already have an account ? </Text> 
                <TouchableOpacity onPress = {
                    // () => navigation.replace('LoginScreen')
                    () => {
                        props.history.push('/login');
                    }
                } >
                    <Text style = { styles.link } > Login </Text> 
                </TouchableOpacity> 
            </View> 
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default withRouter(RegisterScreen);