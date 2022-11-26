import styles from "../components/styles/images.module.css";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import Main from "components/layouts/main";
import Image from "next/image";
import NextLink from "next/link";

import minesweeperAI from "../public/images/minesweeperai_card.png";
import apptracker from "../public/images/apptracker-desktop.png";
import pixelstriker from "../public/images/pixelstriker_card.png";
import productlog from "../public/images/productlog_card.png";
import tgraph from "../public/images/tgraph_card.png";
import rouxsolver from "../public/images/rouxsolver_card.png";
import { Grow, SlideIn } from "components/animated";

/**
 * @file projects.js
 * @author Devin Arena
 * @since 12/5/2021
 * @description Projects page, displays list of projects as tiles.
 */
const Projects = () => {
  const ProjectItem = ({ children, image, id, title }) => {
    return (
      <Flex w="100%" direction="column" justify="flex-start" alignItems="center">
        <NextLink legacyBehavior href={`projects/${id}`} passHref>
          <LinkBox
            cursor="pointer"
            textAlign="center"
            transition="color 1s ease"
            _hover={{ color: "blue.500" }}
          >
            <Image
              className={styles.projectCard}
              src={image}
              alt={title}
              placeholder="blur"
              loading="lazy"
              layout="intrinsic"
            />
            <Heading as="h3" fontSize="2xl" mt={1}>
              {title}
            </Heading>
            <Text mt={1}>{children}</Text>
          </LinkBox>
        </NextLink>
      </Flex>
    );
  };

  return (
    <Main titleText="Projects">
      <Container px={8} pt={20} maxW="container.md">
        <SlideIn delay={0} time={1} direction="right">
          <Box display="flex" flexDirection="column">
            <Heading as="h1" fontSize={{ base: "5xl" }}>
              Projects
            </Heading>
            <Text fontSize={{ base: "kg", md: "xl" }}>
              Some of my best and most interesting software projects.
            </Text>
          </Box>
        </SlideIn>

        <SimpleGrid mt={8} columns={[1, 2, 2, 3]} gap={5}>
          <Grow delay={0.4} time={0.8}>
            <ProjectItem image={rouxsolver} title="RouxSolver" id="rouxsolver">
              An interactive 3D speedcubing simulator with a built in Roux
              solver.
            </ProjectItem>
          </Grow>
          <Grow delay={0.6} time={0.8}>
            <ProjectItem image={tgraph} title="TGraph" id="tgraph">
              A C++ command-line interface for graphing equations.
            </ProjectItem>
          </Grow>
          {/* <Grow delay={0.6} time={0.8}>
            <ProjectItem
              image={pixelbackground}
              title="Pixel Background"
              id="pixelbackground"
            >
              Generate amazing pixel art wallpapers using images from your
              favorite subreddits.
            </ProjectItem>
          </Grow> */}
          <Grow delay={0.8} time={0.8}>
            <ProjectItem image={apptracker} title="AppTracker" id="apptracker">
              A web application for tracking internship/job applications.
            </ProjectItem>
          </Grow>
          <Grow delay={1.0} time={0.8}>
            <ProjectItem
              image={pixelstriker}
              title="Pixel Striker"
              id="pixelstriker"
            >
              An endless arcade-style mobile soccer game.
            </ProjectItem>
          </Grow>
          <Grow delay={1.2} time={0.8}>
            <ProjectItem image={productlog} title="Product Log" id="productlog">
              A mobile application for tracking product purchases and collections.
            </ProjectItem>
          </Grow>
          <Grow delay={1.4} time={0.8}>
            <ProjectItem
              image={minesweeperAI}
              title="Minesweeper AI"
              id="minesweeperai"
            >
              An AI that solves mineweeper puzzles using real tactics.
            </ProjectItem>
          </Grow>
        </SimpleGrid>
      </Container>
    </Main>
  );
};

export default Projects;
