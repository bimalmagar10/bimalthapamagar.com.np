import { Text, useColorModeValue } from "@chakra-ui/react";
const AboutMe = () => {
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
        Hello there! I&rsquo;m Bimal Thapa Magar.I love to train neural networks
        and I love playing guitar a lot.
      </Text>
    </>
  );
};

export default AboutMe;
