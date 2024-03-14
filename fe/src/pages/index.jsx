import { LoginSection } from "../components/layout/index";
import { useData } from "@/components/utils/Context";

export default function Home() {
  const { loading, setLoading } = useData();

  if (loading) {
    return (
      <div className="w-screen flex h-screen">
        <LoginSection />
      </div>
    );
  }
  return (
    <div className="w-screen flex h-screen">
      <LoginSection />
      <div className="hidden lg:flex flex-1 bg-blue"></div>
    </div>
  );
}
