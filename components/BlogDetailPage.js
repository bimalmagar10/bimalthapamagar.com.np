"use client";
import NextLink from "next/link";
import {
  Box,
  Divider,
  HStack,
  Text,
  Heading,
  VStack,
  Image as ChakraImage,
  useColorModeValue,
  Link,
  Icon,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { timeFormatter } from "../lib/helpers";

const BlogDetailPage = (props) => {
  const { matters } = props?.post;
  const backBtnColor = useColorModeValue("blue.500", "blue.300");

  return (
    <div className="blog__details">
      <VStack align="flex-start" mb="2rem">
        <Heading
          fontSize="4rem !important"
          fontFamily="inherit"
          marginBottom=".5rem"
        >
          {matters.title}
        </Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          fontSize="1.6rem"
          gap={{ base: ".2rem", md: "1rem" }}
        >
          <Flex alignItems="center">
            <ChakraImage
              mr=".5rem"
              src="/images/profile-image.jpg"
              objectFit="cover"
              alt="Bimal Thapa Magar"
              borderRadius="full"
              boxSize="40px"
            />
            <Text>Bimal Thapa Magar</Text>
          </Flex>
          <Flex alignItems={"center"} gap={".5rem"}>
            <Text p="0 .3rem 0 .5rem" color="gray.500">
              {timeFormatter(matters.date, matters.time)} ago
            </Text>
            <Text fontSize="3rem">&#8901;</Text>
            <Text>{matters.readingTime.text}</Text>
            <Text fontSize="4rem">&#8902;</Text>
          </Flex>
        </Flex>
      </VStack>
      <Link
        as={NextLink}
        href="/blogs"
        sx={{
          ":hover > :nth-of-type(1)": {
            transform: "translateX(-.5rem)",
          },
          ":hover > :nth-of-type(2)": {
            transform: "translateX(.5rem)",
          },
          ":active": {
            outline: "none",
          },
        }}
      >
        <Icon
          transition="all .4s ease"
          as={ChevronLeftIcon}
          h={19}
          w={19}
          color={backBtnColor}
        />
        <Box
          transition="all .4s ease"
          ml="-5px"
          fontSize="1.6rem"
          display="inline-block"
          color={backBtnColor}
        >
          Back
        </Box>
      </Link>
      <Box
        p="2.5rem 1.5rem"
        textAlign="justify"
        sx={{
          textJustify: "inter-word",
          hyphens: "auto",
        }}
      >
        <Text fontSize="1.8rem" mb="3rem">
          {matters.shortTheme}
        </Text>
        {props.children}
      </Box>
      <Divider mt="1rem" />
    </div>
  );
};

export default BlogDetailPage;
