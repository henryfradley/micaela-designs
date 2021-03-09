import Fade from 'react-reveal/Fade';
import Image from 'next/image'


const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${quality || 75}`
};


const Skills = function() {






  return (

    <div class="skills" id="skills">
      <div class="skillsLeft">

            <div class="skillImages">

                <div class="skillImageBlock">
                <Fade distance="5vh" delay={500} bottom>
                  <Image
                    loader={myLoader}
                    src="thumbsup.jpg"
                    alt="thumbs"
                    width="300"
                    height="300"
                  />
                </Fade>

                </div>


                <div class="skillImageBlock">
                <Fade distance="5vh" delay={600} bottom>
                <Image
                    loader={myLoader}
                    src="coffeecup.jpg"
                    alt="coffee"
                    width="300"
                    height="300"
                  />
                </Fade>
                </div>


                <div class="skillImageBlock">
                <Fade distance="5vh" delay={700} bottom>
                <Image
                    loader={myLoader}
                    src="wacom.jpg"
                    alt="wacom"
                    width="300"
                    height="300"
                  />
                </Fade>
                </div>


                <div class="skillImageBlock">
                <Fade distance="5vh" delay={800} bottom>
                <Image
                    loader={myLoader}
                    src="desk.jpg"
                    alt="desk"
                    width="300"
                    height="300"
                  />
                </Fade>
                </div>

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
                <Image
                  src="/icon1.png"
                  alt="branding"
                  width="200"
                  height="200"
                />
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
                <Image
                  src="/icon2.png"
                  alt="illustration"
                  width="200"
                  height="200"
                />
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
                <Image
                  src="/icon3.png"
                  alt="web design"
                  width="200"
                  height="200"
                />
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
                <Image
                  src="/icon4.png"
                  alt="problem solving"
                  width="200"
                  height="200"
                />
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
  )
}


export default Skills;