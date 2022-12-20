/**
 * @file parallax.js
 * @author Devin Arena
 * @description Parallax effect for the landing page.
 * @since 11/25/2022
 **/

import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Link,
  Image,
  keyframes,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SlideIn } from "./animated";
import ThreeLanding from "./threeLanding";
import NextLink from "next/link";

const Parallax = ({ children }) => {
  const layer0 = "/images/parallax/layer0.png";
  const layer1 = "/images/parallax/layer1.png";
  const layer2 = "/images/parallax/layer2.png";
  const layer3 = "/images/parallax/layer3.png";
  const lightlayer0 = "/images/parallax/light_layer0.png";
  const lightlayer1 = "/images/parallax/light_layer1.png";
  const lightlayer2 = "/images/parallax/light_layer2.png";
  const lightlayer3 = "/images/parallax/light_layer3.png";

  const kf = keyframes`
  0% {
    transform: scale(1.0);
    opacity: 0.25;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.75;
  }
  `;
  const animation = `${kf} 1s ease-in-out infinite alternate`;

  return (
    <Box
      id="parallax"
      sx={{
        w: "100%",
        h: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        perspective: "10px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          w: "100%",
          h: "100%",
          transformStyle: "preserve-3d",
          zIndex: -10,
        }}
      >
        <Image
          src={useColorModeValue(lightlayer0, layer0)}
          alt="Layer 0"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "translateZ(-40px) scale(5.1)",
            overflow: "hidden",
            zIndex: -999,
          }}
        ></Image>
        <Image
          src={useColorModeValue(lightlayer1, layer1)}
          alt="Layer 1"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "translateZ(-30px) scale(4.1)",
            overflow: "hidden",
            zIndex: -999,
          }}
        ></Image>
        <Image
          src={useColorModeValue(lightlayer2, layer2)}
          alt="Layer 2"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "translateZ(-20px) scale(3.1)",
            overflow: "hidden",
            zIndex: -999,
          }}
        ></Image>
        <Image
          src={useColorModeValue(lightlayer3, layer3)}
          alt="Layer 3"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "translateZ(-10px) scale(2.1)",
            overflow: "hidden",
            zIndex: -999,
          }}
        ></Image>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <ThreeLanding />
        </Box>

        <SlideIn delay={0} time={1} direction="right">
          <Box
            display="flex"
            width="100%"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              marginRight={{ base: "0", md: "10" }}
            >
              <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
                Devin Arena
              </Heading>
              <Text fontSize={{ base: "lg", md: "2xl" }}>
                Software Engineer
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
                maxWidth={{ base: 150, lg: 250 }}
                mt={3}
              ></Image>
            </Box>
          </Box>
        </SlideIn>

        <Box
          as={motion.div}
          animation={animation}
          sx={{
            position: "absolute",
            bottom: 5,
          }}
        >
          <Link
            onClick={() => {
              console.log(window.innerHeight);
              document.getElementById("parallax").scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            About
            <TriangleDownIcon
              sx={{
                fontSize: 36,
              }}
            />
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          zIndex: 50,
          width: "100%",
          minHeight: "200vh",
          backgroundColor: useColorModeValue("bg.light", "bg.dark"),
          transition: "background-color 1s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Parallax;
