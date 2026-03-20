import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Background from "./shared/ui/Background";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("./components/Main"), { ssr: true });

export default function Home() {
  return (
    <div>
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
