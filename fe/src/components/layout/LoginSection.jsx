import { Button, Input, Text, Logo } from "../ui/index";
import Link from "next/link";
import { loginSchema } from "../validation/validations";
import { useRouter } from "next/router";
import { useData } from "../utils/Context";
import { useFormik } from "formik";
import Router from "next/router";

export function LoginSection() {
  const { data, setData } = useData();
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const response = await res.json();
        if (response.success) {
          sessionStorage.setItem("userId", response.userId);
          router.push("/dashboard")
        } else {
          console.error("Backend error: ", response.error);
        }
      } catch (err) {
        console.error("Network error: ", err);
      }
    },
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    router.push("/dashboard");
  };

  return (
    <div className="w-[384px] flex flex-col gap-10 flex-1 justify-center items-center">
      <Logo addClass={"gap-2"} />
      <div className="flex flex-col items-center">
        <Text
          text={"Welcome back"}
          addClass={"text-2xl font-bold text-slate-900"}
        />
        <Text
          text={"Welcome back, Please enter your details"}
          addClass={"text-slate-700"}
        />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-[384px] px-4 sm:px-0"
      >
        <Input
          addClass={"w-full"}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={"Email"}
          type={"email"}
        />
        {formik.errors.email && (
          <small className=" text-pink-600">{formik.errors.email}</small>
        )}
        <Input
          addClass={"w-full"}
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={"Password"}
          type={"password"}
        />
        {formik.errors.password && (
          <small className=" text-pink-600">{formik.errors.password}</small>
        )}
        <Button text={"Log in"} type={"submit"} addClass={"bg-primary"} />
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/signup">
          <span className="text-primary ml-2">Sign up</span>
        </Link>
      </p>
    </div>
  );
}
