import { formatDistanceToNowStrict, format, parseISO } from "date-fns";

const timeFormatter = (date: string, time: string) => {
  const dateResult = date.split("-");
  const timeResult = time.split(":");

  return formatDistanceToNowStrict(
    new Date(
      parseInt(dateResult[0]),
      parseInt(dateResult[1]) - 1,
      parseInt(dateResult[2]),
      parseInt(timeResult[0]),
      parseInt(timeResult[1]),
      parseInt(timeResult[2])
    )
  );
};

const dateFormatter = (date: string) => {
  return format(parseISO(date), "d MMMM, yyyy");
};
const skillsLists = [
  { name: "Machine Learning" },
  { name: "Computer Vision" },
  { name: "Seaborn" },
  { name: "Numpy, Pandas" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "C++,JavaScript,Python" },
  { name: "ReactJS,Angular JS,Svelte" },
  { name: "Git" },
  { name: "Data Structures and Algorithms" },
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GridItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blogs",
  },
  {
    name: "Github",
    url: "https://github.com/bimalmagar10",
  },
  {
    name: "Works",
    url: "/works",
  },
  {
    name: "Linked In",
    url: "https://www.linkedin.com/in/bimal-thapa-magar-6582b0256",
  },
];

const getFileNamesWithoutMDXExtension = (namesWithMDXExtension: string[]) => {
  if (namesWithMDXExtension?.length > 0) {
    return namesWithMDXExtension.map((filename: string) => {
      return filename.replace(/\.mdx$/, "");
    });
  }
  return [];
};

interface Snippet {
  slug: string;
  title: string;
  date: string;
  category?: string;
}

const getSnippetsFromCategory = (snippets: Snippet[], category: string) => {
  return snippets?.length > 0
    ? snippets.filter((snippet: Snippet) => snippet?.category === category)
    : [];
};

export {
  timeFormatter,
  dateFormatter,
  skillsLists,
  fetcher,
  GridItems,
  getFileNamesWithoutMDXExtension,
  getSnippetsFromCategory,
};
