"use client";
import {
  Flex,
  Text,
  Divider,
  Box,
  useColorModeValue,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import Head from "next/head";
import { IoLocationOutline } from "react-icons/io5";
import Header from "./Header";
import AboutMe from "./AboutMe";
import ProfileImage from "./ProfileImage";

const AboutMeRoot = () => {
  const aboutTextColor = useColorModeValue("lightgrayish", "gray.400");
  const contactBorder = useColorModeValue("#deecff", "#2c2c2c");
  const inputColor = useColorModeValue("white", "#2c2c2c");
  const imgBorder = useColorModeValue("gray.900", "lightwhite");

  return (
    <>
      <Flex direction="row" align="center" mb="3rem">
        <ProfileImage />
        <Box ml="1rem">
          <Text fontWeight="700" fontSize="2rem">
            Bimal Thapa
          </Text>
          <Text fontSize="1.6rem" fontWeight="500" color={aboutTextColor}>
            Software Engineer
          </Text>
          <Tooltip label="Kathmandu,Nepal" fontSize="1.3rem">
            <Text
              fontSize="1.6rem"
              fontWeight="400"
              p={0}
              color={aboutTextColor}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Icon as={IoLocationOutline} pt="1" />
              <Box
                as="span"
                fontSize="1.3rem"
                style={{ display: "inline-block", marginTop: "3px" }}
              >
                Nepal
              </Box>
            </Text>
          </Tooltip>
        </Box>
      </Flex>
      <AboutMe />
      <Divider mt="1rem" />
    </>
  );
};

export default AboutMeRoot;
