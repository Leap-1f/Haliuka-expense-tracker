import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z\s-]+$/,
      "Name must only contain letters, spaces and hyphens"
    )
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const amount = Yup.object().shape({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required *"),
});
