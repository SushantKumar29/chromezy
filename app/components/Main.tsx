import dynamic from "next/dynamic";
import Preloader from "../shared/ui/Preloader";

/*
  THis is a Main component that is used to show all the sections of the page.
  Here the sections are dynamically imported to support lazy loading.

  Here, the below benefits are present:
  On the Server:
    All sections are rendered into HTML on the server
    The complete page HTML is sent to the browser
    
  On the Client:
    The HTML is already there (from SSR)
    React then "hydrates" the page (adds interactivity)
    The dynamic imports still create separate chunks
    JavaScript for each section loads in parallel

*/

const Hero = dynamic(() => import("./sections/Hero"), { ssr: true });
const BrandStrip = dynamic(() => import("./sections/BrandStrip"), { ssr: true });
const Products = dynamic(() => import("./sections/Products"), { ssr: true });
const Clients = dynamic(() => import("./sections/Clients"), { ssr: true });
const Stories = dynamic(() => import("./sections/Stories"), { ssr: true });
const Technologies = dynamic(() => import("./sections/Technologies"), { ssr: true });
const Insights = dynamic(() => import("./sections/Insights"), { ssr: true });
const ContactUs = dynamic(() => import("./sections/ContactUs"), { ssr: true });

const Main = () => {
  const sections = [
    <Hero key="hero" />,
    <BrandStrip key="brands" />,
    <Products key="products" />,
    <Clients key="clients" />,
    <Stories key="stories" />,
    <Technologies key="technologies" />,
    <Insights key="insights" />,
    <ContactUs key="contact" />,
  ];

  return (
    <main id="main">
      <Preloader sections={sections} />
    </main>
  );
};

export default Main;
