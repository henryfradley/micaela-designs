import Image from 'next/image';
import Form from './Form.jsx';
import Fade from 'react-reveal/Fade';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';


const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${quality || 75}`;
};



const Contact = () => {

  return (
    <div class="contactPage" id="contact">
      <div class="contact">
      <div class="contactText">
        <div class="workTogether">
        <Fade distance="5vh" delay={500} bottom>
          <div><h1>WANT TO WORK TOGETHER? BECAUSE I DO!</h1></div>
        </Fade>
        <Fade distance="5vh" delay={700} bottom>
          <a href="mailto:micaela.rob@gmail.com">micaela.rob@gmail.com</a>
        </Fade>
          <div class="socials">
          <Fade distance="5vh" delay={900} bottom>
            <a target="_blank" href="https://www.instagram.com/micaelacreates/"><FaInstagram size="35px" color="#FDFBF5" /></a>
          </Fade>
          <Fade distance="5vh" delay={1000} bottom>
            <a target="_blank" href="https://www.linkedin.com/in/micaela-robinson-duran-a6b92b1bb/"><FaLinkedin size="35px" color="#FDFBF5" /></a>
          </Fade>

          <Fade distance="5vh" delay={1000} bottom>
            <a target="_blank" href="https://dribbble.com/micaela6/collections"><FiDribbble size="35px" color="#FDFBF5" /></a>
          </Fade>
        </div>

        </div>
      </div>
      <div class="contactImage">
        <Image
          loader={myLoader}
          src="000010.jpg"
          layout="fill"
          objectFit="cover"
        />

      </div>

    </div>
    <Form />

    </div>

  );
};


export default Contact;