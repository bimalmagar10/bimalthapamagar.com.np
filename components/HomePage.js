"use client";

import {
  Flex,
  VStack,
  Text,
  Heading,
  Divider,
  Box,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import ProfileImage from "./ProfileImage";
import MyTopTracks from "./MyTopTracks";
import { waveAnimation } from "../styles/custom-styles";
import { motion } from "framer-motion";
import NextLink from "next/link";

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
            My name is Bimal Thapa Magar.Currently,I&rsquo;m based in Nepal. I
            am a dedicated software engineer with a passion for React.js
            ,&nbsp;Machine Learning (
            <b>
              Natural Language Processing, Computer Vision ,Image Processing and
              Computer Security
            </b>
            ).My expertise extends to not only writing efficient and scalable
            code but also articulating insights about software through written
            content. Don&rsquo;t forget to check out the naivete blogs that I
            have written in my site{" "}
            <Link as={NextLink} href="/blogs" color="blue.400">
              here
            </Link>
            .
            <br />
            <br />
            Beyond coding, my guitar strings resonate with inspiration. My dual
            passion for technology and music shapes a well-rounded approach to
            life and work.Just as a musician refines each note, I craft software
            solutions with precision and innovation. Join me on this melodic
            journey through the world of technology and music.
          </Text>
        </VStack>
      </Flex>
      {/******
       ****** WILL ADD THIS FEATUREdPOSTS FEATURE LATER
       *****<FeaturedPosts/>
       ******
       *******/}
      <MyTopTracks />
      <Divider mt="1rem" />
    </>
  );
};

export default HomePage;
