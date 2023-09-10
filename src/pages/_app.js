import Header from '@/components/header';
import '@/styles/globals.css'


// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;
