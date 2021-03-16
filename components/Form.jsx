import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';


const Form = () => {


  const [message, writeMessage] = useState({
    name: '',
    email: '',
    text: ''
  });


  const [submitted, setSubmit] = useState(false);
  const [hover, setHover] = useState(true);


  const handleNameChange = (event) => {
    event.persist();
    writeMessage((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    event.persist();
    writeMessage((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleTextChange = (event) => {
    event.persist();
    writeMessage((values) => ({
      ...values,
      text: event.target.value,
    }));
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    setSubmit(true);

  };

  return (
    <div class="formHolder">
      {!submitted ?
        <form onSubmit={handleSubmit} class="contactForm">
        <Fade distance="5vh" delay={500} bottom>
          <input required onChange={handleNameChange} value={message.name} name="name" type="text" placeholder="Your Name"></input>
        </Fade>
        <Fade distance="5vh" delay={700} bottom>
          <input required onChange={handleEmailChange} value={message.email} name="email" type="email" placeholder="Your Email"></input>
        </Fade>
        <Fade distance="5vh" delay={900} bottom>
          <textarea required onChange={handleTextChange} value={message.text} name="message" type="text" class="bigInput" placeholder="Let's chat! What can I do for you?"></textarea>
        </Fade>
        <Fade distance="5vh" delay={1100} bottom>
          <input class="submitButton" type="submit" value="LET'S DO THIS"></input>
        </Fade>
        </form>
        :
        <div class="thanks">

          <div class="airplane">
          <Fade distance="5vh" delay={100} bottom>
            <Image
              src="/Airplane.png"
              alt="airplane"
              width="1378"
              height="620"
            />
          </Fade>
          </div>


          <Fade distance="5vh" bottom>
          <h3>THANKS FOR YOUR MESSAGE!</h3>
          </Fade>
          <Fade distance="5vh" delay={100} bottom>
          <p>I will be in touch with you soon!</p>
          </Fade>
        </div>

      }



    </div>
  );
};


export default Form;