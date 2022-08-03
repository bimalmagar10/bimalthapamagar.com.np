/*******THIS FEATURE WILL BE INCLUDED SOON***/

// import {
// 	Heading,
// 	SimpleGrid,
// 	Box,
// 	Link as LinkItem,
// 	VStack,
// 	HStack,
// 	Tag,
// 	TagLabel,
// 	TagLeftIcon,
// 	useColorModeValue
// } from "@chakra-ui/react";
// import {ViewIcon} from "@chakra-ui/icons";
// import Link from "next/link";
// import {FeaturedPostsItems}  from "../utils";
// const FeaturedPosts = () => {
// 	const FeaturedPostColor = useColorModeValue("gray.600","lightwhite");
// 	const bgCard = useColorModeValue("white","gray.900")
// 	return (
// 		<>
// 		  <Heading fontSize="3rem" w="100%" textAlign="left" fontFamily="inherit" mb="3rem">Featured Posts</Heading>
// 	      <SimpleGrid columns={[1,3]} spacing={10} mb="4rem" alignItems="flex-start">
// 	        {
// 	        	FeaturedPostsItems.map((post,index) => (
// 	        		<Box key={index} bgGradient={post.gradient} p=".5rem" borderRadius="10px" 
// 			        _hover={{
// 			          transition:`transform .2s ease`,
// 			          transform:"scale(1.02)"}}
// 			          >
// 			            <Link href={post.url} passHref>
// 				            <LinkItem _hover={{textDecoration:"none"}}>
// 				                <VStack align="flex-start" spacing="4rem" bg={bgCard} p="1.5rem" borderRadius="5px" justify="space-between">
// 				                   <Heading fontSize="2rem" fontWeight="600" color={FeaturedPostColor}>{post.title}</Heading>
// 				                   <HStack p={0}>
// 				                     <Tag variant="outline" colorScheme="gray">
// 				                      <TagLeftIcon boxSize="2rem" as={ViewIcon}/>
// 				                      <TagLabel fontSize="1.6rem" >{post.reach}</TagLabel>
// 				                     </Tag>
// 				                   </HStack>
// 				                </VStack>
// 				            </LinkItem>
// 			            </Link>
// 			        </Box>
// 	        	))
// 	        }
//         </SimpleGrid>
//         </>
// 	);
// };
// export default FeaturedPosts;