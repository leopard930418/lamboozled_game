import "../styles/globals.scss";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS

import { StylesProvider, createGenerateClassName } from '@mui/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider generateClassName={generateClassName}><Component {...pageProps} /></StylesProvider>
  );
  
}

export default MyApp