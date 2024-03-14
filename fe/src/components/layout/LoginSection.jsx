import { Button, Input, Text, Logo } from "../ui/index";
import { Loading } from "./index";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useData } from "../utils/Context";

export function LoginSection() {
  const { loading, setLoading } = useData();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const loginUser = async () => {
    setLoading(true);
    try {
      const fetchPromise = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });

      const delayPromise = new Promise((resolve) => setTimeout(resolve, 3000));

      const [response] = await Promise.all([fetchPromise, delayPromise]);

      if (response.ok) {
        const responseData = await response.json();
      router.push("/dashboard");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

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
      <div className="flex flex-col gap-4 w-[384px] px-4 sm:px-0">
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
        <Button text={"Log in"} addClass={"bg-primary"} onClick={loginUser} />
      </div>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/signup">
          <span className="text-primary ml-2">Sign up</span>
        </Link>
      </p>
    </div>
  );
}
