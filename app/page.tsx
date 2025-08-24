import HomePage from "../components/HomePage";

export const metadata = {
  title: "Home",
  description:
    "Welcome to my site.I'm Bimal Thapa Magar and I love training neural networks as well as playing guitar.",
  openGraph: {
    title: "Deep Learning and Guitar is in my DNA(Deoxyribonucleic Acid)",
    description: "Hi, I'm Bimal Thapa Magar and I love Tech.",
  },
};

export default function Home() {
  return <HomePage />;
}
