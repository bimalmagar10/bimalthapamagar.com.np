import BlogDetailPage from "../../../components/BlogDetailPage";
import { getBlogBySlug, getBlogFiles } from "../../../lib/mdxApi";
import { getFileNamesWithoutMDXExtension } from "../../../lib/helpers";
import { notFound } from "next/navigation";



const checkForNotFound = async (slug) => {
    const fileNames = await getBlogFiles();
    const fileNamesWithoutMDXExtension = getFileNamesWithoutMDXExtension(fileNames);

    if(fileNamesWithoutMDXExtension?.length > 0 && !fileNamesWithoutMDXExtension.includes(slug)) {
      notFound();
    }
};

export async function generateStaticParams() {
    const fileNames = await getBlogFiles();
    return getFileNamesWithoutMDXExtension(fileNames).map(filename => ({
      slug:filename
    }));
};


//--Adding the meta tags in the html head section, specifically the title,content descriptions and opengraphs for good SEO--//
export async function generateMetadata({params}) {
  const {slug} = params;

  //--Redirect to NOT FOUND page if user manually tries to navigate to some dummy blogs url that is not in the system.--//
  await checkForNotFound(slug);

  
  //--Get specific blog post by using the slug of the post (i.e filename)--//

  const post = await getBlogBySlug(slug);
  return {
    title:`Blogs - ${post?.matters?.title?.split(' ').slice(0,4).join(' ') + '....'}`,
    description:`Welcome to my blog titled '${post?.matters?.title}'`,
    openGraph:{
      title:`Blog about ${post?.matters?.title}`,
      description: `Get started to read Bimal Thapa Magar's blog about ${post?.matters?.title}`,
      type:'article'
    }
  }
}



export default async function SingleBlog({params}) {
    const {slug} = params;
    
    //---Redirect to NOT FOUND page if user manually tries to navigate to some dummy blogs url that is not in the system.--//
    await checkForNotFound(slug);

    const post = await getBlogBySlug(slug);
    return (
        <BlogDetailPage
          post={post}
        >
          {post?.content}
        </BlogDetailPage>
    );
}