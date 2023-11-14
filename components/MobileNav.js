import {
	IconButton,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerContent,
	DrawerCloseButton,
	Link,
	Flex,
	Divider,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import NextLink from "next/link";
const MobileNav = () => {
	const {isOpen,onOpen,onClose} = useDisclosure();
	return (
		<>
			<IconButton
			   display={["flex","flex","none","none"]}
			   size="lg"
			   fontSize="2.5rem"
			   colorScheme="gray"
			   arial-label="Mobile Navbar"
			   variant="unstyled"
			   icon={<HamburgerIcon/>}
			   onClick={onOpen}
			/>
			<Drawer
			   isOpen={isOpen}
			   placement="right"
			   onClose={onClose}
			   size="xs"
			>
				<DrawerOverlay/>
				<DrawerContent>
				    <DrawerCloseButton/>
					<DrawerBody mt="6rem" fontSize="2rem">
					    <Flex direction="column">
						    <Link as={NextLink} href="/" mb="2rem">
					    		Home
					    		<Divider/>
					    	</Link>
					    	<Link as={NextLink} href="/blogs" mb="2rem">
					    		Blogs
					    		<Divider/>
					    	</Link>
					        <Link as={NextLink} href="/about-me" mb="2rem">
					    		About Me
					    		<Divider/>
					    	</Link>
				    	</Flex>
				    </DrawerBody>
				</DrawerContent>
				
			</Drawer>
		</>
	);
};
export default MobileNav;