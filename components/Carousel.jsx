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
  const typeList = types.map((type) => {
    return (
      <div class="type">
        <h5 key={types.indexOf(type)}>{type}</h5>
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
    <div class="project">
      <div class="description">
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
            class="types"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {typeList}
          </motion.div>
      </div>
      <div>
        <div class="projectImage">
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

        <li class="changeImage">
          <motion.ul
            onClick={() => setIndex(0)}
            class={setClass(0)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            01<div class="slider"></div>
          </motion.ul>
          <motion.ul
            onClick={() => setIndex(1)}
            class={setClass(1)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            02<div class="slider"></div>
          </motion.ul>
          <motion.ul
            onClick={() => setIndex(2)}
            class={setClass(2)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            03<div class="slider"></div>
          </motion.ul>
          <motion.ul
            onClick={() => setIndex(3)}
            class={setClass(3)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            04<div class="slider"></div>
          </motion.ul>
        </li>
      </div>
    </div>
  );
};

export default Carousel;
