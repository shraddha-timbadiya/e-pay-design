import React, { useState } from "react";
import serviceapi from "../API/ServiceApi";
import ServiceInfo from "../model/service";

function Services() {
  const [serviceData] = useState<ServiceInfo[]>(serviceapi);

  return (
    <>
      <section className="service-main-container" id="services">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <div
                  className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                  key={id}
                >
                  <i className={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p id="main-hero-para">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
