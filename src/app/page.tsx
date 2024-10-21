import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe /ContactMe";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Knowlodges from "@/components/Knowlodges/Knowlodges";
import Projects from "@/components/Projects/Projects";


export default function Home() {
  return (
    <div className="bg-black w-full h-[100vh]">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Knowlodges/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}
