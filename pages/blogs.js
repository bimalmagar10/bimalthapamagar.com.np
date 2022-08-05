import {useState} from "react";
import Header from "../components/Header";
import Head from "next/head";
import {
	Text,
	Heading,
	VStack,
	Box,
	InputGroup,
	InputRightElement,
	Input,
	useColorModeValue,
	Icon,
	Alert,
	Center
} from "@chakra-ui/react";
import {SearchIcon,WarningIcon} from "@chakra-ui/icons";
import PostItemOverlay from "../components/PostItemOverlay";
import {getAllBlogsData} from "../lib/mdxApi";

export default function Blog({allSortedBlogs}){
	const [searchValue,setSearchValue] = useState("");
	 const filteredBlogs = allSortedBlogs.filter((blog,index) => {
	 		return blog.title.toLowerCase().includes(searchValue.toLowerCase());
	 });

	return(
        <>
            <Head>
            	<title>Blogs</title>
            </Head>
            <Header/>
            <VStack align="flex-start" mb="2rem">
                <Heading fontSize="3rem" fontFamily="inherit" mb="1rem">Blogs-Bimal Thapa Magar</Heading>
                <Text fontSize="1.6rem">
	                I&apos;ve written these blogs that might help you excel some of the skills,
	                you lack.Therefore,feel free to read them by searching topics of your
	                interest that might me complementary with mine.
                </Text>
            </VStack>
            <Box p=".2rem" rounded="lg">
	        	<InputGroup>
			      <Input
			        p="2rem 2rem"
			        type="text"
			        fontSize="1.4rem"
			        placeholder="Search posts"
			        onChange={(e) => setSearchValue(e.target.value)}
			      />
			      <InputRightElement top=".85rem" right="1rem">
			         <Icon as={SearchIcon}/>
			      </InputRightElement>
				</InputGroup>
            </Box>
            <Heading fontSize="2.5rem" fontFamily="inherit" m="2rem 0">All Posts</Heading>
            {!filteredBlogs.length && <>
            	<Center>
	            	<Alert status="error">
	            	<WarningIcon mr="1rem" color="crimson"/>No Posts Found!</Alert>
	            </Center>
            	</>}
            {
            	filteredBlogs.map((blog,idx) => (
            			<PostItemOverlay 
	            		   key={idx}
	            		   slug={blog.slug}
	                       title={blog.title}
	                       date={blog.date}
	                       summary={blog.shortTheme}
	            		/>
            	))
            }
        </>
	);
}

export async function getStaticProps() {
	let allSortedBlogs = await getAllBlogsData();
	if(allSortedBlogs.length && allSortedBlogs[0].slug === '.DS_Store') {
		allSortedBlogs = allSortedBlogs.splice(1);
	}
	return {
		props:{
			allSortedBlogs
		}
	};
}


