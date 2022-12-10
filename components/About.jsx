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
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div class="aboutText">
        <Fade distance="5vh" delay={500} bottom>
          <h1>ABOUT ME</h1>
        </Fade>
        <Fade distance="5vh" delay={600} bottom>
          <p>
            Hi, thanks for stopping by! My name is Micaela and I’m a graphic
            designer from Mill Valley, CA. Having grown up near a big
            metropolitan city, I was constantly surrounded by art from a variety
            of cultures. My love for art inspired my profession as a graphic
            designer. I graduated from UH Manoa with a BFA in Graphic Design in
            the spring of 2019.
          </p>
        </Fade>
        <Fade distance="5vh" delay={650} bottom>
          <p>
            Since then, I have held multiple roles in the industry, my most
            recent being a graphic designer at the real estate technology
            company Doma.
          </p>
        </Fade>
        <Fade distance="5vh" delay={700} bottom>
          <p>
            I’m currently looking for my next exciting role! Download my resume
            below to learn more about me.
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
