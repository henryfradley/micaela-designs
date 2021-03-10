const Footer = () => {

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
    <div class="footer">
      <h4>MICAELA ROBINSON</h4>
      <nav class="navbar">
        <ul>
          <li class="pageLink" onClick={scroll} name="main">HOME</li>
          <li class="pageLink" onClick={scroll} name="projects">WORK</li>
          <li class="pageLink" onClick={scroll} name="about">ABOUT</li>
          <li class="pageLink" onClick={scroll} name="contact">CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;