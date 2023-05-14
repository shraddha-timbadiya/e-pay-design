import React, { useState } from "react";
import workapi from "../API/WorkApi";
import WorkDataInfo from "../model/workData";

const HowItWork: React.FC = () => {
  const [workData] = useState<WorkDataInfo[]>(workapi);
  return (
    <>
      <section className="work section">
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <div
                  className="col-12 col-lg-4 text-center work-container-subdiv"
                  key={id}
                >
                  <i className={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="w-100" id="main-hero-para">
                    {info}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default HowItWork;
