import { motion } from "framer-motion";
import Image from "next/image";

import { Icon } from "./Icon";

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Skills = function () {
  return (
    <div class="skills" id="skills">
      <div class="skillsLeft">
        <div class="skillImages">
          <motion.div
            class="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              loader={myLoader}
              src="thumbsup.jpg"
              alt="thumbs"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>

          <motion.div
            class="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Image
              loader={myLoader}
              src="coffeecup.jpg"
              alt="coffee"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>

          <motion.div
            class="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Image
              loader={myLoader}
              src="wacom.jpg"
              alt="wacom"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>

          <motion.div
            class="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Image
              loader={myLoader}
              src="desk.jpg"
              alt="desk"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>
        </div>
      </div>

      <div class="goodAt">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          WHAT I'M GOOD AT
        </motion.h1>
        <div class="boxes">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div class="skillBox">
              <div class="icon">
                <Icon variant="icon-1" />
              </div>
              <div class="iconText">
                <p>CONCEPT DRIVEN BRANDING</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div class="skillBox">
              <div class="icon">
                <Icon variant="icon-2" />
              </div>
              <div class="iconText">
                <p>ILLUSTRATION</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div class="skillBox">
              <div class="icon">
                <Icon variant="icon-3" />
              </div>
              <div class="iconText">
                <p>FRONT END WEB DESIGN</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div class="skillBox">
              <div class="icon">
                <Icon variant="icon-4" />
              </div>
              <div class="iconText">
                <p>CREATIVE PROBLEM SOLVING</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
