import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/globalTheme';
import GlobalStyle from './style/globalStyle';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
