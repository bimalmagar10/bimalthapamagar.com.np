import remark from "remark";
import html from "remark-html";
export default async function markdownToHTML(markdown) {
	const content = await remark().use(html).process(markdown);
	return content.toString();
}