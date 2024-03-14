import { LoginSection } from "../components/layout/index";
import { useData } from "@/components/utils/Context";

export default function Home() {
  const { loading, setLoading } = useData();

  return (
    <div className="w-screen flex h-screen">
      <LoginSection />
      <div className="lg:flex flex-1 bg-primary"></div>
    </div>
  );
}
