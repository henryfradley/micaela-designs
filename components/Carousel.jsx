import React, { useState } from "react";
import Fade from "react-reveal/Fade";
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
        <Fade distance="5vh" delay={500} bottom>
          <h3>{props.project.name}</h3>
        </Fade>
        <Fade distance="5vh" delay={550} bottom>
          <p>{props.project.mainText}</p>
        </Fade>
        <Fade distance="5vh" delay={600} bottom>
          <p>{props.project.secondaryText}</p>
        </Fade>
          <Fade distance="5vh" delay={600} bottom>
            <div class="types">{typeList}</div>
          </Fade>
      </div>
      <div>
        <div class="projectImage">
          <Fade distance="5vh" delay={500} bottom>
            <Image
              key={images[index]}
              loader={useLocalImages ? undefined : myLoader}
              src={images[index]}
              width="906"
              height="600"
              style={{ maxWidth: '100%', height: 'auto' }}
              priority={true}
            />
          </Fade>
        </div>

        <li class="changeImage">
          <Fade distance="5vh" delay={500} bottom>
            <ul onClick={() => setIndex(0)} class={setClass(0)}>
              01<div class="slider"></div>
            </ul>
          </Fade>
          <Fade distance="5vh" delay={600} bottom>
            <ul onClick={() => setIndex(1)} class={setClass(1)}>
              02<div class="slider"></div>
            </ul>
          </Fade>
          <Fade distance="5vh" delay={700} bottom>
            <ul onClick={() => setIndex(2)} class={setClass(2)}>
              03<div class="slider"></div>
            </ul>
          </Fade>
          <Fade distance="5vh" delay={800} bottom>
            <ul onClick={() => setIndex(3)} class={setClass(3)}>
              04<div class="slider"></div>
            </ul>
          </Fade>
        </li>
      </div>
    </div>
  );
};

export default Carousel;
