import "./Header.css";

const Header = () => {
  return (
    <section id="nav-container">
      <nav id="nav">
        <a
          href="#home"
          title="Go to Home"
          className="nav-item"
        >
          Home
        </a>
        <a
          href="#projects"
          title="Go to Projects"
          className="nav-item"
        >
          Projects
        </a>
        <a
          href="#about"
          title="Go to About"
          className="nav-item"
        >
          About
        </a>
        <a
          href="#contact"
          title="Go to Contact"
          className="nav-item nav-item--selected"
        >
          Contact
        </a>
      </nav>
    </section>
  );
};

export default Header;
