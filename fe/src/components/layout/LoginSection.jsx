import Input from "../ui/Input";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Link from "next/link";
import { userSchema } from "../Validations/UserValidation";

export function LoginSection() {

  return (
    <div className="w-[384px] flex flex-col gap-10 flex-1 justify-center items-center">
      <Logo width={"25"} height={"24"} addClass={"gap-2"} />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
        <p className="text-slate-700">
          Welcome back, Please enter your details
        </p>
      </div>
      <form className="flex flex-col gap-4 w-[384px] px-4 sm:px-0">
        <Input addClass={"w-full"} placeholder={"Email"} type={"email"} />
        <Input addClass={"w-full"} placeholder={"Password"} type={"password"} />
        <Button text={"Log up"} />
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/SingUp">
          <span className="text-blue ml-2">Sign up</span>
        </Link>
      </p>
    </div>
  );
}
