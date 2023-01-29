import Image from "next/image";
import Form from "./Form.jsx";
import Fade from "react-reveal/Fade";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import Footer from './Footer.jsx'

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Contact = () => {
  return (
    <div class="contactPage" id="contact">
      <div class="contact">
        <div class="contactText">
          <div class="workTogether">
            <Fade distance="5vh" delay={500} bottom>
              <div>
                <h1>I'M CURRENTLY LOOKING FOR NEW WORK OPPORTUNITIES.</h1>
              </div>
            </Fade>
            <Fade distance="5vh" delay={600} bottom>
              <div>
                <h2>
                  Feel free to reach out if you think I'd be a good fit, or to
                  just say hi!
                </h2>
              </div>
            </Fade>
            <Fade distance="5vh" delay={700} bottom>
              <div>
                <a href="mailto:micaela.rob@gmail.com">micaela.rob@gmail.com</a>
              </div>
            </Fade>
            <div class="socials">
              <Fade distance="5vh" delay={1100} bottom>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/micaela-robinson-duran-a6b92b1bb/"
                >
                  <FaLinkedin size="35px" color="#FDFBF5" />
                </a>
              </Fade>

              <Fade distance="5vh" delay={1300} bottom>
                <a
                  target="_blank"
                  href="https://dribbble.com/micaela6/shots"
                >
                  <FiDribbble size="35px" color="#FDFBF5" />
                </a>
              </Fade>
            </div>
          </div>
        </div>
        <Footer />
        <div class="contactImage">
          <Image
            loader={myLoader}
            src="molokai.png"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
