import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

import { Icon } from "./Icon";

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Skills = memo(function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skillsLeft">
        <div className="skillImages">
          <motion.div
            className="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              loader={myLoader}
              src="thumbsup.jpg"
              alt="Thumbs up gesture showing approval"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>

          <motion.div
            className="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Image
              loader={myLoader}
              src="coffeecup.jpg"
              alt="Coffee cup on desk"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>

          <motion.div
            className="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Image
              loader={myLoader}
              src="wacom.jpg"
              alt="Wacom drawing tablet for design work"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>

          <motion.div
            className="skillImageBlock"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Image
              loader={myLoader}
              src="desk.jpg"
              alt="Designer workspace desk"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </motion.div>
        </div>
      </div>

      <div className="goodAt">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          WHAT I'M GOOD AT
        </motion.h1>
        <div className="boxes">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="skillBox">
              <div className="icon">
                <Icon variant="icon-1" />
              </div>
              <div className="iconText">
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
            <div className="skillBox">
              <div className="icon">
                <Icon variant="icon-2" />
              </div>
              <div className="iconText">
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
            <div className="skillBox">
              <div className="icon">
                <Icon variant="icon-3" />
              </div>
              <div className="iconText">
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
            <div className="skillBox">
              <div className="icon">
                <Icon variant="icon-4" />
              </div>
              <div className="iconText">
                <p>CREATIVE PROBLEM SOLVING</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;
