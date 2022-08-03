import {
	Flex,
	Text,
	Divider,
	Box,
	useColorModeValue,
	Icon,
	Tooltip,
} from "@chakra-ui/react";
import Head from "next/head";
import {MdLocationPin} from "react-icons/md";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import ProfileImage from "../components/ProfileImage";
export default function Contact(){
	const contactBg = useColorModeValue("lightwhite","gray.900");
	const contactBorder = useColorModeValue("#deecff","#2c2c2c");
	const inputColor= useColorModeValue("white","#2c2c2c");
	const imgBorder = useColorModeValue("gray.900","lightwhite");
	return (
		<>
		    <Head>
		    	<title>About Me</title>
		    </Head>
		    <Header/>
			<Flex direction="row" align="center" mb="3rem">
				<ProfileImage/>
				<Box ml="1rem">
					<Text fontWeight="700" fontSize="2rem">Bimal Thapa Magar</Text>
					<Text fontSize="1.6rem">Electronics and Communication Engineer<br/>Web Developer</Text>
					<Tooltip label="Kathmandu,Nepal" fontSize="1.6rem">
						<Text fontSize="1.6rem" fontWeight="400" p={0}>
							 <Icon as={MdLocationPin} pt="1"/>Kathmandu&sbquo;Nepal
						</Text>
					</Tooltip>
				</Box>
			</Flex>
			<AboutMe/>
			<Divider mt="1rem"/>
		</>
	);
}