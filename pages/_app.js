import theme from '../components/themes';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;