import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

import {withRouter} from 'react-router-dom';
import { useEffect } from 'react'

import CookieService from '../services/CookieService'

const StartScreen = (props, {navigation}) => {
    console.log(props);

    useEffect( () => {
        const UserID = CookieService.get("UserID");
        if (UserID != null) {
            props.history.push('/dashboard');
        }
    })

    return (
        <Background>
            <Logo />
            <Header> Job Search </Header> 
            <Paragraph>
                The easiest way to start your career. 
            </Paragraph> 
            <Button 
                mode = "contained"
                onPress = {
                    () => {
                        props.history.push('/login');
                    }
                } >
                Login 
            </Button> 
            <Button 
                mode = "outlined"
                onPress = {
                    () => {
                        props.history.push('/seeker/signup');
                    }
                } >
                Sign Up 
            </Button> 
        </Background>
    );
}

export default withRouter(StartScreen);