import Image from 'next/image';


const myLoader = ({ src, width, quality }) => {
  return `https://d2k5lcv0ndozn2.cloudfront.net/${src}?w=${width}&q=${quality || 75}`
}


const About = () => {


  return (
    <div class="about" id="about">
      <div class="profileImage">
        <Image
          loader={myLoader}
          src="headshot.jpg"
          layout="fill"
          objectFit="cover"
        />

      </div>
      <div class="aboutText">
        <h1>ABOUT ME</h1>
        <p>Hi, thanks for stopping by! My name is Micaela and I’m a graphic designer from Mill Valley, CA. Having grown up near a big metropolitan city, I was constantly surrounded by art from a variety of cultures. My love for art inspired my profession as a graphic designer. I graduated from UH Manoa with a BFA in Graphic Design in the spring of 2019.</p>
        <p>Since then, I have been on the move expanding my portfolio, acquiring freelance projects, and working for the digital media agency, Ellemsee Media, in Downtown Honolulu.</p>
        <p>Have a project in mind you want to discuss? Let’s do it! Send me a message below to get started.</p>
        <div class="favorites">
          <p>FAVORITE SNACK: KETTLE CORN</p>
          <p>FAVORITE BOOK: READY PLAYER ONE</p>
          <p>FAVORITE PASTIME: LEARNING PIANO</p>
        </div>

      </div>

    </div>
  );
};



export default About;