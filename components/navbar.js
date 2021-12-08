import { Box, Container, Flex, Heading, Link, Stack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/button';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { VscGithub, VscCode } from 'react-icons/vsc';
import { AiFillLinkedin } from 'react-icons/ai';
import ThemeButton from './themebutton';

import NextLink from 'next/link';
import { useState } from 'react';

/**
* @file navbar.js
* @author Devin Arena
* @since 12/5/2021
* @description Navigation bar at the top of the page, links for full size, hamburger menu for smaller size.
*/
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Box position='fixed' as='nav' w='100%' zIndex={999}
            transition='background 1s ease' backdropFilter='blur(20px)'
            bg='whiteAlpha.50' _hover={{ bg: 'whiteAlpha.200' }}>
            <Container maxW='container.md' display='flex' alignItems='center' justifyContent={{ base: 'space-between', md: 'space-evenly' }} p={3}>
                <Flex mr={3}>
                    <Heading as='h1' size='lg' whiteSpace='nowrap'>
                        <NextLink href='/' passHref>
                            <Link p={0} _hover={{}}>
                                Devin Arena
                            </Link>
                        </NextLink>
                    </Heading>
                </Flex>

                <Stack display={{ base: 'none', md: 'flex' }} direction='row' justify='flex-start'
                    align='center'>
                    <NextLink href='/projects' passHref>
                        <Link>Projects</Link>
                    </NextLink>
                    <NextLink href='https://github.com/devinarena/' passHref>
                        <Link display='inline-flex' alignItems='center' style={{ gap: 4 }}>
                            <VscGithub />
                            GitHub
                        </Link>
                    </NextLink>
                    <NextLink href='https://www.linkedin.com/in/devin-arena/' passHref>
                        <Link display='inline-flex' alignItems='center' style={{ gap: 4 }}>
                            <AiFillLinkedin />
                            LinkedIn
                        </Link>
                    </NextLink>
                    <NextLink href='https://github.com/devinarena/devinarena.github.io/' passHref>
                        <Link display='inline-flex' alignItems='center' style={{ gap: 4 }}>
                            <VscCode />
                            Source
                        </Link>
                    </NextLink>
                </Stack>

                <Box>
                    <ThemeButton />

                    <Box display={{ base: 'inline-block', md: 'none' }} ml={3}>
                        <Menu id="navbar-dropdown" isLazy
                            onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)}>
                            <MenuButton as={IconButton} icon={menuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                aria-label='menu' color='white'
                                colorScheme={useColorModeValue('blue', 'gray')} />

                            <MenuList>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/devinarena/" passHref>
                                    <MenuItem as={Link} display='inline-flex'
                                        alignItems='center' style={{ gap: 4 }}>
                                        <VscGithub />
                                        GitHub
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="https://www.linkedin.com/in/devin-arena/" passHref>
                                    <MenuItem as={Link} display='inline-flex'
                                        alignItems='center' style={{ gap: 4 }}>
                                        <AiFillLinkedin />
                                        LinkedIn
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/devinarena/devinarena.github.io/" passHref>
                                    <MenuItem as={Link} display='inline-flex'
                                        alignItems='center' style={{ gap: 4 }}>
                                        <VscCode />
                                        Source
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
};

export default Navbar;