'use client';
import {Container} from "@chakra-ui/react";
import Footer from "./Footer";
import NowPlaying from "./NowPlaying";
import Header from "./Header";

const Layout = ({children}) => {
	return (
		<Container maxW="80rem">
		  <Header/>
		  {children}
		  <NowPlaying/>
		  <Footer/>
		</Container>
	)
};

export default Layout;