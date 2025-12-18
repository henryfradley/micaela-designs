import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Carousel = function (props) {
  const [index, setIndex] = useState(0);
  const images = props.project.images;
  const useLocalImages = props.project.useLocalImages || false;

  const types = props.project.types;
  const typeList = types.map((type, index) => {
    return (
      <div className="type" key={`type-${index}`}>
        <h5>{type}</h5>
      </div>
    );
  });

  const setClass = (num) => {
    if (num === index) {
      return "selected";
    }
    return "notSelected";
  };

  return (
    <div className="project">
      <div className="description">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {props.project.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {props.project.mainText}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {props.project.secondaryText}
        </motion.p>
          <motion.div
            className="types"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {typeList}
          </motion.div>
      </div>
      <div>
        <div className="projectImage">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              key={images[index]}
              loader={useLocalImages ? undefined : myLoader}
              src={images[index]}
              width="906"
              height="600"
              style={{ maxWidth: '100%', height: 'auto' }}
              priority={true}
            />
          </motion.div>
        </div>

        <ul className="changeImage">
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => setIndex(0)}
              className={setClass(0)}
              aria-label="View image 1"
            >
              <span>01</span>
              <div className="slider"></div>
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => setIndex(1)}
              className={setClass(1)}
              aria-label="View image 2"
            >
              <span>02</span>
              <div className="slider"></div>
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              onClick={() => setIndex(2)}
              className={setClass(2)}
              aria-label="View image 3"
            >
              <span>03</span>
              <div className="slider"></div>
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={() => setIndex(3)}
              className={setClass(3)}
              aria-label="View image 4"
            >
              <span>04</span>
              <div className="slider"></div>
            </button>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
