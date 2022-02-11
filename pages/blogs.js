import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import {
	Container,
	Divider,
	HStack,
	Text,
	Heading,
	VStack,
	Box,
	Link,
	Button,
	Input,
	IconButton,
	useColorModeValue
} from "@chakra-ui/react";
import {ArrowForwardIcon,SearchIcon} from "@chakra-ui/icons";
import PostItemOverlay from "../components/PostItemOverlay";

import {getAllBlogsData} from "../lib/mdxApi";

export default function Blog({allSortedBlogs}){
	return(
        <Container maxW="80rem">
            <Header/>
            <VStack align="flex-start" mb="2rem">
                <Heading fontSize="3rem" fontFamily="inherit" mb="1rem">Blogs-Bimal Thapa Magar</Heading>
                <Text fontSize="1.6rem">
	                I've written about 15 blogs till now in this site.I hope each one of 
	                them may be useful to you in some ways.Feel free to read them by searching
	                all those with the following search field.
                </Text>
            </VStack>
            <Box p=".2rem" rounded="lg">
	            <VStack position="relative">
	            	<Input placeholder="Search posts" fontSize="1.4rem" p="2rem 1rem"/>
	                <IconButton aria-label="Search Posts" icon={<SearchIcon/>} position="absolute" top="37%" right=".8rem" transform="translate(0,-50%)" fontSize="2rem" p="1.5rem 2rem" colorScheme="twitter"/>
	            </VStack>
            </Box>
            <Heading fontSize="2.5rem" fontFamily="inherit" m="2rem 0">All Posts</Heading>
            
            {
            	allSortedBlogs.map((blog,index) => (
            		<PostItemOverlay 
            		   key={index}
            		   slug={blog.slug}
                       title={blog.title}
                       date={blog.date}
            		/>
            	))
            }
			<HStack p="1rem 0">
		         <Image src="/spotify-1.svg" alt="Spotify Icon" width="80" height="80"/>
		         <Text fontSize="1.6rem" fontWeight="700">- Not Playing</Text>
	        </HStack>
          <Footer/>
        </Container>
	);
}

export async function getStaticProps() {
	const allSortedBlogs = await getAllBlogsData();
	return {
		props:{
			allSortedBlogs
		}
	};
}


