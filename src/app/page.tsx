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
      <section className="main_page-section">
        <Hero/>
      </section>
      <section className="main_page-section">
        <AboutMe/>
      </section>
      <section className="main_page-section">
        <Knowlodges/>
      </section>
      <section className="main_page-section">
        <Projects/>
      </section>
      <section className="main_page-section">
        <ContactMe/>
      </section>

      <Footer/>
    </div>
  );
}
