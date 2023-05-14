import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

const Nav: React.FC = () => {
  const [show, setshow] = useState<Boolean>(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id="nav-icon">
        <div className="container">
          <a className="navbar-brand" href="www.google.com">
            <img src="images/logo2.jpg" className="logo" alt="e-pay" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setshow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "services",
                "contact",
                "career",
                "portfolio",
              ]}
              offset={100}
              activeNavClass="active"
              scrollDuration="1100"
              headerBackground="true"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => setshow(!show)}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#about"
                    onClick={() => setshow(!show)}
                  >
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={() => setshow(!show)}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#portfolio"
                    onClick={() => setshow(!show)}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#career"
                    onClick={() => setshow(!show)}
                  >
                    Careers
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    onClick={() => setshow(!show)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </ScrollspyNav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
