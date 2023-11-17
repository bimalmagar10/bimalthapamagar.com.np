import { formatDistanceToNowStrict,format,parseISO } from 'date-fns';
const timeFormatter = (date,time) => {
     const dateResult = date.split("-");
     const timeResult = time.split(":");
     
     return formatDistanceToNowStrict(
     	new Date(
           dateResult[0],
           dateResult[1]-1,
           dateResult[2],
           timeResult[0],
           timeResult[1],
           timeResult[2]
     	)
     );
};

const dateFormatter = (date) => {
	return format(parseISO(date),'d MMMM, yyyy');
};
const skillsLists = [
     {name:'HTML'},
     {name:'CSS'},
     {name:'JavaScript'},
     {name:'C++'},
     {name:'ReactJS'},
     {name:'Git'},
     {name:'MongoDB'},
     {name:'MySQL'},
     {name:'Figma'},
     {name:'DSA'},
     {name:'Svelte'},
     {name:'Angular JS'},
     {name:'Framer Motion'},
     {name:'GSAP Animations'}
];
const fetcher = (url) => fetch(url).then(res => res.json());
const ChakraMotionBox = (chakra,motion,isValidMotionProp) => {
     return chakra(motion.div,{
          shouldForwardProp:prop => isValidMotionProp(prop) || prop === 'children'
     });
};
const GridItems = [
     {
          "name":"Home",
          "url":"/"
     },
     {
          "name":"About Me",
          "url":"/about-me"
     },
     {
          "name":"Blog",
          "url":"/blogs"
     },
     {
          "name":"Github",
          "url":"https://github.com/bimalmagar10"
     },
     // {
     //      "name":"Facebook",
     //      "url":"https://www.facebook.com/Bimalmagar770077/"
     // },
     {
          "name":"Works",
          "url":"/works"
     },
     {
          "name":"Linked In",
          "url":"https://www.linkedin.com/in/bimal-thapa-magar-6582b0256"
     }
];

const getFileNamesWithoutMDXExtension = (namesWithMDXExtension) => {
     if(namesWithMDXExtension?.length > 0 ) {
          return namesWithMDXExtension.map(filename => {
               return filename.replace(/\.mdx$/,"");
          })
     }
     return [];
    
};

export {timeFormatter,dateFormatter,skillsLists,fetcher,ChakraMotionBox,GridItems,getFileNamesWithoutMDXExtension};