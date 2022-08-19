import "../styles/globals.scss";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import store from "../store";
import { Provider } from "react-redux";
const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <StylesProvider generateClassName={generateClassName}><Component {...pageProps} /></StylesProvider>
    </Provider>
  );
  
}

export default MyApp