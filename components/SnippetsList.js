import { Box, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { dateFormatter } from "../lib/helpers";

const SnippetsLists = (props) => {
  return (
    <VStack align="flex-start" m="2rem 0" spacing={"1rem"}>
      {props?.data &&
        props?.data?.length > 0 &&
        props?.data?.map((snippet, idx) => (
          <Flex
            key={idx}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={".5rem"}
          >
            <Heading fontSize="2rem" fontFamily="inherit">
              <Link
                as={NextLink}
                href={`/snippets/${snippet?.slug}`}
                style={{ fontWeight: "600" }}
              >
                {snippet?.title}
              </Link>
            </Heading>
            <Box as="time" color="gray.500" fontSize="1.3rem">
              {dateFormatter(snippet?.date)}
            </Box>
          </Flex>
        ))}
    </VStack>
  );
};

export default SnippetsLists;
