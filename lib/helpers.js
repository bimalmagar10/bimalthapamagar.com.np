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
     {name:'HTML',fluency:80},
     {name:'CSS',fluency:80},
     {name:'JavaScript',fluency:75},
     {name:'C++',fluency:50},
     {name:'ReactJS',fluency:70},
     {name:'Git',fluency:40},
     {name:'MongoDB',fluency:40},
     {name:'MySQL',fluency:50},
     {name:'Figma',fluency:50},
     {name:'DSA',fluency:20}
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
          "url":"/home"
     },
     {
          "name":"About Me",
          "url":"/about-me"
     },
     {
          "name":"Blog",
          "url":"/blog"
     },
     {
          "name":"Github",
          "url":"https://github.com/bimalmagar10"
     },
     {
          "name":"Facebook",
          "url":"https://www.facebook.com/Bimalmagar770077/"
     },
     {
          "name":"Instagram",
          "url":"https://www.instagram.com/bimal_thapa.magar/"
     },
     {
          "name":"Works",
          "url":"/works"
     }
];

export {timeFormatter,dateFormatter,skillsLists,fetcher,ChakraMotionBox,GridItems};