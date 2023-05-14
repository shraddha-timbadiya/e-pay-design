import React from "react";
import { MdPhoneCallback, MdEmail, MdLocationOn } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container footer-b">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-lg-5 col-12 text-center text-lg-start">
                  <img src="images/logo2.jpg" className="logo" alt="e-pay" />
                </div>
                <div className="col-lg-7 col-12 text-center text-lg-end">
                  <p className=" pt-3 pb-2 pt-lg-0" id="main-hero-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud ullamco{" "}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row py-5">
                <div className="col-md-12 col-lg-4 py-2  social-info">
                  <div className="d-flex justify-content-lg-start justify-content-center">
                    <div className="fs-2">
                      <MdLocationOn className="social-icons" />
                    </div>
                    <div
                      className="align-self-center ms-3 "
                      id="main-hero-para"
                    >
                      565, Newstone Rd, New York, United States
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-lg-4 py-2 social-info">
                  <div className="d-flex justify-content-center">
                    <div className="fs-2">
                      <MdEmail className="social-icons" />
                    </div>
                    <div className="align-self-center ms-3" id="main-hero-para">
                      contact@yoursitename.com
                    </div>
                  </div>
                </div>
                <div className=" col-md-12 col-lg-4 py-2  social-info">
                  <div className="d-flex justify-content-lg-end justify-content-center">
                    <div className="fs-2">
                      <MdPhoneCallback className="social-icons" />
                    </div>
                    <div className="align-self-center ms-3" id="main-hero-para">
                      001 253-567-8910, 001 333-444-6699
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row p-0">
                <div className="col-12 col-lg-4 text-center text-lg-start">
                  <ul className="socials list-group d-inline-flex list-group-horizontal pt-0">
                    <li className="me-3 p-5">
                      <a href="www.facebook.com">
                        <i className="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </li>
                    <li className="me-3 p-5 ">
                      <a href="www.instagram.com">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </li>
                    <li className="me-3 p-5">
                      <a href="www.youtube.com">
                        <i className="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </li>
                    <li className="me-3 p-5">
                      <a href="www.twitter.com">
                        <i className="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-8 align-self-center pt-lg-0">
                  <form className="row justify-content-center justify-content-lg-end ">
                    <div className="col-auto">
                      <input
                        type="text"
                        className="form-control form-control-lg shadow-xlg rounded-pill sub-input"
                        placeholder="Enter your email here..."
                      />
                    </div>
                    <div className="col-auto pt-5 mt-2 pt-md-0">
                      <button
                        type="submit"
                        className="btn btn-primary  btn-lg-alt shadow-xlg rounded-pill sub-btn btn-style-border"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <p className="text-center w-100" id="main-hero-para">
            Copyright @ 2023 E-Pay. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
