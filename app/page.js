import HomePage from "../components/HomePage"

export const metadata = {
    title:'Home',
    description:"Welcome to my site.I'm Bimal Thapa Magar and I am ReactJS enthusiast, Software Engineer and a guitar player",
    openGraph:{
      title:'ReactJS Developer, Engineer and Knowledge Seeker',
      description:"Hi, I'm Bimal Thapa Magar and I am ReactJS enthusiast, Software Engineer and a guitar player.",
    }
}


export default function Home() {
  return (
     <HomePage/>
  )
}

