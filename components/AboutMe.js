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
        Hello there! I&rsquo;m Bimal Thapa Magar, a passionate individual on an
        exciting journey through the realms of technology. With a strong
        foundation in Software Engineering, I&rsquo;ve dedicated myself to the
        dynamic fields of Deep Learning. My inquisitive mindset constantly
        drives me to explore the nuances of artificial intelligence, unraveling
        the mysteries of algorithms and the power of data. As a code weaver, I
        craft intelligent systems that not only meet technical standards but
        also make a meaningful impact. My vision for the future revolves around
        leveraging the full potential of technology to create innovative
        solutions that shape a smarter and more connected world. Join me as I
        navigate the ever-evolving landscape of technology, driven by a
        commitment to continuous learning and a deep love for pushing the
        boundaries of what&rsquo;s possible.
      </Text>
    </>
  );
};

export default AboutMe;
