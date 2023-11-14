import {theme as chakraTheme,extendTheme} from '@chakra-ui/react';
// import {createBreakpoints} from '@chakra-ui/theme-tools';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}
const breakpoints = {
	sm:'40em',
	md:'52em',
	lg:'64em',
	xl:'80em'
};
const fonts = {
	...chakraTheme.fonts,
	body:`var(--font-quicksand)`,
	heading:`var(--font-quicksand)`
};

const theme = extendTheme({
	config,
	styles:{
		global:{
			"html":{
				fontSize:"62.5%",
				fontFamily:'var(--font-quicksand)'
			},
			"body":{
				boxSizing:"border-box",
				fontSize:"1.8rem",
				fontFamily:'var(--font-quicksand)',
				fontWeight:'500'
			},
			"*,*::before,*::after":{
				boxSizing:"inherit",
			},
			'.chakra-divider': {
		      borderColor: '#CBD5E0 !important',
		      opacity: 1,
		    },
			'.blog__details h1,h2,h3,h4,h5,h6':{
				fontWeight:"700"
			},
			'.blog__details h1':{
				fontSize:'2.5rem',
			},
			'.blog__details h2': {
				fontSize:'2.1rem'
			},
			'.blog__details h3': {
				fontSize:'1.8rem'
			},
			'.blog__details h4': {
				fontSize:'1.6rem'
			},
			'.blog__details h5': {
				fontSize:'1.4rem'
			},
			'.blog__details ul':{
				paddingLeft:"2.5rem"
			},
			'.blog__details ul li':{
				lineHeight:"1.8"
			},
			'.blog__details ul li::marker':{
				color:'#666'
			},
			'.blog__details a':{
				fontWeight:'600'
			},
			'.blog__details a:hover,.blog__details a':{
				textDecoration:'underline'
			}
		}
	},
	fonts,
	colors:{
		 black: '#16161D',
		 lightwhite:'#EFF6FF',
		 grayish:'#666666',
		 lightgrayish:'#494961'
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
	shadows:{
		mobileNavLight:`
			2.1px 0px 10px rgba(0, 0, 0, 0.048),
  			17px 0px 80px rgba(0, 0, 0, 0.06)
		`,
		mobileNavDark:`
			1px 0px 2px rgba(255, 255, 255, 0.08),
  			1px 0px 2px rgba(255, 255, 255, 0.06)
		`
	}
});

export default theme;