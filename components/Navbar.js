import {Stack,Link as NextLink} from "@chakra-ui/react";
const Navbar = () => (
    <Stack direction="row" spacing="5rem" display={['none','none','flex','flex']}>
    	<NextLink href="/">
    		Home
    	</NextLink>
    	<NextLink href="/blogs">
    		Blogs
    	</NextLink>
        <NextLink href="/contact">
    		Contact
    	</NextLink>
    	<NextLink href="/works">
    		Works
    	</NextLink>
    </Stack>
);
export default Navbar;