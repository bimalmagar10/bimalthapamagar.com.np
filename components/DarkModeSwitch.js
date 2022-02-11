import {useColorMode,IconButton} from "@chakra-ui/react";
import {MoonIcon,SunIcon} from "@chakra-ui/icons";
const DarkModeSwitch = () => {
       const {colorMode,toggleColorMode} = useColorMode();
       return  (
           	<>
           	   <IconButton
                  size="lg"
                  fontSize="2rem"
           	    arial-label="Toggle theme"
           	    icon={colorMode === "light" ? <SunIcon/>:<MoonIcon/>}
           	    colorScheme="gray"
                  p="2rem 1.5rem"
           	    onClick={toggleColorMode}
           	   />
              </>
       );
};

export default DarkModeSwitch;