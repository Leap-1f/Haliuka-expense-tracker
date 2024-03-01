import { LoginSection } from "../components/layout/index";

export default function Home() {
  return (
    <div className="w-screen flex h-screen">
      <LoginSection />
      <div className="hidden lg:flex flex-1 bg-blue"></div>
    </div>
  );
}
