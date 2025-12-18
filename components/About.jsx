import Image from "next/image";
import { motion } from "framer-motion";

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const About = () => {
  return (
    <div class="about" id="about">
      <div class="profileImage">
        <Image
          loader={myLoader}
          src="headshot-mic.jpg"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <div class="aboutText">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Hello, and thank you for visiting. My name is Micaela, and I am a graphic designer based in Mill Valley, California. Growing up near a major metropolitan area, I was immersed in art and visual influences from a wide range of cultures, which helped shape my passion for design. I earned a Bachelor of Fine Arts in Graphic Design from the University of Hawaiʻi at Mānoa in spring 2019.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          Since then, I have held multiple roles within the industry, my current role as the Women's Health creative lead at the genetic testing company, Natera.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I am currently seeking my next professional opportunity. Please download my resume below to learn more about my experience and background.
        </motion.p>

        <motion.a
          class="resume"
          target="_blank"
          href="https://drive.google.com/file/d/1AeyJ24IC1x71IG5unCObBgcx9LjYc4Nz/view?usp=sharing
"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          MY RESUME
        </motion.a>
      </div>
    </div>
  );
};

export default About;
