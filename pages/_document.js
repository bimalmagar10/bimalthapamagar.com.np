import NextDocument,{Html,Head,Main,NextScript} from "next/document";
import {ColorModeScript} from '@chakra-ui/react';
import theme from '../theme';
export default class Document extends NextDocument {
	render() {
		return (
			<Html>
			    <link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet"/>
				<Head/>
				<body>
					<ColorModeScript/>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}