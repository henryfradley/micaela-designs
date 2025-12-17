import Image from "next/image";
import Fade from "react-reveal/Fade";

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
        <Fade distance="5vh" delay={500} bottom>
          <h1>ABOUT ME</h1>
        </Fade>
        <Fade distance="5vh" delay={600} bottom>
          <p>
          Hello, and thank you for visiting. My name is Micaela, and I am a graphic designer based in Mill Valley, California. Growing up near a major metropolitan area, I was immersed in art and visual influences from a wide range of cultures, which helped shape my passion for design. I earned a Bachelor of Fine Arts in Graphic Design from the University of Hawaiʻi at Mānoa in spring 2019.
          </p>
        </Fade>

        <Fade distance="5vh" delay={650} bottom>
          <p>
          Since then, I have held multiple roles within the industry, my current role as the Women’s Health creative lead at the genetic testing company, Natera. 
          </p>
        </Fade>
        <Fade distance="5vh" delay={700} bottom>
          <p>
          I am currently seeking my next professional opportunity. Please download my resume below to learn more about my experience and background.
          </p>
        </Fade>

        <Fade distance="5vh" delay={1100} bottom>
          <a
            class="resume"
            target="_blank"
            href="https://drive.google.com/file/d/1AeyJ24IC1x71IG5unCObBgcx9LjYc4Nz/view?usp=sharing
"
          >
            MY RESUME
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default About;
