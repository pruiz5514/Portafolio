import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe /ContactMe";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Knowlodges from "@/components/Knowlodges/Knowlodges";
import Projects from "@/components/Projects/Projects";
import { ProjectsArray } from "@/data/projects";


export default function Home() {
  return (
    <div className="bg-black w-full h-[100vh]">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Knowlodges/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}
