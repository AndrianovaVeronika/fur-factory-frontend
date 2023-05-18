import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./store/store";
import theme from "./styles/theme";
import {Provider} from "react-redux";
import {ThemeProvider} from '@mui/material/styles';
import Spinner from './components/PageComponents/Spinner';
import "./i18n";

ReactDOM.render(
    <React.Suspense fallback={<Spinner/>}>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="*" element={<App/>}/>
                    </Routes>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.Suspense>,
    document.getElementById('root')
);
