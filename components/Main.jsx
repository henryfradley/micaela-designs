
import Image from 'next/image';
import Fade from 'react-reveal/Fade';




const Main = function() {

  const scroll = (event) => {
    const name = event.target.getAttribute('name');
    const page = document.querySelector(`#${name}`)
    if (name === 'projects') {
      page.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      page.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }




  return (


    <div className="main" id="main">
      <nav class="navbar">
        <ul>
          <li class="pageLink" onClick={scroll} name="main">HOME</li>
          <li class="pageLink" onClick={scroll} name="projects">WORK</li>
          <li class="pageLink" onClick={scroll} name="about">ABOUT</li>
          <li class="pageLink" onClick={scroll} name="contact">CONTACT</li>
        </ul>
      </nav>
      <div class="mainPage">
      <div  class="mainText">
      <Fade distance="5vh" delay={500} bottom>
      <h1>HI. I'M MICAELA,</h1>
      </Fade>
      <Fade distance="5vh" delay={700} bottom>
      <h3>A GRAPHIC DESIGNER BASED IN HONOLULU, HI.</h3>
      </Fade>

      <Fade distance="5vh" delay={900} bottom>
      <div class="getInTouch" onClick={scroll} name="contact">GET IN TOUCH</div>
      </Fade>
      </div>
      <div class="illustration"></div>


      </div>




    </div>
  )
}


export default Main;



