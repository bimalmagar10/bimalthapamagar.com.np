"use client";
import { useState } from "react";
import {
  Text,
  Heading,
  VStack,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Alert,
  Center,
} from "@chakra-ui/react";
import { SearchIcon, WarningIcon } from "@chakra-ui/icons";
import PostItemOverlay from "./PostItemOverlay";

const BlogsPage = ({ allSortedBlogs }) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogs =
    allSortedBlogs && allSortedBlogs?.length > 0
      ? allSortedBlogs.filter((blog, index) => {
          return blog.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : [];

  return (
    <>
      <VStack align="flex-start" mb="2rem">
        <Heading fontSize="3rem" fontFamily="inherit" mb="1rem">
          Blogs-Bimal Thapa Magar
        </Heading>
        <Text fontSize="1.6rem">
          I&apos;ve written these blogs that might help you excel some of the
          skills, you lack.Therefore,feel free to read them by searching topics
          of your interest that might me complementary with mine.
        </Text>
      </VStack>
      <Box p=".2rem" rounded="lg">
        <InputGroup>
          <Input
            p="2rem 2rem"
            type="text"
            fontSize="1.4rem"
            placeholder="Search posts"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <InputRightElement top=".85rem" right="1rem">
            <Icon as={SearchIcon} />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Heading fontSize="2.5rem" fontFamily="inherit" m="2rem 0">
        All Posts
      </Heading>
      {!filteredBlogs.length && (
        <>
          <Center>
            <Alert status="error">
              <WarningIcon mr="1rem" color="crimson" />
              No Posts Found!
            </Alert>
          </Center>
        </>
      )}
      {filteredBlogs.map((blog, idx) => (
        <PostItemOverlay
          key={idx}
          slug={blog.slug}
          title={blog.title}
          date={blog.date}
          summary={blog.shortTheme}
        />
      ))}
    </>
  );
};

export default BlogsPage;
