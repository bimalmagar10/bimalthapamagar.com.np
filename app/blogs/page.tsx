import BlogsPage from "../../components/BlogsPage";
import { getAllBlogsData } from "../../lib/mdxApi";

export const metadata = {
    title: 'Blogs',
    content:"Welcome to Bimal Thapa Magar's Blog.These are the blogs you must read and know.",
	openGraph:{
		title:"Bimal Thapa Magar's Blog",
		description:"I have written these blogs and that they will help you to learn something new"
	}
}

async function getBlogs() {
	let allSortedBlogs = await getAllBlogsData();
	if(allSortedBlogs && allSortedBlogs?.length > 0) {
		return allSortedBlogs;
	}
	return [];
}

export default async function Blog(){
	const all_blogs = await getBlogs();
	return(
		<BlogsPage
		  allSortedBlogs={all_blogs}
		/>
	);
}




