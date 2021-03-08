import React from 'react';
import Carousel from './Carousel.jsx';
import Fade from 'react-reveal/Fade';




const Projects = function(props) {

  let data = props.data.projectData;

  const carousels = data.map(project =>
    <Carousel key={data.indexOf(project)} project={project} />
    )

  return (
    <div class="projects" id="projects">
      <Fade distance="5vh" delay={500} bottom>
        <h1>FEATURED PROJECTS</h1>
      </Fade>
      {carousels}

    </div>
  )
}

export default Projects;