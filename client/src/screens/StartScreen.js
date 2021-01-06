import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

const StartScreen = ({ navigation }) => ( <
    Background >
    <
    Logo / >
    <
    Header > Job Search < /Header> <
    Paragraph >
    The easiest way to start your career. <
    /Paragraph> <
    Button mode = "contained"
    onPress = {
        () => navigation.navigate('LoginScreen') } >
    Login <
    /Button> <
    Button mode = "outlined"
    onPress = {
        () => navigation.navigate('RegisterScreen') } >
    Sign Up <
    /Button> <
    /Background>
)

export default StartScreen