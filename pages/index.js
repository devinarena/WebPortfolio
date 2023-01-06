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
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";
import ExperienceEntry from "components/expentry";
import Main from "components/layouts/main";
import { SlideIn } from "components/animated";
import ThreeLanding from "components/threeLanding";
import Parallax from "components/parallax";
import Footer from "components/footer";

/**
 * @file index.js
 * @author Devin Arena
 * @since 12/3/2021
 * @description The homepage for my web portfolio.
 */
const Home = () => {
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
          <SlideIn delay={0.4} time={1} direction="left">
            <Box>
              <Heading as="h3" variant="sectionTitle">
                About
              </Heading>
              <Text variant="indented">
                My name is Devin Arena, and I&apos;m currently a student and
                software engineer based in Naples, Florida. I currently attend
                Florida Gulf Coast University pursuing a Bachelor&apos;s of
                Science in Software Engineering. I&apos;m interested in web
                development and embedded systems, especially compilers. In my free time I enjoy
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
          </SlideIn>

          <SlideIn delay={0.8} time={1} direction="right">
            <Box>
              <Heading as="h3" variant="sectionTitle">
                Education &amp; Experience
              </Heading>
              <ExperienceEntry date="Aug. 2019 - Present">
                Pursuing Bachelor&apos;s of Science at Florida Gulf Coast
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
          </SlideIn>

          <SlideIn delay={1.2} time={1} direction="left">
            <Box>
              <Heading as="h3" variant="sectionTitle">
                Fun Facts :)
              </Heading>
              <UnorderedList>
                <ListItem><Text>My favorite programming language is C.</Text></ListItem>
                <ListItem><Text>My favorite projects to work on are compilers and interpreters.</Text></ListItem>
                <ListItem><Text>I can solve a Rubik's cube in {"<"} 30 seconds (PB: 11.47 seconds)</Text></ListItem>
                <ListItem><Text>Soccer, music composition, and playing the piano are some of my other hobbies.</Text></ListItem>
              </UnorderedList>
            </Box>
          </SlideIn>

          <SlideIn delay={1.6} time={1} direction="right">
            <Box>
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
          </SlideIn>
        </Container>

        <Footer />
      </Parallax>
    </Main>
  );
};

export default Home;
