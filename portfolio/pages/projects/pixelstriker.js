import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Image from 'next/image';
import Main from "components/layouts/main";

import menu from '../../public/images/pixelstriker_menu.png';
import game from '../../public/images/pixelstriker.png';
import goalie from '../../public/images/pixelstriker_goalie.png';
import { Grow, SlideIn } from "components/animated";

const UseRoux = () => {

    return (
        <Main title='Pixel Striker'>
            <Container px={8} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap'>
                            Pixel Striker
                        </Heading>
                        <Heading as='h3' variant='projectDate' ml={3} borderRadius={5} fontSize={{ base: 'lg', md: 'xl' }}>
                            August 2021
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0.2} time={1} direction='left'>
                        <Text variant='indented'>
                            Pixel Striker is a mobile arcade-style soccer game developed using the Godot game engine. It contains multiple game modes, GPGS integration, and persistent high scores.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.4} time={1} direction='right'>
                        <Text variant='indented'>
                            The game contians three game modes, free kicks, penalties, and goalie mode. Each mode is unique and provides different gameplay and challenges.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.6} time={1} direction='left'>
                        <Text variant='indented'>
                            Integrates with Google Play Games Services for leaderboards and achievements. Saves high scores using preferences to keep persistent high scores.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8}>
                    <SlideIn delay={0.8} time={1} direction='right'>
                        <Flex align='center'>
                            <Text variant='projectLabel'>
                                Platform
                            </Text>
                            <Text ml={2}>
                                Android
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                Godot
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Link
                            </Text>
                            <NextLink href='https://play.google.com/store/apps/details?id=io.github.devinarena.pixelstriker' passHref>
                                <Link ml={2}>
                                    Google Play Store
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.1} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/devinarena/Pixel-Striker' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8} >
                        <Image src={menu} alt='Game menu' />
                    </Box>
                </Grow>

                <Grow delay={1.5} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src={goalie} alt='Goalie mode' />
                    </Box>
                </Grow>

                <Grow delay={1.7} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src={game} alt='Striker mode' />
                    </Box>
                </Grow>

                <Grow delay={1.9} time={1}>
                    <Box mt={4} align='center'>
                        <NextLink href='/projects' passHref>
                            <Button align='center' leftIcon={<ChevronLeftIcon />} colorScheme='blue'>
                                Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Grow>

            </Container>
        </Main>
    );
};

export default UseRoux;