import {getBlogFiles,getBlogBySlug} from "../../lib/mdxApi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {MDXRemote} from "next-mdx-remote";
import MDXComponents from "../../components/mdxComponents";
import {
	Box,
	Container,
	Divider,
	HStack,
	Text,
	Heading,
	VStack,
	Image as ChakraImage,
	useColorModeValue,
	Link
} from "@chakra-ui/react";
import {StarIcon,ArrowBackIcon} from "@chakra-ui/icons";
import Image from "next/image";
import {timeFormatter} from "../../lib/helpers";

export default function Blog({mdxSource,matters}){
	console.log("matters",matters);
      return (
      		<Container maxW="80rem">
      			<Header/>
      			<VStack align="flex-start">
      				<Heading fontSize="4.5rem" fontFamily="inherit">{matters.title}</Heading>
      				<HStack align="center" fontSize="1.6rem">
      					<ChakraImage mr=".5rem" src="/images/profile.jpg" alt="Bimal Thapa Magar" borderRadius="full" boxSize="40px"/>
      					<Text>Bimal Thapa Magar</Text>
      					<Text p="0 .3rem 0 .5rem" color="gray.500">{timeFormatter(matters.date,matters.time)} ago</Text>
      					<Text fontSize="3rem">&#8901;</Text>
      					<Text>{matters.readingTime.text}</Text>
                        		<Text fontSize="4rem">&#8902;</Text>
      				</HStack>
      			</VStack>
      			<Box mt="2rem">
	      			<Link href="/blogs" p="1rem">
	      			  <ArrowBackIcon/>Back to Blog
	      			</Link>
      			</Box>
      			<MDXRemote {...mdxSource} components={MDXComponents}/>
      			<Divider mt="1rem"/>
				<HStack p="1rem 0">
					<Image src="/spotify-1.svg" alt="Spotify Icon" width="80" height="80"/>
					<Text fontSize="1.6rem" fontWeight="700">- Not Playing</Text>
				</HStack>
      			<Footer/>
      		</Container>
      );
}

export async function getStaticPaths(){
    const fileNames = await getBlogFiles();
    const paths = fileNames.map(filename => {
    	return {
    		params:{
    			slug:filename.replace(/\.mdx$/,"")
    		}
    	};
    });
	return {
		paths,
		fallback:false
	};
}
export async function getStaticProps({params}){
    const posts = await getBlogBySlug(params.slug);

    return {
    	props:posts
    };
}