import "./page.module.css";
import HomePageRegistration from "@/components/blocks/HomePageRegistration";
import HomePageHero from "@/components/blocks/HomePageHero";
import HomePageEvents from "@/components/blocks/HomePageEvents";
import AboutUs from "@/components/blocks/AboutUs";
import FAQ from "@/components/blocks/FAQ";

export default function Home() {
  return (
    <>
      <HomePageHero/>
      <HomePageRegistration/>
      <HomePageEvents/>
      <AboutUs/>
      <FAQ/>
    </>
  );
}
