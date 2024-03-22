import { LoginSection, Loading } from "../components/layout/index";
import { useData } from "@/components/utils/Context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { loading, setLoading } = useData();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = window.localStorage.getItem("loggedIn");
    if (loggedIn) {
      router.replace("/dashboard");
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="w-screen flex h-screen">
      {loading ? (
        <div className="w-screen flex h-screen">
          <Loading />
        </div>
      ) : (
        <div className="w-screen flex h-screen">
          <LoginSection />
          <div className="lg:flex flex-1 bg-primary"></div>
        </div>
      )}
    </div>
  );
}
