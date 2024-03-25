import { notFound } from "next/navigation";
import { getFileNamesWithoutMDXExtension } from "../../../lib/helpers";
import { getSnippetBySlug, getSnippetFiles } from "../../../lib/mdxApi";
import SnippetDetailPage from "../../../components/SnippetDetailPage";

const checkForNotFound = async (slug) => {
  const fileNames = await getSnippetFiles();
  const fileNamesWithoutMDXExtension =
    getFileNamesWithoutMDXExtension(fileNames);

  if (
    fileNamesWithoutMDXExtension?.length > 0 &&
    !fileNamesWithoutMDXExtension.includes(slug)
  ) {
    notFound();
  }
};

export async function generateStaticParams() {
  const fileNames = await getSnippetFiles();
  return getFileNamesWithoutMDXExtension(fileNames).map((filename) => ({
    slug: filename,
  }));
}

export default async function SingleSnippet({ params }) {
  const { slug } = params;

  //---Redirect to NOT FOUND page if user manually tries to navigate to some dummy blogs url that is not in the system.--//
  await checkForNotFound(slug);

  const snippet = await getSnippetBySlug(slug);

  return (
    <SnippetDetailPage snippet={snippet}>{snippet?.content}</SnippetDetailPage>
  );
}
