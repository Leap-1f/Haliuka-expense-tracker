import { Button, Input, Text, Logo } from "../ui/index";
import Link from "next/link";
import { userSchema } from "../validations/UserValidation";

export function LoginSection() {
  return (
    <div className="w-[384px] flex flex-col gap-10 flex-1 justify-center items-center">
      <Logo
        addClass={"gap-2"}
      />
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
      <form className="flex flex-col gap-4 w-[384px] px-4 sm:px-0">
        <Input addClass={"w-full"} placeholder={"Email"} type={"email"} />
        <Input addClass={"w-full"} placeholder={"Password"} type={"password"} />
        <Button text={"Log up"} />
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/SignUp">
          <span className="text-blue ml-2">Sign up</span>
        </Link>
      </p>
    </div>
  );
}
