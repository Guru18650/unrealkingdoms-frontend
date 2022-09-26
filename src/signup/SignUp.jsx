import React from 'react';
import SignUpContainer from "./SignUpContainer"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../libraries/theme";

import './SignUp.css';

export default function SignUp() {
    return (
        <ThemeProvider  theme={theme}>
            <SignUpContainer />
        </ThemeProvider>
    );
}

