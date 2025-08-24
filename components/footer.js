

/**
* @file footer.js
* @author Devin Arena
* @since 12/4/2021
* @description Basic footer for every page.
*/

import { Heading } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";

const Footer = () => {

    return (
        <Container display="flex" pb={6} mt={8}>
            <Heading as="h3" size="md" textAlign='center'>
                &copy; 2025 Devin Arena - Built with Next.js and ChakraUI
            </Heading>
        </Container>
    );
};

export default Footer;