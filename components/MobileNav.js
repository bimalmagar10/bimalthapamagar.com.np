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
						    <Link href="/" mb="2rem">
					    		Home
					    		<Divider/>
					    	</Link>
					    	<Link href="/blogs" mb="2rem">
					    		Blogs
					    		<Divider/>
					    	</Link>
					        <Link href="/about-me" mb="2rem">
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