import Image from "next/image";
import { motion } from "framer-motion";

const Main = function () {
  const scroll = (event) => {
    const name = event.target.getAttribute("name");
    const page = document.querySelector(`#${name}`);
    if (name === "projects") {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      page.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="main" id="main">
      <nav class="navbar">
        <ul>
          <li class="pageLink" onClick={scroll} name="main">
            HOME
          </li>
          <li class="pageLink" onClick={scroll} name="projects">
            WORK
          </li>
          <li class="pageLink" onClick={scroll} name="about">
            ABOUT
          </li>
          <li class="pageLink" onClick={scroll} name="contact">
            CONTACT
          </li>
        </ul>
      </nav>
      <div class="mainPage">
        <motion.div
          class="mainText"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            HI. I'M MICAELA,
          </h1>
          <h3>
            A GRAPHIC DESIGNER BASED IN SAN FRANCISCO, CA.
          </h3>

          <div
            class="getInTouch"
            onClick={scroll}
            name="contact"
          >
            GET IN TOUCH
          </div>
        </motion.div>
        <div class="illustration" />
      </div>
    </div>
  );
};

export default Main;
