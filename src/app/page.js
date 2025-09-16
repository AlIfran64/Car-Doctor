import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import ContactCard from "@/components/ContactCard/ContactCard";
import OurService from "@/components/OurService/OurService";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurService></OurService>
      <ContactCard></ContactCard>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
