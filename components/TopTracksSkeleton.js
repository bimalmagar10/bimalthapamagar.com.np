import { Flex, ListItem, Skeleton,Box, useColorModeValue} from "@chakra-ui/react";
import { useId } from "react";

const TopTracksSkeleton = () => {
    const id = useId();
    const startColor = useColorModeValue('#EDF2F7','#2b333e');
    const endColor = useColorModeValue('#e0e0e0','404c5c')

    return (
        <>
          {
                Array.from({length:10},(_,idx) => (idx)).map((_,idx) => (
                    <ListItem
                        key={id+idx} 
                        p="1rem" 
                        border="1px solid" 
                        borderColor="gray.400"
                        borderRadius="5px"
                        cursor="not-allowed"
                        sx={{
                            display:'flex',
                            justifyContent:"space-between"
                        }}
                    >
                        <Flex direction="column" justifyContent={"space-between"}>
                            <Skeleton height="25px" width="20rem" startColor={startColor} endColor={endColor} borderRadius={"3px"}/>
                            <Skeleton height="15px" width="25rem" startColor={startColor} endColor={endColor} borderRadius={"3px"}/>
                        </Flex>
                        <Box>
                            <Skeleton height="5rem" width="5rem" startColor={startColor} endColor={endColor} borderRadius={"3px"}/>
                        </Box>
                    </ListItem>
                ))
          }
        </>
        
    );
};

export default TopTracksSkeleton;