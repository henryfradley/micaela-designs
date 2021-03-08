import Fade from 'react-reveal/Fade';
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${quality || 75}`
}


const Skills = function() {

  return (

    <div class="skills" id="skills">
      <div class="skillsLeft">

            <div class="skillImages">
              <Fade distance="5vh" delay={500} bottom>
                <div>
                  <Image
                    loader={myLoader}
                    src="thumbsup.jpg"
                    alt="thumbs"
                    width="300"
                    height="300"
                  />

                </div>
              </Fade>
              <Fade distance="5vh" delay={600} bottom>
                <div>
                <Image
                    loader={myLoader}
                    src="coffeecup.jpg"
                    alt="coffee"
                    width="300"
                    height="300"
                  />
                </div>
              </Fade>
              <Fade distance="5vh" delay={700} bottom>
                <div>

                <Image
                    loader={myLoader}
                    src="wacom.jpg"
                    alt="wacom"
                    width="300"
                    height="300"
                  />
                </div>
              </Fade>
              <Fade distance="5vh" delay={800} bottom>
                <div>

                <Image
                    loader={myLoader}
                    src="desk.jpg"
                    alt="desk"
                    width="300"
                    height="300"
                  />
                </div>
              </Fade>
            </div>

      </div>
      <div>
        <div class="goodAt">
          <h1 class="goodAtHead">WHAT I'M GOOD AT</h1>
          <div class="boxes">
            <div class="skillBox">
              <div>
                {/* <img src={Icon1} alt="icon1"></img> */}
              </div>
              <div>
              <p>CONCEPT DRIVEN BRANDING</p>
              </div>
            </div>
            <div class="skillBox">
            <div>
                {/* <img src={Icon2} alt="icon1"></img> */}
              </div>
              <div>
              <p>ILLUSTRATION</p>
              </div>
            </div>


            <div class="skillBox">
            <div>
                {/* <img src={Icon3} alt="icon1"></img> */}
              </div>
              <div>
              <p>FRONT END WEB DESIGN</p>
              </div>
            </div>


            <div class="skillBox">
              <div>
                {/* <img src={Icon4} alt="icon1"></img> */}
              </div>
              <div>
              <p>CREATIVE PROBLEM SOLVING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Skills;