import { Box } from "@chakra-ui/layout";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Head from "next/head";

/**
 * @file main.js
 * @author Devin Arena
 * @since 12/3/2021
 * @description Main container, used for formatting.
 */
const Main = ({ children, titleText, noFooter }) => {
  return (
    <Box as="main">
      <Head>
        <title>{titleText.toString() + " - Devin Arena"}</title>
      </Head>

      <Navbar />

      {children}

      {!noFooter && <Footer />}
    </Box>
  );
};

export default Main;
