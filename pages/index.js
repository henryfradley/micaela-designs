import Head from 'next/head'
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
      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="./Favicon16x16.png" sizes="16x16"></link>
        <link rel="icon" type="image/png" href="./Favicon32x32.png" sizes="32x32"></link>
      </Head>
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