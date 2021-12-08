import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

/**
* @file themes.js
* @author Devin Arena
* @since 12/3/2021
* @description Contains theme information for ChakraUI.
*/

const fonts = {
    body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const components = {
    Heading: {
        variants: {
            sectionTitle: {
                fontSize: 25,
                textDecoration: 'underline',
                textUnderlineOffset: 8,
                textDecorationThickness: 4,
                textDecorationColor: 'gray.700',
                marginBottom: 6,
            },
            projectDate: {
                fontSize: 20,
                padding: 1,
                opacity: 0.75,
                background: 'whiteAlpha.300'
            },
        }
    },
    Text: {
        variants: {
            indented: {
                textIndent: '1rem',
                textAlign: 'justify',
            },
            year: {
                fontWeight: 'bold',
                textIndent: '1rem',
            },
            projectLabel: {
                color: 'red.200',
                background: 'red.800',
                padding: 1,
                whiteSpace: 'nowrap',
            },
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('blue.700', 'gray.500')(props),
            padding: '4px',
            _hover: {
                textDecoration: 'none',
                background: mode('whiteAlpha.500', 'whiteAlpha.200')(props),
                color: mode('blue.300', 'gray.300')(props)
            }
        })
    },
    Button: {
        baseStyle: {
            color: 'black'
        }
    }
};

const styles = {
    global: (props) => ({
        body: {
            bg: mode('bg.light', 'bg.dark')(props),
        }
    })
};

const colors = {
    bg: {
        light: '#c0cfea',
        dark: '#15181c'
    },
    gray: {
        900: '#15181c',
        800: '#35383c',
        700: '#53565b',
        600: '#666a6f',
        500: '#8e9297',
        400: '#aeb2b7',
        300: '#d2d6dc',
        200: '#e3e7ed',
        100: '#edf1f7',
        50: '#f5f9fe',
    },
    blue: {
        900: '#0e1f36',
        800: '#21324d',
        700: '#304463',
        600: '#405679',
        500: '#4e6389',
        400: '#66799d',
        300: '#7f8fb2',
        200: '#a0afcd',
        100: '#c0cfea',
        50: '#e5eaff',
    }
};

const theme = extendTheme({ config, fonts, colors, components, styles });

export default theme;