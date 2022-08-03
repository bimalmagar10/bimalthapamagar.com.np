import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {slug as rehypeslug} from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";
import {serialize} from "next-mdx-remote/serialize";

const rootDir = process.cwd();

export async function getBlogFiles(){
	return fs.readdirSync(path.join(rootDir,'blogs'));
}

export async function getBlogBySlug(slug) {
	const source = slug ? fs.readFileSync(path.join(rootDir,"blogs",`${slug}.mdx`),'utf8') : null;
     
    const {data,content} = matter(source); 

    const mdxSource = await serialize(content,{
    	mdxOptions:{
    		rehypePlugins:[rehypeAutolinkHeadings,rehypeslug,rehypeCodeTitles,mdxPrism]
    	}
    });

    return {
    	mdxSource,
    	matters:{
    		wordCount:content.split(/\s+/gu).length,
    		readingTime:readingTime(content),
    		slug:slug || null,
    		...data
    	}
    };
}


export async function getAllBlogsData(){
    const fileNames = fs.readdirSync(path.join(rootDir,"blogs"));
    const allBlogsData = fileNames.map(filename => {
    		const slug = filename.replace(/\.mdx$/,'');

    		const fullPath = path.join(rootDir,"blogs",filename);
    		const source= fs.readFileSync(fullPath,"utf8");

    		const matterResults = matter(source);
            console.log(matterResults);
    		return {
    			slug,
    			...matterResults.data
    		};
    });
    //sorting the blogs acc. to latest one
    return allBlogsData.sort(({date:a},{date:b}) => {
    	if(a < b) {
    		return 1;
    	} else if(a > b) {
    		return -1;
    	} else {
    		return 0;
    	}

    });
}