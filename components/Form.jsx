import { useState } from 'react';
import { motion } from 'framer-motion';
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
        <motion.input
          required
          onChange={handleNameChange}
          value={message.name}
          name="name"
          type="text"
          placeholder="Your Name"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.input
          required
          onChange={handleEmailChange}
          value={message.email}
          name="email"
          type="email"
          placeholder="Your Email"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />
        <motion.textarea
          required
          onChange={handleTextChange}
          value={message.text}
          name="message"
          type="text"
          class="bigInput"
          placeholder="Let's chat! What can I do for you?"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
        <motion.input
          class="submitButton"
          type="submit"
          value="LET'S DO THIS"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        />
        </form>
        :
        <div class="thanks">

          <div class="airplane">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/Airplane.png"
              alt="airplane"
              width="1378"
              height="620"
            />
          </motion.div>
          </div>


          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          THANKS FOR YOUR MESSAGE!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
          I will be in touch with you soon!
          </motion.p>
        </div>

      }



    </div>
  );
};


export default Form;