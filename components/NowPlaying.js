import {
	HStack,
	Text,
	Box,
	chakra,
	Link
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
		<HStack p="1rem 0" spacing="1rem">
			<Image src="/spotify-1.svg" alt="Spotify Icon" width={0} height={0} sizes="100vw" style={{
				height:"80px",
				width:"80px"
			}}/>
			{/*<Text fontSize="1.6rem" fontWeight="700">- Not Playing</Text>*/}
			{
				data?.isPlaying ? (
					<>
						<AnimatedBars/>
						<Link 
							fontSize="1.5rem"
							href={data.songUrl}
							isExternal={true}
						>
							{data.name}
						</Link>
						<span>{'-'}</span>
						<Text fontSize="1.4rem" as="i">{data.artist}</Text>
					</>
				):(
					<>
						<span>{'-'}</span>
						<Text fontSize="1.6rem" fontWeight="700">Not Playing</Text>
					</>
				)
			}
		</HStack>
	);
};

export default NowPlaying;