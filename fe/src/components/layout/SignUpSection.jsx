import { Logo, Button, Input } from "../ui/index";
import Link from "next/link";
import { useFormik } from "formik";
import { signUpSchema } from "../validation/validations";
import { useData } from "../utils/Context";
import Router from "next/router";

export const SignupForm = () => {
  const { setUserData } = useData();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        setUserData(values);
        Router.push("/currency");
      } catch (err) {
        console.error("Signup failed" + err);
      }
    },
  });

  return (
    <div className="w-[384px] flex flex-col gap-10 flex-1 justify-center items-center">
      <div className="flex justify-center">
        <Logo addClass={"gap-2"} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Create Geld account
        </h1>
        <p className="text-slate-700">
          Sign up below to create your Wallet account
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-[384px] px-4 sm:px-0"
      >
        <Input
          addClass={"w-full"}
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Name"}
          type={"text"}
        />
        {formik.errors.name && (
          <small className=" text-pink-600">{formik.errors.name}</small>
        )}
        <Input
          addClass={"w-full"}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Email"}
          type={"email"}
        />
        {formik.errors.email && (
          <small className="text-pink-600">{formik.errors.email}</small>
        )}
        <Input
          addClass={"w-full"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Password"}
          type={"password"}
        />
        {formik.errors.password && (
          <small className="text-pink-600">{formik.errors.password}</small>
        )}
        <Input
          addClass={"w-full"}
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Repeat password"}
          type={"password"}
        />
        {formik.errors.rePassword && (
          <small className="text-pink-600">{formik.errors.rePassword}</small>
        )}
        <Button type="submit" text={"Sign up"} addClass={"bg-primary"} />
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/">
          <span className="text-primary ml-2">Log in</span>
        </Link>
      </p>
    </div>
  );
};
