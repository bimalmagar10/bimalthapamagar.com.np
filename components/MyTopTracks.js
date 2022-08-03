import {
	Heading,
	List,
	ListItem,
	Image,
	Box,
	Flex,
	Text,
	Link,Alert,
	useColorModeValue
} from "@chakra-ui/react";
import {WarningIcon} from "@chakra-ui/icons";
import useSWR from "swr";
import {fetcher} from "../lib/helpers";
const bgColor = (currentColor) => {
	return {
		background:currentColor
	};
};
const MyTopTracks = () => {
	const bg = useColorModeValue("gray.100","gray.800");
    const {data,error} = useSWR(`/api/top-tracks`,fetcher);
	return (
		<>
			<Heading fontSize="2.5rem" mb="1rem">My Top Ten Tracks on Spotify</Heading>
			<Text fontSize="1.7rem" mb="3rem">
				Are you curious about what kind of songs that I mostly listen?
				These are the top ten tracks, that I usually listen, while I&apos;m coding,
				on Spotify.Know my quotidian tracks and try listening them, while you
				are feeling humdrum.
			</Text>
			<List width="100%" sx={{
				"> *:not(:last-child)":{
					marginBottom:"1rem"
				}
			}}>
			    {error && (
			    	<>
			    		<Alert status="error">
	            		<WarningIcon mr="1rem" color="crimson"/>No Tracks to Show!
	            		</Alert>
			    	</>
			    )}
			    {data && data.tracks.map((track,idx) => (
					<ListItem 
						key={idx}
						border="1px solid" 
						borderColor="gray.400" 
						p="1rem 1.5rem"
						borderRadius="5px"
						cursor="pointer"
						_hover={bgColor(bg)}
					>
						<Flex justify="space-between">
							<Box>
								<Link fontWeight="700" href={track.songUrl} isExternal>{track.title}</Link>
								<Text fontSize="sm">{track.artist}</Text>
							</Box>
							<Image 
							src={track.imageUrl} 
							alt={`Image of ${track.title} album`} 
							boxSize="5rem" 
							objectFit="cover"/>
						</Flex>
					</ListItem>
			    ))}
			</List>
		</>
	);
};

export default MyTopTracks;