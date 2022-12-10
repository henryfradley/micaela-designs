
import Fade from 'react-reveal/Fade';
import Image from 'next/image';


const Tools = () => {
  return (
    <div>

      <div class="myTools">
      <Fade distance="5vh" delay={500} bottom>
        <h1>MY TOOLS</h1>
      </Fade>
      </div>

      <div class="toolImages">
        <div class="adobe">
        <Fade distance="5vh" delay={700} bottom>
          <Image
            src="/Adobe.png"
            width="944"
            height="201"
            priority={true}
          />
        </Fade>
        </div>


        <div class="coffee">
        <Fade distance="5vh" delay={1100} bottom>
          <Image
            src="/Coffee.png"
            width="248"
            height="382"
            priority={true}
          />
        </Fade>
        </div>


        <div class="office">
        <Fade distance="5vh" delay={900} bottom>
          <Image
            src="/Microsoft.png"
            width="892"
            height="279"
            priority={true}
           />
        </Fade>
        </div>







      </div>



    </div>
  );
};


export default Tools;