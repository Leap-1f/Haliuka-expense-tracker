import { SignupForm } from "../components/layout/index";

export default function SignUp() {
  return (
    <div className="w-screen flex h-screen">
      <SignupForm />
      <div className="hidden lg:flex flex-1 bg-primary"></div>
    </div>
  );
}
