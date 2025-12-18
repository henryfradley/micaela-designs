import Head from "next/head";
import dynamic from "next/dynamic";
import Main from "../components/Main.jsx";

import projectData from "../data/projectData.js";

// Lazy load below-the-fold components
const Skills = dynamic(() => import("../components/Skills.jsx"), {
  loading: () => null,
});
const Projects = dynamic(() => import("../components/Projects.jsx"), {
  loading: () => null,
});
const About = dynamic(() => import("../components/About.jsx"), {
  loading: () => null,
});
const Contact = dynamic(() => import("../components/Contact.jsx"), {
  loading: () => null,
});

const Home = () => {
  return (
    <div>
      <Head>
        <title>Micaela Designs - Graphic Designer Portfolio</title>
        <meta name="description" content="Micaela is a graphic designer based in San Francisco, CA specializing in concept-driven branding, illustration, and front-end web design." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="./Favicon16x16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="./Favicon32x32.png"
          sizes="32x32"
        ></link>

        <link rel="preload" href="./illustration.png" as="image" />
        <link rel="preload" href="./bg.png" as="image" />
      </Head>

      <div className="wrapper">
        <Main />
        <Skills />
        <Projects data={projectData} />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
