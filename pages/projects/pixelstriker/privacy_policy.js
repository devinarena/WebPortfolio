import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import Main from "components/layouts/main";

import NextLink from "next/link";

const PixelStrikerPrivacyPolicy = () => {
  return (
    <Main title="Pixel Striker">
      <Container px={8} pt={20} maxW="container.md">
        <Heading as="h1" whiteSpace="nowrap">
          Pixel Striker Privacy Policy
        </Heading>

        <Box mt={8}>
          <Text variant="indented">
            Pixel Striker is independently developed and does not contain
            advertisements or any kind of data tracking. Pixel Striker only
            saves game-data locally on the users device. Pixel Striker is open
            source software
            <NextLink legacyBehavior
              href="https://github.com/devinarena/Pixel-Striker"
              passHref
            >
              <Link>[1]</Link>
            </NextLink>
            .
          </Text>
          <Text variant="indented">
            Pixel Striker is a child-friendly game and ensures the privacy and
            safety of all of its users. Pixel Striker does not directly collect
            any personal information from its users. Pixel Striker does
            optionally integrate with Google Play Games Services.
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="md" whiteSpace="nowrap">
            Optional Google Play Games Services
          </Heading>
          <Text variant="indented">
            Pixel Striker integrates with Google Play Games Services for
            leaderboards and achievements. Users who choose to integrate with
            Google Play Games Services will be required to sign in with a Google
            account. Users who sign into Google Play Games Services are subject
            to their privacy policy.
          </Text>
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="md" whiteSpace="nowrap">
            Privacy Policy Concerns
          </Heading>
          <Text variant="indented">
            Any questions or concerns may be directed to{" "}
            <NextLink legacyBehavior href="mailto:devinarena03@gmail.com" passHref>
              <Link>devinarena03@gmail.com</Link>
            </NextLink>
            .
          </Text>
        </Box>
      </Container>
    </Main>
  );
};

export default PixelStrikerPrivacyPolicy;
