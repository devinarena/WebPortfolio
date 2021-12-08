import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";

/**
* @file expentry.js
* @author Devin Arena
* @since 12/4/2021
* @description Allows easy addition of experience in the form of date - description.
*/
const ExperienceEntry = ({ children, date }) => {
    return (
        <Flex direction="row" my={{base: 3, md: 0}}>
            <Text variant="year" w="30%" mr={4} textAlign={{base: "center", md: "start"}}>
                {date}
            </Text>
            <Text w="70%" textAlign="justify">
                {children}
            </Text>
        </Flex>
    );
}

export default ExperienceEntry;