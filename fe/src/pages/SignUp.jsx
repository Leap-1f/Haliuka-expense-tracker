import { SignUpSection } from "../components/layout/index";

export default function SignUp() {
  return (
    <div className="w-screen flex h-screen">
      <SignUpSection />
      <div className="hidden lg:flex flex-1 bg-primary"></div>
    </div>
  );
}
