import {
	HStack,
	Text,
	Box,
	chakra,
	Link,
	Flex
} from "@chakra-ui/react";
import Image from "next/image";
import useSWR from 'swr';
import {motion,isValidMotionProp} from "framer-motion";
import {fetcher} from "../lib/helpers";
import {ChakraMotionBox} from "../lib/helpers";
const ChakraBox = ChakraMotionBox(chakra,motion,isValidMotionProp);

const AnimatedBars = () => {
	return (
		<Box overflow="hidden" height="20px">
			<ChakraBox 
			    mr="1px"
			    display="inline-block"
				borderRadius="5px 5px 0 0"
				height="100%"
				width="3px"
				bg="#1ed05e"
				animate={{y:["0px","20px","0px"],scaleY:[1.0,1.5,1.0]}} 
				transition={{repeat:Infinity,duration:1}}
			/>
	 		<ChakraBox 
			    mr="1px"
			    display="inline-block"
			 	borderRadius="5px 5px 0 0"
			 	height="100%"
			 	width="3px"
			 	bg="#1ed05e"
			 	initial={{y:"0px"}}
			 	animate={{y:["0px","21px","0px"],scaleY:[1.0,1.2,1.0]}} 
			 	transition={{repeat:Infinity,duration:1.2,delay:.2}}
			 />
			 <ChakraBox 
			     mr="1px"
			     display="inline-block"
			 	borderRadius="5px 5px 0 0"
			 	height="100%"
			 	width="3px"
			 	bg="#1ed05e"
			 	initial={{y:"0px"}}
			 	animate={{y:["0px","20px","0px"],scaleY:[1,1.6,1]}} 
			 	transition={{repeat:Infinity,duration:1.1,delay:.3}}
			 />
			 <ChakraBox 
			     mr="1px"
			     display="inline-block"
			 	borderRadius="5px 5px 0 0"
			 	height="100%"
			 	width="3px"
			 	bg="#1ed05e"
			 	initial={{y:"0px"}}
			 	animate={{y:["0px","21px","0px"],scaleY:[1.0,.5,1.0]}} 
			 	transition={{repeat:Infinity,duration:1.3,delay:.2}}
			 />
		</Box>
	);
};
const NowPlaying = () => {
	const {data,error} = useSWR('/api/now-playing',fetcher,{refreshInterval:1000});

	return (
		<Flex p="1rem 0" gap={["0rem","1rem","1rem","1rem"]} flexDirection={["column","row","row","row"]} alignItems={["flex-start","center","center","center"]} mb={["3rem","0rem","0rem","0rem"]}>
			<Flex alignItems="center" gap={"5px"}>
				<Image src="/spotify-1.svg" alt="Spotify Icon" width={0} height={0} sizes="100vw" style={{
					height:"80px",
					width:"80px"
				}}/>
				{!data?.isPlaying && (
					<>
						<span>{'-'}</span>
						<Text fontSize="1.6rem" fontWeight="700">Not Playing</Text>
					</>
				)}
			</Flex>
			{
				data?.isPlaying && (
					<Flex gap="1rem">
						<AnimatedBars/>
						<Text as="span">
							<Link
							    target="_blank" 
								fontSize="1.5rem"
								href={data.songUrl}
								isExternal={true}
							>
								{data.name}
							</Link>
							<span style={{padding:"0 5px"}}>{'-'}</span>
							<Text fontSize="1.4rem" as="span">{data.artist}</Text>
						</Text>
						
					</Flex>
				)
			}
		</Flex>
	);
};

export default NowPlaying;