import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Tools from '../components/Tools.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

import projectData from '../data/projectData.js';




const Home = () => {




  return (
    <div>
      <Main />
      <Skills />
      <Projects data={projectData} />
      <About />
      <Tools />
      <Contact />
      <Footer />


    </div>
  );
};


export default Home;