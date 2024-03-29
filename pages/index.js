import { ChevronRightIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Image,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";
import ExperienceEntry from "components/expentry";
import Main from "components/layouts/main";
import { SlideIn, SlideInManual } from "components/animated";
import ThreeLanding from "components/threeLanding";
import Parallax from "components/parallax";
import Footer from "components/footer";
import { useCallback, useEffect, useState } from "react";

/**
 * @file index.js
 * @author Devin Arena
 * @since 12/3/2021
 * @description The homepage for my web portfolio.
 */
const Home = () => {

  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offsets, setOffsets] = useState([]);

  const handleScroll = () => {
    const position = document.getElementById("parallax").scrollTop;
    setScrollY(position);
  };

  const handleMouse = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    if (offsets.length === 0) {
      for (const slider of document.getElementsByClassName("slideInManual")) {
        setOffsets((offsets) => [...offsets, slider.offsetTop]);
      }
    }

    let doc = document.getElementById("parallax");
    doc.addEventListener("scroll", handleScroll);
    doc.addEventListener("mousemove", handleMouse);

    return () => {
      if (doc) {
        doc.removeEventListener("scroll", handleScroll);
        doc.removeEventListener("mousemove", handleMouse);
      }
    }
  }, [handleScroll, setOffsets]);

  /**
   * Listener for the scroll effect
   */

  return (
    <Main titleText="Homepage" noFooter={true}>
      <Parallax>
        <Container
          px={8}
          pt={14}
          mb={14}
          maxW="container.md"
          minHeight="200vh"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="space-between"
        >
          <SlideInManual direction="left" percentage={1 - Math.min(scrollY / offsets[0], 1.0)}>
            <Box sx={{ py: 4 }}>
              <Heading as="h3" variant="sectionTitle">
                About
              </Heading>
              <Text variant="indented">
                My name is Devin Arena, and I&apos;m currently a
                software engineer based in Naples, Florida. I attended
                Florida Gulf Coast University and received a Bachelor&apos;s of
                Science in Software Engineering. I&apos;m interested in backend
                development and embedded systems. In my free time I enjoy
                building projects related to programming languages and working with Linux.
              </Text>

              <Box align="center" mt={3}>
                <NextLink legacyBehavior href="/projects" passHref>
                  <Button
                    align="center"
                    rightIcon={<ChevronRightIcon />}
                    colorScheme="blue"
                    fontSize={{ base: "lg", md: "2xl" }}
                    p={6}
                  >
                    Projects
                  </Button>
                </NextLink>
              </Box>
            </Box>
          </SlideInManual>

          <SlideInManual direction="right" percentage={1 - Math.min(scrollY / offsets[1], 1.0)}>
            <Box sx={{ py: 4 }}>
              <Heading as="h3" variant="sectionTitle">
                Education &amp; Experience
              </Heading>
              <ExperienceEntry date="Aug. 2019 - May 2023">
                Bachelor&apos;s of Science at Florida Gulf Coast
                University
              </ExperienceEntry>
              <ExperienceEntry date="Jan. 2022 - May 2022">
                Embedded Software Engineering Intern at Syracuse Research
                Corporation Inc.
              </ExperienceEntry>
              <Box mt={3} align="center">
                <NextLink legacyBehavior href="/Resume.pdf" passHref>
                  <Button
                    align="center"
                    rightIcon={<InfoIcon />}
                    colorScheme="blue"
                    fontSize={{ base: "lg", md: "2xl" }}
                    p={6}
                  >
                    Resume
                  </Button>
                </NextLink>
              </Box>
            </Box>
          </SlideInManual>

          <SlideInManual direction="left" percentage={1 - Math.min(scrollY / offsets[2], 1.0)} >
            <Box sx={{ py: 4 }}>
              <Heading as="h3" variant="sectionTitle">
                Fun Facts :)
              </Heading>
              <UnorderedList>
                <ListItem><Text>My favorite programming language is C.</Text></ListItem>
                <ListItem><Text>My favorite projects to work on are compilers and interpreters.</Text></ListItem>
                <ListItem><Text>I can solve a Rubik&apos;s cube in {"<"} 30 seconds (PB: 11.47 seconds)</Text></ListItem>
                <ListItem><Text>Soccer, music composition, and playing the piano are some of my other hobbies.</Text></ListItem>
              </UnorderedList>
            </Box>
          </SlideInManual>

          <SlideInManual direction="right" percentage={1 - Math.min(scrollY / offsets[3], 1.0)}>
            <Box sx={{ py: 4 }}>
              <Heading as="h3" variant="sectionTitle">
                Contact
              </Heading>
              <List styleType="none">
                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/devin-arena/"
                    display="inline-flex"
                    alignItems="center"
                    style={{ gap: 4 }}
                    fontSize="3xl"
                  >
                    <AiFillLinkedin />
                    LinkedIn
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://github.com/devinarena"
                    display="inline-flex"
                    alignItems="center"
                    style={{ gap: 4 }}
                    fontSize="3xl"
                  >
                    <VscGithub />
                    GitHub
                  </Link>
                </ListItem>
              </List>
            </Box>
          </SlideInManual>
        </Container>

        <Footer />
      </Parallax>

      <Box sx={{
        display: useColorModeValue("none", { base: "none", md: "block" }),
        position: "fixed", zIndex: 999,
        pointerEvents: "none", w: 80, h: 80,
        borderRadius: "50%", bg: "radial-gradient(#fff, #333)",
        filter: "blur(20px)",
        top: `${mousePosition.y - 160}px`, left: `${mousePosition.x - 160}px`, opacity: 0.025
      }}>

      </Box>
    </Main>
  );
};

export default Home;
