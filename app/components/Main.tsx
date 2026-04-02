"use client";

import dynamic from "next/dynamic";
import LoadingSkeleton from "@/app/shared/ui/LoadingSkeleton";
import AnimationProvider from "@/app/shared/ui/AnimationProvider";

// Critical above-the-fold sections - Keep SSR for SEO and fast paint
const Hero = dynamic(() => import("./sections/Hero"), {
  loading: () => <LoadingSkeleton />,
  ssr: true,
});

const BrandStrip = dynamic(() => import("./sections/BrandStrip"), {
  loading: () => <LoadingSkeleton />,
  ssr: true,
});

const Products = dynamic(() => import("./sections/Products"), {
  loading: () => <LoadingSkeleton />,
  ssr: true,
});

// Non-critical sections - true lazy loading
// These won't appear in initial HTML, improving LCP and TTI
const Clients = dynamic(() => import("./sections/Clients"), {
  loading: () => <LoadingSkeleton />,
  ssr: false, // True lazy loading - no SSR
});

const Stories = dynamic(() => import("./sections/Stories"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

const Technologies = dynamic(() => import("./sections/Technologies"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

const Insights = dynamic(() => import("./sections/Insights"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

const ContactUs = dynamic(() => import("./sections/ContactUs"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

const Main = () => {
  return (
    <AnimationProvider>
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
    </AnimationProvider>
  );
};

export default Main;
