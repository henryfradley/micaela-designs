import Image from 'next/image';
import Form from './Form.jsx';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';


const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${quality || 75}`;
};



const Contact = () => {

  return (
    <div class="contactPage">
      <div class="contact">
      <div class="contactText">
        <div class="workTogether">
          <h1>WANT TO WORK TOGETHER? BECAUSE I DO!</h1>
          <a>micaela.rob@gmail.com</a>
          <div class="socials">
            <a target="_blank" href="https://www.instagram.com/micaelacreates/"><FaInstagram size="35px" color="#FDFBF5" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/micaela-robinson-duran-a6b92b1bb/"><FaLinkedin size="35px" color="#FDFBF5" /></a>
            <a target="_blank" href="https://dribbble.com/micaela6/collections"><FiDribbble size="35px" color="#FDFBF5" /></a>
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