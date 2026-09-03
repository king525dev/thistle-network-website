import "./page.module.css";
import HomePageRegistration from "@/components/blocks/HomePageRegistration";
import HomePageHero from "@/components/blocks/HomePageHero";
import HomePageEvents from "@/components/blocks/HomePageEvents";
import AboutUs from "@/components/blocks/AboutUs";
import HomePageContact from "@/components/blocks/HomePageContact";
import FAQ from "@/components/blocks/FAQ";

export default function Home() {
  return (
    <>
      <HomePageHero/>
      <HomePageRegistration/>
      <HomePageEvents/>
      <HomePageContact />
      <AboutUs/>
      <FAQ/>
    </>
  );
}
