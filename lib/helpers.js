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
export {timeFormatter,dateFormatter};