import {
	Heading,
	Text,
	SimpleGrid,
	Box,
	CircularProgress,CircularProgressLabel,
	useColorModeValue,
	Button,
	Flex,
	keyframes
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {aboutMeStyles,hiAnimation} from "../styles/custom-styles";
import {skillsLists} from "../lib/helpers";
const AboutMe = () => {
	const skillsColor = useColorModeValue('#086F83','#9DECF9');
	return (
		<>
			<Text fontSize="1.6rem" mb="4rem" lineHeight="1.8">
				It&rsquo;s good to know that you reached an energetic,diligent, and the most
				jovial engineer,who is always keen to learn new things, that fickles in the
				world of technology.I have an enthusiasm, which I hope will always be steady
				till I die,in programming and solving the problems–mostly of data structures and 
				algorithms–logically.I can build scalable applications as per your need.Reminiscing
				about how I developed interests towards this era of programming,the first
				programming language I learned was C–archaic though nifty.After some years
				of programming in C,during my university,I learned C++ –– object oriented,have 
				more features than in archaic C –– to go beyond my limitations.Then after my interests
				were indulged into Web fundamentals:I learned Javascript.Hitherto,I can work
				in Node,Express,Git,Github,SASS,CSS,Figma,and Chakra UI.I know laravel a bit too.
				Consequently,my anxiety and enthusiasm towards programming is inevitable;no matter
				what barriers conveys my limitations.
			</Text>
			<Flex justify="space-between" align="center" mb="4rem">
				<Heading fontSize="2.5rem" letterSpacing="1px">Skills</Heading>
				<Box 
					as={motion.div}
					animation={hiAnimation}
				>
					<Button as ="a" href="mailto:bimalmagar873@gmail.com" size="lg" fontSize="1.6rem" p="1.5rem 2rem" colorScheme="teal">Say Hi,👋!</Button>
				</Box>
			</Flex>
			<SimpleGrid columns={[2,null,2]} p="4rem" 
				spacing="1rem 5rem" 
				border="1px solid #E2E8F0"
			>
			    {
			    	skillsLists.map(({name,fluency},index) => (
						<Box key={index} p="1rem 2.5rem" sx={aboutMeStyles(skillsColor)}>
							<Box as="span" mr="2rem">{name}</Box>
							<CircularProgress value={fluency} color={skillsColor} size="30px">
							  	<CircularProgressLabel>{fluency}%</CircularProgressLabel>
							</CircularProgress>
						</Box>
			    	))
			    }
			</SimpleGrid>
		</>
	);
};

export default AboutMe;