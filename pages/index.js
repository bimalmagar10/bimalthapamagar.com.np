import Head from "next/head";
import Footer from '../components/Footer';
import FeaturedPosts from '../components/FeaturedPosts';
import Header from "../components/Header";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  Flex,
  VStack,
  Text,
  Heading,
  Divider,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import ProfileImage from "../components/ProfileImage";
import MyTopTracks from "../components/MyTopTracks";

export default function Home() {
  const imgBorder = useColorModeValue("gray.800","lightwhite");
  const navColor = useColorModeValue("rgba(255, 255, 255, 0.8)","rgba(26, 34, 44,.8)");

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Flex mb="4rem">
        <VStack spacing="3rem">
          <Flex align="center" justify="space-between" width="100%">
              <Heading fontSize="4.5rem" zIndex="100" w="100%" textAlign="left" fontFamily="inherit">
                Hi!👋 I&rsquo;m <Text  position="relative" sx={{
                  ":after":{
                    content:'""',
                    position:"absolute",
                    height:"1rem",
                    width:"calc(100% + 10px)",
                    left:"-5%",
                    bottom:"10%",
                    background:"#ffc725",
                    zIndex:-1
                  },
                  display:"inline-block",
                }}>Bimal.</Text>
              </Heading>
               <ProfileImage/>
          </Flex>
          <Text fontSize="1.7rem">
            My name is Bimal Thapa Magar.Currently,I’m based in Pokhara,Nepal.
            I am also an engineering ungraduate and currently,at my last year 
            of my road towards pursuing my first ever bachelors degree in 
            Electronics and Communication engineering.I describe myself as a learner,
            ReactJs enthusiast and a music lover who always wants to play a guitar 
            whenever available.
          </Text>
        </VStack>
      </Flex>
      {/******
        ****** WILL ADD THIS FEATUREdPOSTS FEATURE LATER
        *****<FeaturedPosts/>
        ******
        *******/
      }
      <MyTopTracks/>
      <Divider mt="1rem"/>
    </>
  )
}

