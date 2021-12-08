import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Image from 'next/image';
import Main from "components/layouts/main";

import simulator from '../../public/images/useroux.png';
import homepage from '../../public/images/useroux_homepage.png';
import upload from '../../public/images/useroux_upload.png';
import { Grow, SlideIn } from "components/animated";

const UseRoux = () => {

    return (
        <Main title='UseRoux'>
            <Container px={8} pt={20} maxW='container.md'>

                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap'>
                            UseRoux
                        </Heading>
                        <Heading as='h3' variant='projectDate' ml={3} borderRadius={5} fontSize={{ base: 'lg', md: 'xl' }}>
                            October 2021 -
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0.2} time={1} direction='left'>
                        <Text variant='indented'>
                            UseRoux is a solve-sharing and walkthrough webapp. Currently, the simulator allows users to walk through solves, giving them step by step instructions on the optimal solution for a certain scramble. The goal is to help teach people how to both use the Roux speedsolving method and improve their solves.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.4} time={1} direction='right'>
                        <Text variant='indented'>
                            The simulator uses Three.js to build a 3D speedcube. The cube rotates according to the current scramble. The user can walk through each step using the left and right arrows, and the cube will follow the solution steps.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0.6} time={1} direction='left'>
                        <Text variant='indented'>
                            Currently in development is the site allowing users to upload their solves. Solvers will be able to register for an account and post their solutions to scrambles to the internet. Users can also browse and view solves in the simulator.
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
                                Javascript, NodeJS, ReactJS, ThreeJS, Webpack, Express, MySQL, JWT
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Link
                            </Text>
                            <NextLink href='https://projects.devinarena.com/UseRoux' passHref>
                                <Link ml={2}>
                                    https://projects.devinarena.com/UseRoux
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.1} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/devinarena/UseRoux' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={simulator} alt='Simulator' />
                    </Box>
                </Grow>

                <Grow delay={1.5} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src={homepage} alt='Homepage' />
                    </Box>
                </Grow>

                <Grow delay={1.7} time={1}>
                    <Box display='flex' justifyContent='center' mt={4}>
                        <Image src={upload} alt='Upload' />
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