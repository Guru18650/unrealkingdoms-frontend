import React from 'react';
import LoginContainer from "./LoginContainer"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../libraries/theme";

import './Login.css';

export default function Login() {
    return (
        <ThemeProvider  theme={theme}>
            <LoginContainer />
        </ThemeProvider>
    );
}

