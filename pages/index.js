import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Tools from '../components/Tools.jsx';

import projectData from '../data/projectData.js';




const Home = () => {




  return (
    <div>
      <Main />
      <Skills />
      <Projects data={projectData} />
      <About />
      <Tools />


    </div>
  );
};


export default Home;