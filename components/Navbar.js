import {Stack,Link as NextLink} from "@chakra-ui/react";
import {useRouter} from "next/router";
const NavItem = ({href,text}) => {
    const router = useRouter();
    const isActive = router.asPath === href;
    return (
        <NextLink href={href} fontWeight={isActive ? "700" : "400"}>
            {text}
        </NextLink>
    );
};
const Navbar = () => {
    return (
        <Stack direction="row" spacing="5rem" display={['none','none','flex','flex']}>
            <NavItem href="/" text="Home"/>
            <NavItem href="/blogs" text="Blogs"/>
            <NavItem href="/about-me" text="About Me"/>
        </Stack>
    );
};
export default Navbar;