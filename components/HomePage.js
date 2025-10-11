"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { waveAnimation } from "../styles/custom-styles";
import MyTopTracks from "./MyTopTracks";
import ProfileImage from "./ProfileImage";

const HomePage = () => {
  return (
    <>
      <Flex mb="4rem">
        <VStack spacing="2.5rem">
          <Flex align="center" justify="space-between" width="100%">
            <Heading
              fontSize="4.5rem"
              zIndex="100"
              w="100%"
              textAlign="left"
              fontFamily="inherit"
            >
              Hi!&nbsp;
              <Box
                as={motion.span}
                animation={waveAnimation}
                style={{ display: "inline-block" }}
              >
                👋
              </Box>{" "}
              I&rsquo;m{" "}
              <Text
                position="relative"
                sx={{
                  ":after": {
                    content: '""',
                    position: "absolute",
                    height: "1rem",
                    width: "calc(100% + 10px)",
                    left: "-5%",
                    bottom: "10%",
                    background: "#ffc725",
                    zIndex: -1,
                  },
                  display: "inline-block",
                  fontFamily: "var(--font-open_sans)",
                }}
              >
                Bimal.
              </Text>
            </Heading>
            <ProfileImage />
          </Flex>
          <Text fontSize="1.65rem" lineHeight="1.5" textAlign="justify">
            My name is Bimal Thapa Magar. I am currently based in the &nbsp;
            <strong>United States of America</strong>. I love to train deep
            neural networks. I am passionate about making efficient large
            language models and how can we make it environment friendly. I also
            can build scalable software applications. I have 3.5 years of
            experience working as a software engineer. In my free time, I love
            to play guitar and write songs.Other than that, I can cook a lost of
            South Asian dishes.I love <strong>cooking</strong> more than eating.
          </Text>
        </VStack>
      </Flex>
      <MyTopTracks />
      <Divider mt="1rem" />
    </>
  );
};

export default HomePage;
