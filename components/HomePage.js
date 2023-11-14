'use client';

import {
  Flex,
  VStack,
  Text,
  Heading,
  Divider,
  Box,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import ProfileImage from "./ProfileImage";
import MyTopTracks from "./MyTopTracks";
import { waveAnimation } from "../styles/custom-styles";
import {motion} from "framer-motion";
import NextLink from "next/link";

const HomePage = () => {
    const imgBorder = useColorModeValue("gray.800","lightwhite");
    const navColor = useColorModeValue("rgba(255, 255, 255, 0.8)","rgba(26, 34, 44,.8)");

    return (
        <>
            <Flex mb="4rem">
                <VStack spacing="2.5rem">
                <Flex align="center" justify="space-between" width="100%">
                    <Heading fontSize="4.5rem" zIndex="100" w="100%" textAlign="left" fontFamily="inherit">
                        Hi!&nbsp;<Box as={motion.span} animation={waveAnimation} style={{display:"inline-block"}}>👋</Box> I&rsquo;m <Text  position="relative" sx={{
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
                        fontFamily:'var(--font-open_sans)'
                        }}>Bimal.</Text>
                    </Heading>
                    <ProfileImage/>
                </Flex>
                <Text fontSize="1.65rem" lineHeight="1.5" textAlign="justify" sx={{
                    textJustify:"inter-word",
                    hyphens:"auto"
                }}>
                    My name is Bimal Thapa Magar.Currently,I&rsquo;m based in Kathmandu,Nepal.
                    I am a dedicated software engineer with a passion for React.js, specializing 
                    in the development of expansive frontend applications using cutting-edge technologies. 
                    With a wealth of experience, I excel in crafting and deploying web applications, as well 
                    as contributing to mobile app development.My expertise extends to not only writing efficient 
                    and scalable code but also articulating insights about software through written content.
                    Don&rsquo;t forget to check out the naivete blogs that I have written in my site <Link as={NextLink} href="/blogs" color="blue.400">here</Link>.
                    <br/>
                    <br/>
                    Beyond coding, my guitar strings resonate with inspiration. My dual passion for technology and 
                    music shapes a well-rounded approach to life and work.Just as a musician 
                    refines each note, I craft software solutions with precision and innovation. Join me on this melodic 
                    journey through the world of technology and music.
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
    );
};

export default HomePage;