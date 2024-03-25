import { Box, Flex, Heading } from "@chakra-ui/react";

const SnippetDetailPage = (props) => {
  const { matters } = props?.snippet;
  return (
    <Flex flexDirection={"column"} gap={"1.5rem"}>
      <Heading fontSize="2.2rem" fontFamily="inherit">
        {matters.title}
      </Heading>
      <Box
        p="0"
        textAlign="justify"
        sx={{
          textJustify: "inter-word",
          hyphens: "auto",
          position: "relative",
        }}
      >
        {props.children}
      </Box>
    </Flex>
  );
};

export default SnippetDetailPage;
