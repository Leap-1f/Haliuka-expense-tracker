import Input from "../ui/Input";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Link from "next/link";
import { userSchema } from "../validations/UserValidation";
import { useUserData } from "../utils/Context";

export function SignUpSection() {
  const { userData, setUserData } = useUserData();
  const createUser = async (event) => {
    // event.preventDefault();
    const isValid = await userSchema.isValid(userData);
    // try {
    //   console.log(data);
    //   const response = await fetch("http://localhost:8080/api/signup", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ ...data }),
    //   });

    //   if (response.ok) {
    //     const responseData = await response.json();
    //     console.log(responseData);
    //   } else {
    //     throw new Error("Failed to create new user");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

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
      <div className="flex flex-col gap-4 w-[384px] px-4 sm:px-0">
        <Input
          addClass={"w-full"}
          name="name"
          onChange={(ev) => setUserData({ ...userData, name: ev.target.value })}
          placeholder={"Name"}
          type={"text"}
        />
        <Input
          addClass={"w-full"}
          name="email"
          onChange={(ev) => setUserData({ ...userData, email: ev.target.value })}
          placeholder={"Email"}
          type={"email"}
        />
        <Input
          addClass={"w-full"}
          name="password"
          onChange={(ev) => setUserData({ ...userData, password: ev.target.value })}
          placeholder={"Password"}
          type={"password"}
        />
        <Input
          name="repassword"
          onChange={(ev) => setUserData({ ...userData, repassword: ev.target.value })}
          addClass={"w-full"}
          placeholder={"Repeat password"}
          type={"password"}
        />
        <Link href="/Currency">
          <Button text={"Sign up"} onClick={createUser} />
        </Link>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/">
          <span className="text-blue ml-2">Log in</span>
        </Link>
      </p>
    </div>
  );
}
