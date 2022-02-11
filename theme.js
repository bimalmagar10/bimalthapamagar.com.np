import {theme as chakraTheme,extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm:'40em',
	md:'52em',
	lg:'64em',
	xl:'80em'
});
const fonts = {
	...chakraTheme.fonts,
	body:`"Ubuntu","sans-serif"`,
	heading:`"Ubuntu","Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
};

const theme = extendTheme({
	styles:{
		global:{
			"html":{
				fontSize:"62.5%"
			},
			"body":{
				boxSizing:"border-box",
				fontSize:"1.8rem",
				fontFamily:`"Ubuntu","sans-serif"`
			},
			"*,*::before,*::after":{
				boxSizing:"inherit"
			},
			'.chakra-divider': {
		      borderColor: '#CBD5E0 !important',
		      opacity: 1,
		    },
		}
	},
	fonts,
	colors:{
		 black: '#16161D',
		 lightwhite:'#EFF6FF',
		 grayish:'#666666'
	},
	breakpoints,
	fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },
});

export default theme;