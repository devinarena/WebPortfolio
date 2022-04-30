
import { ColorModeScript } from '@chakra-ui/color-mode';
import theme from 'components/themes';
import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
* @file _document.js
* @author Devin Arena
* @since 12/3/2021
* @description Updates properties of the main document for NextJS
*/

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}  />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}