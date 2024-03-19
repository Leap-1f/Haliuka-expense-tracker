import { Logo, Button, Input } from "../ui/index";
import Link from "next/link";
import { useFormik } from "formik";
import { signUpSchema } from "../validation/validations";

const initialValues = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
};

export function SignUpSection() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
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
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[384px] px-4 sm:px-0"
      >
        <Input
          addClass={"w-full invalid:focus:bg-pink-700"}
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={"Name"}
          type={"text"}
        />
        {errors.name && <small className="text-pink-600">{errors.name}</small>}
        <Input
          addClass={"w-full"}
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={"Email"}
          type={"email"}
        />
        {errors.email && (
          <small className="text-pink-600">{errors.email}</small>
        )}
        <Input
          addClass={"w-full"}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={"Password"}
          type={"password"}
        />
        {errors.password && (
          <small className="text-pink-600">{errors.password}</small>
        )}
        <Input
          addClass={"w-full"}
          name="repassword"
          value={values.rePassword}
          // onChange={handleChange}
          // onBlur={handleBlur}
          placeholder={"Repeat password"}
          type={"password"}
        />
        {errors.rePassword && (
          <small className="text-pink-600">{errors.rePassword}</small>
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
}
