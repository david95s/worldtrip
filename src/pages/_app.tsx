import React from 'react';

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme, themeDark } from '../styles/theme'
import Header from '../components/Header';


import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [theDarkTheme, setTheDarkTheme] = React.useState(false);

  function toogleThemeToDark(){
    setTheDarkTheme(!theDarkTheme);
  }

  return (
    <ChakraProvider theme={ theDarkTheme ? themeDark : theme}>
      <Header toogleThemeToDark={toogleThemeToDark}/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
