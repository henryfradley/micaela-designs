import React from 'react';
import Carousel from './Carousel.jsx';
import { motion } from 'framer-motion';




const Projects = function(props) {

  let data = props.data.projectData;

  const carousels = data.map(project =>
    <Carousel key={data.indexOf(project)} project={project} />
    )

  return (
    <div class="projects" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        FEATURED PROJECTS
      </motion.h1>
      {carousels}

    </div>
  )
}

export default Projects;