const Form = () => {

  return (
    <div class="formHolder">
      <form class="contactForm">
        <input type="text" placeholder="Your Name"></input>
        <input type="email" placeholder="Your Email"></input>
        <textarea class="bigInput" type="text" placeholder="Let's chat! What can I do for you?"></textarea>
        <input class="submitButton" type="submit" value="LET'S DO THIS"></input>
      </form>


    </div>
  );
};


export default Form;