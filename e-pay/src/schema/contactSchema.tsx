import * as Yup from "yup";
import FormModel from "../model/contact";

export const contactSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("Please enter your last name"),
  phone: Yup.number().min(10).required("Please enter your phone no."),
  email: Yup.string().email().required("Please enter your email"),
  address: Yup.string().required("Please enter your address"),
  message: Yup.string().min(2).required("Please enter your message"),
} as Record<keyof FormModel, any>);
