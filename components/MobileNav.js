import {
	Link,
	Box,
	Flex,
	VStack,
	Text,
	useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GoHomeFill } from "react-icons/go";
import { FaFilePen,FaCircleUser} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const MobileNav = () => {
	const bgColor = useColorModeValue('#fff','gray.800');
	const navbarShadow = useColorModeValue('mobileNavLight','mobileNavDark');
	const activeColor = useColorModeValue('#245B95','#90B9E4');
	const inactiveColor = useColorModeValue('gray.700','gray.300');
	const uri = usePathname();
	let regexForBlogsRoute = useMemo(() => {
		return new RegExp(/^\/blogs(?:\/[\w-]+)*$/);
	},[]); 

	return (
		<>
			<Box display={["block","block","none","none"]} width="100%" boxShadow={navbarShadow} padding={["1.2rem 3rem","1.2rem 6rem","1.2rem 6rem","1.2rem 6rem"]} position="fixed" bottom="0" left="0" backgroundColor={bgColor}>
				<Flex justifyContent="space-between" alignItems="center">
					<Link as={NextLink} href="/" textDecoration="unset !important">
						<VStack align="center" spacing="0" color={uri === "/" ? activeColor : inactiveColor}>
							<GoHomeFill fontSize="2.1rem"/>
							<Text fontSize="1.4rem">Home</Text>
						</VStack>
					</Link>
					<Link as={NextLink} href="/blogs" textDecoration="unset !important">
						<VStack align="center" color={regexForBlogsRoute.test(uri) ? activeColor : inactiveColor}>
							<FaFilePen fontSize="1.9rem"/>
							<Text fontSize="1.4rem">Blogs</Text>
						</VStack>
					</Link>
					<Link as={NextLink} href="/about-me" textDecoration="unset !important">
						<VStack align="center" color={uri === "/about-me" ? activeColor : inactiveColor}>
							<FaCircleUser fontSize="2rem"/>
							<Text fontSize="1.4rem">About Me</Text>
						</VStack>
					</Link>
				</Flex>
			</Box>
		</>
	);
};
export default MobileNav;