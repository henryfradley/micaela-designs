import Image from "next/image";
import { memo } from "react";
import Form from "./Form.jsx";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import Footer from './Footer.jsx'

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Contact = memo(() => {
  return (
    <div className="contactPage" id="contact">
      <div className="contact">
        <div className="contactText">
          <div className="workTogether">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1>I'M CURRENTLY LOOKING FOR NEW WORK OPPORTUNITIES.</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2>
                Feel free to reach out if you think I'd be a good fit, or to
                just say hi!
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href="mailto:micaela.rob@gmail.com">micaela.rob@gmail.com</a>
            </motion.div>
            <div className="socials">
              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/micaela-robinson-duran-a6b92b1bb/"
                aria-label="Visit Micaela's LinkedIn profile"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <FaLinkedin size="35px" color="#FDFBF5" />
              </motion.a>

              <motion.a
                target="_blank"
                href="https://dribbble.com/micaela6/shots"
                aria-label="Visit Micaela's Dribbble portfolio"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <FiDribbble size="35px" color="#FDFBF5" />
              </motion.a>
            </div>
          </div>
        </div>
        <Footer />
        <div className="contactImage">
          <Image
            loader={myLoader}
            src="molokai.png"
            alt="Scenic view of Molokai, Hawaii"
            fill
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>

      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
