"use client";
import { useEffect } from "react";
import AboutUs from "./_components/AboutUs";
import ConsultSolution from "./_components/ConsultSolution";
import FAQ from "./_components/FAQ";
import Banner from "./_components/Home/Banner";
import Services from "./_components/Services";
import SolutionStep from "./_components/SolutionStep";
import Team from "./_components/Team";
import Testimonial from "./_components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="container mx-auto p-6 lg:px-8">
        <Banner />
        <SolutionStep />
        <ConsultSolution />
        <AboutUs />
        <Services />
        <Team />
        <Testimonial />
        <FAQ />
      </div>
    </>
  );
}
