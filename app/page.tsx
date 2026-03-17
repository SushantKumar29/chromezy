import BrandStrip from "./components/sections/BrandStrip";
import Clients from "./components/sections/Clients";
import ContactUs from "./components/sections/ContactUs";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Insights from "./components/sections/Insights";
import Products from "./components/sections/Products";
import Stories from "./components/sections/Stories";
import Technologies from "./components/sections/Technologies";
import Background from "./shared/ui/Background";
import BgOverlay from "./shared/ui/BgOverlay";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-primary">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <BgOverlay />
      </div>

      <Background />
      <Header />

      <main className="relative z-10">
        <Hero />
        <BrandStrip />
        <Products />
        <Clients />
        <Stories />
        <Technologies />
        <Insights />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
