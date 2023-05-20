import AOS from "aos";
import aboutPic from "../../../assets/aboutUs.jpg";
import 'aos/dist/aos.css';
import {useEffect } from 'react';
const AboutUs = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center pt-[42px]">
      <div data-aos="fade-right" data-aos-duration="1000" className="lg:pl-8">
        <p className="text-xl py-5">ABOUT US</p>
        <h1 className="text-6xl font-bold">
          Our company <br />
          We love pets
        </h1>
        <p className="text-lg pt-6">
          Having a pet in the house has many physical and psychological <br />{" "}
          benefits – a combination that improves overall health and <br />
          leads to a beautiful life.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <img src={aboutPic} />
      </div>
    </div>
  );
};

export default AboutUs;
