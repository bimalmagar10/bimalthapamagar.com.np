import Image from "next/image";
import Footer from '../components/Footer';
import FeaturedPosts from '../components/FeaturedPosts';
import Header from "../components/Header";
import Link from "next/link";
import {
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  SimpleGrid,
  Link as LinkItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  Box,
  Spacer,
  Image as ChakraImage,
  useColorModeValue
} from "@chakra-ui/react";
export default function Home() {
  const imgBorder = useColorModeValue("gray.800","lightwhite");
  const navColor = useColorModeValue("rgba(255, 255, 255, 0.8)","rgba(26, 34, 44,.8)");
  return (
    <Container maxW="80rem">
      <Header/>
      <Flex mb="4rem">
        <VStack spacing="3rem">
          <Flex align="center" justify="space-between" width="100%">
              <Heading fontSize="4.5rem" w="100%" textAlign="left" fontFamily="inherit">Hi!👋 I&rsquo;m Bibek.</Heading>
              <ChakraImage src="/images/profile.jpg" alt="Bimal Thapa Magar" borderRadius="full" boxSize="100px" borderWidth="2px" borderStyle="solid" borderColor={imgBorder}/>
          </Flex>
          <Text fontSize="1.6rem">
            My name is Bimal Thapa Magar.Currently,I’m based in Pokhara,Nepal.
            I am also an engineering ungraduate and currently,at my last year 
            of my road towards pursuing my first ever bachelors degree in 
            Electronics and Communication engineering.I describe myself as a learner,
            ReactJs enthusiast and a music lover who always wants to play a guitar 
            whenever available.
          </Text>
        </VStack>
      </Flex>
      <FeaturedPosts/>
      <Divider mt="1rem"/>
      <HStack p="1rem 0">
         <Image src="/spotify-1.svg" alt="Spotify Icon" width="80" height="80"/>
         <Text fontSize="1.6rem" fontWeight="700">- Not Playing</Text>
      </HStack>
      <Footer/>
    </Container>
  )
}

