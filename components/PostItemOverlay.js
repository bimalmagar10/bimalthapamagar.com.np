import NextLink from 'next/link'
import {
	VStack,
	Box,
	Heading,
	Text,
	Divider,
	Link,
	Icon
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {dateFormatter} from "../lib/helpers";

const PostItemOverlay = ({slug,title,date,summary}) => {
	return (
		<>
			<VStack align="flex-start" m="2rem 0">
                <Box mb="1rem">
	            	<Heading fontSize="2.4rem" mb="1.2rem" fontFamily="inherit">
	            		<Link as={NextLink} href={`/blogs/${slug}`} style={{fontWeight:"600"}}>
	            			{title}
	            		</Link>
	            	</Heading>
	            	<Text fontSize="1.6rem" mb="2rem">{summary}</Text>
	            	<Box as="time" color="gray.500" fontSize="1.6rem">
	            		{dateFormatter(date)}
	            	</Box>
            	</Box>
            	<Link 
				    as={NextLink}
            		color="blue.500" 
            		fontSize="1.4rem"
            		href={`/blogs/${slug}`}
            		sx={{
            			":hover *" :{
            				transform:"scale(1.1)"
            			}
            		}}
            	>
            		<Box as="span" transition="transform .4s ease">Read More</Box>
            		<Icon as={ArrowForwardIcon} transition="transform .4s ease"/>
            	</Link>
            </VStack>
            <Divider mt="1rem"/>
		</>
	);
};
export default PostItemOverlay;