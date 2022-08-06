import {Alert,AlertIcon,Box} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
const Works = () => {
	return (
		<>
		<Head>
            	<title>Works</title>
        </Head>
        <Header/>
        <Box height="20rem" 
	        width="100%" 
	        p="2rem" 
	        position="relative"
        >
			<Alert 
				status="info"
				position="absolute"
				top="50%"
				left="50%" 
				transform="translate(-50%,-50%)"
			>
				<AlertIcon/>
				This page is under development.I will get back to you soon with
				all my fabuluos works.
			</Alert>
		</Box>
		</>
	);
};

export default Works;