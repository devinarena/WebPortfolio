import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Image from 'next/image';
import Main from "components/layouts/main";

import image1 from '../../public/images/minesweeperai.png';
import image2 from '../../public/images/minesweeperai2.png';
import { Grow, SlideIn } from "components/animated";

const UseRoux = () => {

    return (
        <Main title='Minesweeper AI'>
            <Container px={8} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ base: 'xl', md: '4xl' }}>
                            Minesweeper AI
                        </Heading>
                        <Heading as='h3' variant='projectDate' ml={3} borderRadius={5} fontSize={{ base: 'md', md: 'xl' }}>
                            December 2019 / September 2021
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0.2} time={1} direction='left'>
                        <Text variant='indented'>
                            An AI that successfully plays Minesweeper written in pure javascript.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.4} time={1} direction='right'>
                        <Text variant='indented'>
                            The AI uses a probability map generated based on each revealed tile. It determines the safest tiles to reveal based on tiles that have already been satsified, where the number of adjacent mines equals the number of adjacent flags.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.6} time={1} direction='left'>
                        <Text variant='indented'>
                            The AI solves puzzles in a similar way to how a human would solve them. It can fail in the beginning as it must guess randomly, but after revealing some tiles it had no issues. It can also solve puzzles incredibly quickly, however its rate is limited to really showcase how it works.
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
                                Web Application
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                Javascript
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Link
                            </Text>
                            <NextLink href='https://projects.devinarena.com/MinesweeperAI' passHref>
                                <Link ml={2} fontSize={{ base: 'sm', md: 'lg' }}>
                                    https://projects.devinarena.com/MinesweeperAI
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.1} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/devinarena/MinesweeperAI' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={image1} alt='Debug Map' />
                    </Box>
                </Grow>

                <Grow delay={1.5} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src={image2} alt='Almost solved' />
                    </Box>
                </Grow>

                <Grow delay={1.7} time={1}>
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