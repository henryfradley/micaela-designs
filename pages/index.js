import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';

import projectData from '../data/projectData.js';




const Home = () => {




  return (
    <div>
      <Main />
      <Skills />
      <Projects data={projectData} />


    </div>
  );
};


export default Home;