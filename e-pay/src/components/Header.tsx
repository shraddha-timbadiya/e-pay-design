import React, { useState, useEffect } from "react";
import AOS from "aos";

const Header: React.FC = () => {
  const [show, setshow] = useState<Boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const darkMode = (): void => {
    setshow(!show);
    // const image = document.getElementById('icon') as HTMLImageElement
    const icon = document.getElementById("nav-icon") as HTMLDivElement;

    document.body.classList.add("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      // image.src = 'images/sun.png'
      icon.className = "navbar navbar-expand-lg sticky-top navbar-dark";
    }
  };
  const lightMode = (): void => {
    const icon = document.getElementById("nav-icon") as HTMLDivElement;

    document.body.classList.remove("dark-theme");
    icon.className = "navbar navbar-expand-lg sticky-top navbar-light";
  };

  return (
    <>
      <header>
        <section className="container main-hero-container" id="home">
          <div className="row header-space">
            <div
              className="col-12 col-lg-6 header-left-side d-flex justify-content-center 
            flex-column align-items-start order-lg-first order-last"
            >
              <h1 className="display-2" data-aos="zoom-in">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p id="main-hero-para">
                Making it as easy as possible for your customers to pay is
                essential for increasing conversions and sales. It’s easy to
                slap PayPal on your site and call it a day – but if you’re
                serious about making it easier for your customers to pay and
                increasing sales for your business, you will want to have full
                control over the entire checkout process.{" "}
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div
              className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
            align-items-center main-herosection-images order-md-first order-sm-first"
            >
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
      <div className="ld-icon">
        <div onClick={darkMode}>
          <img src="images/moon.png" alt="" className="moon" id="moonicon" />
          {/* <img src="images/sun.png" alt=""  className='moon' id='icon'/> */}
        </div>
        <div onClick={lightMode}>
          <img src="images/sun.png" alt="" className="sun" id="sunicon" />
        </div>
      </div>
    </>
  );
};

export default Header;
