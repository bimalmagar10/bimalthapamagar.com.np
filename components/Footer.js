import {SimpleGrid,Link as LinkItem,useColorModeValue} from "@chakra-ui/react";
import Link from "next/link";
import {GridItems} from "../lib/helpers";
const Footer = () => {
    const linkColor = useColorModeValue("grayish","gray.400");
	return (
     <SimpleGrid columns={[1,3]} spacing={10} p="0 0 4rem 0">
        {
        	GridItems.map((item,index) => (
                <Link href={item.url} key={index} passHref scroll={false}>
		        	<LinkItem fontSize="1.4rem" color={linkColor} target={item.url[0] === "/" ? "_self":"_blank"}>{item.name}</LinkItem>
		        </Link>
        	))
        }
     </SimpleGrid>);
}
export default Footer;