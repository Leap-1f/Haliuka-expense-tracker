import { Button, Input, Text, Logo } from "../ui/index";
import Link from "next/link";
import { loginSchema } from "../validation/validations";
import { useRouter } from "next/router";
import { useData } from "../utils/Context";
import { useFormik } from "formik";


export function LoginSection() {
  const { data, setData } = useData();
  const router = useRouter();

  const initialValues = {
    email: "",
    password: ""
  }
  

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
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-[384px] px-4 sm:px-0"
      >
        <Input
          addClass={"w-full"}
          name="email"
          onChange={(ev) => setData({ ...data, email: ev.target.value })}
          placeholder={"Email"}
          type={"email"}
        />
        <Input
          addClass={"w-full"}
          name="password"
          onChange={(ev) => setData({ ...data, password: ev.target.value })}
          placeholder={"Password"}
          type={"password"}
        />
        <Button text={"Log in"} addClass={"bg-primary"} />
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
