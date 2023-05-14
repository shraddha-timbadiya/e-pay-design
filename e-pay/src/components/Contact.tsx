import React from "react";
import { useFormik } from "formik";
import { contactSchema } from "../schema/contactSchema";
import FormModel from "../model/contact";

const Contact: React.FC = () => {
  const initialValues = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  } as FormModel;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: async (values: FormModel, action) => {
        const res = await fetch("http://localhost:5000/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
          window.alert("invalid data");
        } else {
          window.alert("data send successfully..");
          console.log(data);
        }
        action.resetForm();
      },
    });
  return (
    <>
      <section className="contactus-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p id="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="fname"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={values.fname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.fname && touched.fname ? (
                          <p className="form-error">{errors.fname}</p>
                        ) : null}
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lname"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={values.lname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lname && touched.lname ? (
                          <p className="form-error">{errors.lname}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.phone && touched.phone ? (
                          <p className="form-error">{errors.phone}</p>
                        ) : null}
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <p className="form-error">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.address && touched.address ? (
                          <p className="form-error">{errors.address}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.message && touched.message ? (
                          <p className="form-error">{errors.message}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label" id="main-hero-para">
                        I agree that the E-pay may contact me at the email
                        address or phone number above
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
