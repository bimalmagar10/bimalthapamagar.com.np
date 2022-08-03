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
			<Text fontSize="1.6rem" mb="4rem">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Aenean sed adipiscing diam donec adipiscing tristique 
				risus nec feugiat. Gravida dictum fusce ut placerat orci 
				nulla pellentesque. Enim sed faucibus turpis in eu. Id neque 
				aliquam vestibulum morbi blandit cursus risus. Senectus et netus 
				et malesuada fames ac turpis egestas. Purus non enim praesent 
				elementum. Amet cursus sit amet dictum. Vestibulum rhoncus est 
				pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
				At risus viverra adipiscing at. Arcu cursus euismod quis viverra 
				nibh cras. Dui nunc mattis enim ut tellus elementum sagittis vitae. 
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