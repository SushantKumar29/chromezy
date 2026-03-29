import dynamic from "next/dynamic";
import LoadingSkeleton from "../shared/ui/LoadingSkeleton";

const Hero = dynamic(() => import("./sections/Hero"), {
  loading: () => <LoadingSkeleton />,
});

const BrandStrip = dynamic(() => import("./sections/BrandStrip"), {
  loading: () => <LoadingSkeleton />,
});

const Products = dynamic(() => import("./sections/Products"), {
  loading: () => <LoadingSkeleton />,
});

const Clients = dynamic(() => import("./sections/Clients"), {
  loading: () => <LoadingSkeleton />,
});

const Stories = dynamic(() => import("./sections/Stories"), {
  loading: () => <LoadingSkeleton />,
});

const Technologies = dynamic(() => import("./sections/Technologies"), {
  loading: () => <LoadingSkeleton />,
});

const Insights = dynamic(() => import("./sections/Insights"), {
  loading: () => <LoadingSkeleton />,
});

const ContactUs = dynamic(() => import("./sections/ContactUs"), {
  loading: () => <LoadingSkeleton />,
});

const Main = () => {
  return (
    <main id="main">
      <Hero />
      <BrandStrip />
      <Products />
      <Clients />
      <Stories />
      <Technologies />
      <Insights />
      <ContactUs />
    </main>
  );
};

export default Main;
