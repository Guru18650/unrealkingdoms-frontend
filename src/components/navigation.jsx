import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Navigation = (props) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
}

const handleRegister = () => {
  navigate("/register");
}

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#home">
            <img src={Logo} />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a
                href="./CAYCWhitePaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhitePaper
              </a>
            </li>

            <li>
              <a href="#footer" className="page-scroll">
                Contact
              </a>
            </li>

            <li>
              <button className="register nav-reg" onClick={handleRegister}> Register </button>
            </li>
            <li>
              <button className="login nav-reg" onClick={handleLogin}> Login </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
