import Input from "../ui/Input";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Link from "next/link";
import { useContext } from "react";
import { StateContext } from "../utils/Context";
import { v4 as uuidv4 } from "uuid";
import { userSchema } from "../validations/UserValidation";

export function SignUpSection() {

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
        className="flex flex-col gap-4 w-[384px] px-4 sm:px-0"
        onSubmit={createUser}
      >
        <Input addClass={"w-full"} placeholder={"Name"} type={"text"} />
        <Input addClass={"w-full"} placeholder={"Email"} type={"email"} />
        <Input addClass={"w-full"} placeholder={"Password"} type={"password"} />
        <Input
          addClass={"w-full"}
          placeholder={"Repeat password"}
          type={"password"}
        />
        <Button text={"Sign up"} />
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/">
          <span className="text-blue ml-2">Log in</span>
        </Link>
      </p>
    </div>
  );
}
