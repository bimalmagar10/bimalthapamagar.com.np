import { WarningIcon } from "@chakra-ui/icons";
import {
  Alert,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher } from "../lib/helpers";
import TopTracksSkeleton from "./TopTracksSkeleton";
const bgColor = (currentColor) => {
  return {
    background: currentColor,
  };
};
const MyTopTracks = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const { data, isLoading } = useSWR(`/api/top-tracks`, fetcher);

  return (
    <>
      <Heading fontSize="2.5rem" mb="3rem">
        My Top Ten Tracks on Spotify
      </Heading>
      <List
        width="100%"
        sx={{
          "> *:not(:last-child)": {
            marginBottom: "1rem",
          },
        }}
      >
        {!isLoading ? (
          data && data?.tracks?.length > 0 ? (
            data.tracks.map((track, idx) => (
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
                    <Link fontWeight="700" href={track.songUrl} isExternal>
                      {track.title}
                    </Link>
                    <Text fontSize="sm">{track.artist}</Text>
                  </Box>
                  <Image
                    src={track.imageUrl}
                    alt={`Image of ${track.title} album`}
                    boxSize="5rem"
                    objectFit="cover"
                  />
                </Flex>
              </ListItem>
            ))
          ) : (
            <>
              <Alert status="error">
                <WarningIcon mr="1rem" color="crimson" />
                No Tracks to Show!
              </Alert>
            </>
          )
        ) : (
          <TopTracksSkeleton />
        )}
      </List>
    </>
  );
};

export default MyTopTracks;
