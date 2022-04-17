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
} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";
import ExperienceEntry from "components/expentry";
import Main from "components/layouts/main";
import { SlideIn } from "components/animated";

/**
 * @file index.js
 * @author Devin Arena
 * @since 12/3/2021
 * @description The homepage for my web portfolio.
 */
const Home = () => {
  return (
    <Main title="Homepage">
      <Container px={8} pt={20} maxW="container.md">
        <SlideIn delay={0} time={1} direction="right">
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" flexDirection="column">
              <Heading as="h1" fontSize={{ base: "5xl" }}>
                Devin Arena
              </Heading>
              <Text fontSize={{ base: "xl", md: "2xl" }}>
                Student and Software Engineer
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/me.jpg"
                alt="Devin Arena"
                borderWidth="5px"
                borderStyle="solid"
                borderColor="blue.700"
                borderRadius="50%"
                maxW={200}
                mt={3}
              ></Image>
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={0.4} time={1} direction="left">
          <Box mt={4}>
            <Heading as="h3" variant="sectionTitle">
              About
            </Heading>
            <Text variant="indented">
              My name is Devin Arena, and I&apos;m currently a student and
              software engineer based in Naples, Florida. I currently attend
              Florida Gulf Coast University pursuing a Bachelor&apos;s of
              Science in Software Engineering. I&apos;ve been programming and
              tinkering with computers since I was a kid and have always enjoyed
              it. In my freetime, I like to learn about embedded systems, linux,
              and computer hardware.
            </Text>

            <Box align="center" mt={3}>
              <NextLink href="/projects" passHref>
                <Button
                  align="center"
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="blue"
                >
                  Projects
                </Button>
              </NextLink>
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={0.8} time={1} direction="right">
          <Box mt={8}>
            <Heading as="h3" variant="sectionTitle">
              Education &amp; Experience
            </Heading>
            <ExperienceEntry date="2019 - Present">
              Pursuing Bachelor&apos;s of Science at Florida Gulf Coast
              University
            </ExperienceEntry>
            <ExperienceEntry date="Spring 2022">
              Embedded Software Engineering Intern at Syracuse Research
              Corporation Inc.
            </ExperienceEntry>
            <Box mt={3} align="center">
              <NextLink href="/Resume.pdf" passHref>
                <Button
                  align="center"
                  rightIcon={<InfoIcon />}
                  colorScheme="blue"
                >
                  Resume
                </Button>
              </NextLink>
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={1.2} time={1} direction="left">
          <Box mt={8}>
            <Heading as="h3" variant="sectionTitle">
              Hobbies
            </Heading>
            <Text>
              Game Development, Developing Apps, Building Websites, Speedcubing,
              Music Theory, Piano, Soccer
            </Text>
          </Box>
        </SlideIn>

        <SlideIn delay={1.6} time={1} direction="right">
          <Box mt={8}>
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
                  fontSize="2xl"
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
                  fontSize="2xl"
                >
                  <VscGithub />
                  GitHub
                </Link>
              </ListItem>
            </List>
          </Box>
        </SlideIn>
      </Container>
    </Main>
  );
};

export default Home;
