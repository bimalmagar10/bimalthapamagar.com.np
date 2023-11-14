'use client';
import {Container} from "@chakra-ui/react";
import Footer from "./Footer";
import NowPlaying from "./NowPlaying";
import Header from "./Header";
import MobileNav from "./MobileNav";

const Layout = ({children}) => {
	return (
		<>
			<Container maxW="80rem">
			<Header/>
			{children}
			<NowPlaying/>
			<Footer/>
			</Container>
			<MobileNav/>
	   </>
	)
};

export default Layout;