import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import ContactCard from "@/components/ContactCard/ContactCard";
import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Services from "./components/Services";
import BackToTop from "@/components/BackToTop/BackToTop";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <ContactCard></ContactCard>
      <MeetOurTeam></MeetOurTeam>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
      <BackToTop></BackToTop>
    </div>
  );
}
