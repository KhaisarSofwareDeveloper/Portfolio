import"./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Experience2 from "./components/experience/Experience2";
import Experience3 from "./components/experience/Experience3";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Services type="skills" /></section>
    <section id="Experience"><Experience type="experience" /></section>
    <section><Experience2 /></section>
    <section><Experience3/></section>
    <section id="Education"><Education/></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
