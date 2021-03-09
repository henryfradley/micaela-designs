
import Image from 'next/image';




const Main = function(props) {



  return (


    <div className="main" id="main">
      <nav class="navbar">
        <ul>
          <li>HOME</li>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div class="mainPage">
      <div class="illustration">
        <Image
          src="/illustration.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div  class="mainText">
      <h1>HI. I'M MICAELA,</h1>
      <h3>A GRAPHIC DESIGNER BASED IN HONOLULU, HI.</h3>
      <div class="getInTouch"><p>GET IN TOUCH</p></div>
      </div>


      </div>




    </div>
  )
}


export default Main;



