import React, { useState } from "react";
import careersApi from "../API/Career";
import CareerInfo from "../model/career";

const Careers: React.FC = () => {
  const [career] = useState<CareerInfo[]>(careersApi);
  return (
    <>
      <section className="service-main-container" id="career">
        <div className="container service-container">
          <h1 className="career-main-heading text-center fw-bold">
            We're Hiring JOIN US
          </h1>
          <div className="row" data-aos="fade-up">
            {career.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <div
                  className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                  key={id}
                >
                  <img src={logo} alt="design" className="logo-design" />
                  <h2 className="sub-heading">{title}</h2>
                  <p id="main-hero-para">{info}</p>
                  <button className=" btn-style-border career-btn">
                    View Opening
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
