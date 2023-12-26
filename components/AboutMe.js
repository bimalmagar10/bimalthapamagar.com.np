import {
  Heading,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
  Button,
  Flex,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { aboutMeStyles, hiAnimation } from "../styles/custom-styles";
import { skillsLists } from "../lib/helpers";
const AboutMe = () => {
  const skillsColor = useColorModeValue("#086F83", "#9DECF9");
  return (
    <>
      <Text
        fontSize="1.6rem"
        mb="4rem"
        lineHeight="1.8"
        textAlign="justify"
        sx={{
          textJustify: "inter-word",
          hyphens: "auto",
        }}
      >
        Hello there! I&rsquo;m Bimal Thapa, a passionate individual on an
        exciting journey through the realms of technology. With a strong
        foundation in Software Engineering, I've dedicated myself to the dynamic
        fields of Machine Learning, Computer Vision, and Natural Language
        Processing. My inquisitive mindset constantly drives me to explore the
        nuances of artificial intelligence, unraveling the mysteries of
        algorithms and the power of data. As a code weaver, I craft intelligent
        systems that not only meet technical standards but also make a
        meaningful impact. My vision for the future revolves around leveraging
        the full potential of technology to create innovative solutions that
        shape a smarter and more connected world. Join me as I navigate the
        ever-evolving landscape of technology, driven by a commitment to
        continuous learning and a deep love for pushing the boundaries of what's
        possible.
      </Text>
      <Flex justify="space-between" align="center" mb="4rem">
        <Heading fontSize="2.5rem" letterSpacing="1px">
          Skills
        </Heading>
        <Box as={motion.div} animation={hiAnimation}>
          <Button
            as="a"
            href="mailto:bimalmagar873@gmail.com"
            size="lg"
            fontSize="1.6rem"
            p="1.5rem 2rem"
            colorScheme="teal"
          >
            Say Hi,👋!
          </Button>
        </Box>
      </Flex>
      <SimpleGrid
        columns={[2, null, 2]}
        p={{ base: "2rem", md: "4rem" }}
        spacing="1rem 5rem"
        border="1px solid #E2E8F0"
      >
        {skillsLists.map(({ name }, index) => (
          <Box key={index} p="1rem 2.5rem" sx={aboutMeStyles(skillsColor)}>
            <Box
              as="span"
              mr="2rem"
              fontSize={{ base: "1.2rem", md: "1.4rem" }}
            >
              {name}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AboutMe;
