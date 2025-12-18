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
    <div className="footer">
      <h4>MICAELA ROBINSON</h4>
        <ul>
          <li className="pageLink" onClick={scroll} name="main">HOME</li>
          <li className="pageLink" onClick={scroll} name="projects">WORK</li>
          <li className="pageLink" onClick={scroll} name="about">ABOUT</li>
          <li className="pageLink" onClick={scroll} name="contact">CONTACT</li>
        </ul>
    </div>
  );
};

export default Footer;