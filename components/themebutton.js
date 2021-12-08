import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const ThemeButton = () => {

    const { toggleColorMode } = useColorMode();

    return (
        <IconButton icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            aria-label='Change Theme' onClick={toggleColorMode}
            colorScheme={useColorModeValue('blue', 'orange')} />
    );
};

export default ThemeButton;