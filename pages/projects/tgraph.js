import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import Main from "components/layouts/main";

import image1 from "../../public/images/tgraph_startup.png";
import image2 from "../../public/images/tgraph_parabola.png";
import image3 from "../../public/images/tgraph_complex.png";
import { Grow, SlideIn } from "components/animated";

const TGraph = () => {
  return (
    <Main title="TGraph">
      <Container px={8} pt={20} maxW="container.md">
        <SlideIn delay={0} time={1} direction="right">
          <Box display="flex" flexDirection="row" alignItems="flex-end">
            <Heading as="h1" whiteSpace="nowrap">
              TGraph
            </Heading>
            <Heading
              as="h3"
              variant="projectDate"
              ml={3}
              borderRadius={5}
              fontSize={{ base: "lg", md: "xl" }}
            >
              June 2022 - July 2022
            </Heading>
          </Box>
        </SlideIn>

        <Box mt={8}>
          <SlideIn delay={0.2} time={1} direction="left">
            <Text variant="indented">
              TGraph is an open-source C++ application built for graphing
              equations directly in the terminal. TGraph can graph any equation
              in the form of y=f(x). TGraph provides support for mathematical
              operators, trigonometric functions, and other mathematical
              functions. TGraph also has helper commands for controlling step
              size/zoom, displaying the graph, saving output, etc.
            </Text>
          </SlideIn>
          <SlideIn delay={0.4} time={1} direction="right">
            <Text variant="indented">
              TGraph utilizes a scanner, Pratt Parser, and recursive descent to
              parse equations. Parsed equations produce a list of operations to
              run for all points on the graph.
            </Text>
          </SlideIn>
          <SlideIn delay={0.6} time={1} direction="left">
            <Text variant="indented">
              TGraph was built using pure C++ and supports both Windows and
              Linux. Instructions for building and installing TGraph are located
              on the GitHub Page.
            </Text>
          </SlideIn>
        </Box>

        <Box mt={8}>
          <SlideIn delay={0.8} time={1} direction="right">
            <Flex align="center">
              <Text variant="projectLabel">Platform</Text>
              <Text ml={2}>Native Application</Text>
            </Flex>
          </SlideIn>
          <SlideIn delay={0.9} time={1} direction="left">
            <Flex align="center" mt={1}>
              <Text variant="projectLabel">Tech Stack</Text>
              <Text ml={2}>C++</Text>
            </Flex>
          </SlideIn>
          <SlideIn delay={1.0} time={1} direction="right">
            <Flex align="center" mt={1}>
              <Text variant="projectLabel">Link</Text>
              <NextLink href="https://github.com/devinarena/TGraph" passHref>
                <Link ml={2} overflowWrap="anywhere" textAlign="center">
                  https://github.com/devinarena/TGraph
                </Link>
              </NextLink>
            </Flex>
          </SlideIn>
          <SlideIn delay={1.1} time={1} direction="left">
            <Flex align="center" mt={1}>
              <Text variant="projectLabel">Source</Text>
              <NextLink href="https://github.com/devinarena/TGraph" passHref>
                <Link ml={2}>GitHub</Link>
              </NextLink>
            </Flex>
          </SlideIn>
        </Box>

        <Grow delay={1.3} time={1}>
          <Box display="flex" justifyContent="center" mt={8}>
            <Image src={image1} alt="Simulator Image A" />
          </Box>
        </Grow>

        <Grow delay={1.5} time={1}>
          <Box display="flex" justifyContent="center" mt={4}>
            <Image src={image2} alt="Simulator Image B" />
          </Box>
        </Grow>

        <Grow delay={1.7} time={1}>
          <Box display="flex" justifyContent="center" mt={4}>
            <Image src={image3} alt="Simulator Image C" />
          </Box>
        </Grow>

        <Grow delay={1.9} time={1}>
          <Box mt={4} align="center">
            <NextLink href="/projects" passHref>
              <Button
                align="center"
                leftIcon={<ChevronLeftIcon />}
                colorScheme="blue"
              >
                Projects
              </Button>
            </NextLink>
          </Box>
        </Grow>
      </Container>
    </Main>
  );
};

export default TGraph;
