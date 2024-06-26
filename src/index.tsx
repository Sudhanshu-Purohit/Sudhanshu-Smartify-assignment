import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { AutoTopUpSettingProvider } from './context/AutoTopUpSettingsContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <AutoTopUpSettingProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </AutoTopUpSettingProvider>
    </ThemeProvider>
);
