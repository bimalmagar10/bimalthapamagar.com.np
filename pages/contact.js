import {
	Container,
	Heading,
	Link,
	Flex,
	HStack,
	Text,
	Divider,
	FormControl,
	FormLabel,
	Textarea,
	Input,
	Box,
	Button,
	FormErrorMessage,
	FormHelperText,
	useColorModeValue,
	Image as ChakraImage,
	Icon,
	Tooltip,
	Badge
} from "@chakra-ui/react";
import {FaRegPaperPlane} from "react-icons/fa";
import {GoLocation} from "react-icons/go";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
console.log(process.cwd());
export default function Contact(){
	const contactBg = useColorModeValue("lightwhite","gray.900");
	const contactBorder = useColorModeValue("#deecff","#2c2c2c");
	const inputColor= useColorModeValue("white","#2c2c2c");
	const imgBorder = useColorModeValue("gray.900","lightwhite");
	return (
		<Container maxW="80rem">
		    <Header/>
			<Flex direction="row" align="center">
                <ChakraImage src="/images/profile.jpg" alt="Bimal Thapa Magar" borderRadius="full" boxSize="100px" borderWidth="2px" borderStyle="solid" borderColor={imgBorder}/>
				<Box ml="1rem">
					<Text fontWeight="700" fontSize="1.8rem">Bimal Thapa Magar</Text>
					<Text fontSize="1.4rem">Electronics and Communication Engineer <Badge ml=".1rem" fontSize="lg" colorScheme="green">Running</Badge><br/>Web Developer</Text>
					<Tooltip label="Institute of Engineering affiliated to Tribhuwan University in Nepal" fontSize="1.4rem">
						<Text fontSize="1.4rem" fontWeight="bold"><Icon as={GoLocation}/>&nbsp;IOE(TU)&sbquo;Pokhara&sbquo;Nepal</Text>
					</Tooltip>
				</Box>
			</Flex>
			<Box bg={contactBorder} p=".2rem" mt="5rem" mb="4rem">
				<Box bg={contactBg} p={["2rem 1rem 3rem 1rem","2rem 2rem 3rem 2rem"]}>
				    <Heading mb=".8rem">Contact Me</Heading>
				    <Text fontSize="1.4rem" mb="1rem">Send me your message and get to reach me 😀</Text>
					<form>
						<Box position="relative">
							<Input p="2rem 1rem" fontSize={["1.2rem","1.4rem"]} placeholder="Enter your message here" bg={inputColor} border="none"/>
							<Button leftIcon={<FaRegPaperPlane/>} position={["relative","absolute"]} top={["0","50%"]} right={["0","1rem"]} transform={["translate(0,0)","translate(0,-50%)"]} zIndex={100} fontSize="1.4rem" colorScheme="blue" mt={["1rem","0"]}>Send</Button>
						</Box>
					</form>
				</Box>
			</Box>
			<Divider mt="1rem"/>
			<HStack p="1rem 0">
		         <Image src="/spotify-1.svg" alt="Spotify Icon" width="80" height="80"/>
		         <Text fontSize="1.6rem" fontWeight="700">- Not Playing</Text>
            </HStack>
            <Footer/>
		</Container>
	);
}