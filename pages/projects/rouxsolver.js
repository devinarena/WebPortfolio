import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import Main from "components/layouts/main";

import image1 from "../../public/images/rouxsolver.png";
import image2 from "../../public/images/rouxsolver2.png";
import { Grow, SlideIn } from "components/animated";

const RouxSolver = () => {
  return (
    <Main title="RouxSolver">
      <Container px={8} pt={20} maxW="container.md">
        <SlideIn delay={0} time={1} direction="right">
          <Box display="flex" flexDirection="row" alignItems="flex-end">
            <Heading as="h1" whiteSpace="nowrap">
              RouxSolver
            </Heading>
            <Heading
              as="h3"
              variant="projectDate"
              ml={3}
              borderRadius={5}
              fontSize={{ base: "lg", md: "xl" }}
            >
              October 2021 / June 2022
            </Heading>
          </Box>
        </SlideIn>

        <Box mt={8}>
          <SlideIn delay={0.2} time={1} direction="left">
            <Text variant="indented">
              RouxSolver is a speedcubing AI and web application that can
              generate Roux solutions for any cube state. RouxSolver generates
              solutions to a cube state and demonstrates the solution on a 3D
              speedcubing simulator.
            </Text>
          </SlideIn>
          <SlideIn delay={0.4} time={1} direction="right">
            <Text variant="indented">
              The simulator uses Three.js to render a 3D speedcube. Users can
              generate a random scramble, enter a their own scramble, or type
              moves out to scramble the cube. Users can also view and reverse
              previous moves using the arrow keys.
            </Text>
          </SlideIn>
          <SlideIn delay={0.6} time={1} direction="left">
            <Text variant="indented">
              The AI utilizes masked states, pruning, and an IDDFS search to
              generate solutions for First Block, Second Block, and LSE. CMLL is
              simple state recognition for the AI. The full documented code can
              be found on GitHub.
            </Text>
          </SlideIn>
        </Box>

        <Box mt={8}>
          <SlideIn delay={0.8} time={1} direction="right">
            <Flex alignItems="center">
              <Text variant="projectLabel">Platform</Text>
              <Text ml={2}>Web Application</Text>
            </Flex>
          </SlideIn>
          <SlideIn delay={0.9} time={1} direction="left">
            <Flex alignItems="center" mt={1}>
              <Text variant="projectLabel">Tech Stack</Text>
              <Text ml={2}>Javascript, NodeJS, ThreeJS, Webpack</Text>
            </Flex>
          </SlideIn>
          <SlideIn delay={1.0} time={1} direction="right">
            <Flex alignItems="center" mt={1}>
              <Text variant="projectLabel">Link</Text>
              <NextLink legacyBehavior
                href="https://projects.devinarena.com/RouxSolver"
                passHref
              >
                <Link ml={2} overflowWrap="anywhere" textAlign="center">
                  https://projects.devinarena.com/UseRoux
                </Link>
              </NextLink>
            </Flex>
          </SlideIn>
          <SlideIn delay={1.1} time={1} direction="left">
            <Flex alignItems="center" mt={1}>
              <Text variant="projectLabel">Source</Text>
              <NextLink legacyBehavior
                href="https://github.com/devinarena/RouxSolver"
                passHref
              >
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
          <Box mt={4} alignItems="center">
            <NextLink legacyBehavior href="/projects" passHref>
              <Button
                alignItems="center"
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

export default RouxSolver;
