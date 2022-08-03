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
	Link,
	Icon,
	chakra
} from "@chakra-ui/react";
import {StarIcon,ChevronLeftIcon} from "@chakra-ui/icons";
import Image from "next/image";
import Head from "next/head";
import {timeFormatter} from "../../lib/helpers";


export default function Blog({mdxSource,matters}){
	  const backBtnColor = useColorModeValue('blue.500','blue.300');
      return (
      		<>
      		    <Head>
      		    	<title>{"Blog" + "-" + matters.title.split(" ").slice(0,4).join(" ") + "....."}</title>
      		    </Head>
      			<Header/>
      			<VStack align="flex-start" mb="2rem">
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
      			<Link
      			href="/blogs" 
      			sx={{
      				":hover > :nth-of-type(1)":{
      					transform:'translateX(-.5rem)'
      				},
      				":hover > :nth-of-type(2)":{
      					transform:'translateX(.5rem)'
      				},
      				":active":{
      					outline:"none"
      				}
      			}}
      			>
      			  <Icon transition ="all .4s ease" as={ChevronLeftIcon} h={19} w={19} color={backBtnColor}/>
      			  <Box transition ="all .4s ease" ml="-5px" fontSize="1.6rem" display="inline-block" color={backBtnColor}>Back</Box>
      			</Link>
      			<Box p="2.5rem 1.5rem">
      				<Text fontSize="1.8rem" mb="3rem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{matters.shortTheme}</Text>
      				<MDXRemote {...mdxSource} components={MDXComponents}/>
      			</Box>
      			<Divider mt="1rem"/>
      		</>
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