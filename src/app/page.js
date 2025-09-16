import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import OurService from "@/components/OurService/OurService";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurService></OurService>
    </div>
  );
}
