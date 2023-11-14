import AboutMeRoot from "../../components/AboutMeRoot"

export const metadata = {
    title:'About Me',
    description:"Bimal Thapa Magar's about me page describes about what his skills are and what tech stacks he is proficient in.",
    openGraph:{
        title:"Bimal Thapa Magar's About Me Page",
        description:"This is Bimal Thapa Magar's about me page with his relevant skills and describing about who he really is."
    }
};

export default function AboutMe() {
    return (
        <AboutMeRoot/>
    )
}