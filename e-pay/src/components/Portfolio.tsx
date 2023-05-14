import React, { useState } from "react";
import Port from "../API/Portfolio";
import PortInfo from "../model/port";

function Portfolio() {
  const [port] = useState<PortInfo[]>(Port);
  return (
    <>
      <section className="port-main-container" id="portfolio">
        <div className="container">
          <h1 className="port-main-heading text-center fw-bold">
            Our Portfolio
          </h1>
          <p className="port-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            impedit ducimus soluta consequuntur asperiores aperiam dignissimos
            ipsam.
          </p>

          <div className="row" data-aos="fade-up">
            {port.map((ele) => {
              return (
                <div
                  className="col-12 col-lg-5 col-xxl-3 port-container-subdiv"
                  key={ele.id}
                >
                  <img
                    src={ele.image}
                    alt="port-img"
                    className="portfolio-image"
                  />
                  <div className="port-info">
                    <h4>Tech</h4>
                    <h1>{ele.name}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
