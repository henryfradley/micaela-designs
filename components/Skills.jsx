import Fade from "react-reveal/Fade";
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
          <Fade distance="5vh" delay={500} bottom>
            <div class="skillImageBlock">
              <Image
                loader={myLoader}
                src="thumbsup.jpg"
                alt="thumbs"
                fill
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </Fade>

          <Fade distance="5vh" delay={600} bottom>
            <div class="skillImageBlock">
              <Image
                loader={myLoader}
                src="coffeecup.jpg"
                alt="coffee"
                fill
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </Fade>

          <Fade distance="5vh" delay={700} bottom>
            <div class="skillImageBlock">
              <Image
                loader={myLoader}
                src="wacom.jpg"
                alt="wacom"
                fill
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </Fade>

          <Fade distance="5vh" delay={800} bottom>
            <div class="skillImageBlock">
              <Image
                loader={myLoader}
                src="desk.jpg"
                alt="desk"
                fill
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </Fade>
        </div>
      </div>

      <div class="goodAt">
        <Fade distance="5vh" delay={500} bottom>
          <h1>WHAT I'M GOOD AT</h1>
        </Fade>
        <div class="boxes">
          <Fade distance="5vh" delay={700} bottom>
            <div>
              <div class="skillBox">
                <div class="icon">
                  <Icon variant="icon-1" />
                </div>
                <div class="iconText">
                  <p>CONCEPT DRIVEN BRANDING</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade distance="5vh" delay={800} bottom>
            <div>
              <div class="skillBox">
                <div class="icon">
                  <Icon variant="icon-2" />
                </div>
                <div class="iconText">
                  <p>ILLUSTRATION</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade distance="5vh" delay={900} bottom>
            <div>
              <div class="skillBox">
                <div class="icon">
                  <Icon variant="icon-3" />
                </div>
                <div class="iconText">
                  <p>FRONT END WEB DESIGN</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade distance="5vh" delay={1000} bottom>
            <div>
              <div class="skillBox">
                <div class="icon">
                  <Icon variant="icon-4" />
                </div>
                <div class="iconText">
                  <p>CREATIVE PROBLEM SOLVING</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
