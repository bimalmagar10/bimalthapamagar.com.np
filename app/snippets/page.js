import SnippetsPage from "../../components/SnippetsPage";
import { getAllSnippets } from "../../lib/mdxApi";

async function getSnippets() {
  let snippets = await getAllSnippets();

  if (snippets && snippets?.length > 0) {
    return snippets;
  }
  return [];
}

export default async function Snippets() {
  const snippets = await getSnippets();
  return <SnippetsPage snippets={snippets} />;
}
