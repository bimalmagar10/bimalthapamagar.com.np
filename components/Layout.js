import {Container} from "@chakra-ui/react";
import Footer from "./Footer";
import NowPlaying from "./NowPlaying";
const Layout = ({children}) => {
	return (
		<Container maxW="80rem">
		  {children}
		  <NowPlaying/>
		  <Footer/>
		</Container>
	)
};

export default Layout;