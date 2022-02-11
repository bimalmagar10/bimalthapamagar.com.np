import {
	VStack,
	Box,
	Heading,
	Text,
	Button,
	Divider,
	Link
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {dateFormatter} from "../lib/helpers";

const PostItemOverlay = ({slug,title,date}) => {
	return (
		<>
			<VStack align="flex-start" m="2rem 0">
                <Box mb="3rem">
	            	<Heading fontSize="2.5rem" mb="1rem" fontFamily="inherit">
	            		<Link href={`/blogs/${slug}`}>
	            			{title}
	            		</Link>
	            	</Heading>
	            	<Text fontSize="1.5rem" mb=".5rem">
	            		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
	            	</Text>
	            	<Box as="time" color="gray.500">
	            		{dateFormatter(date)}
	            	</Box>
            	</Box>
            	<Button rightIcon={<ArrowForwardIcon/>} colorScheme="blue" variant="link" fontSize="1.6rem" fontWeight="400">
            		Read More
            	</Button>
            </VStack>
            <Divider mt="1rem"/>
		</>
	);
};
export default PostItemOverlay;