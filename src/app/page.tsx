import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import AboutSnippet from "@/components/AboutSnippet";
import Testimonials from "@/components/Testimonials";
import EditorialFeature from "@/components/EditorialFeature";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <AboutSnippet />
      <Testimonials />
      <EditorialFeature />
    </>
  );
}
