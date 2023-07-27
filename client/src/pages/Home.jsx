import React, { Fragment } from "react";
// import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Footer from "../components/Footer/Footer";
import Features from "../components/Feature-section/Features";
import Testimonials from "../components/Testimonial/Testimonials";

import AboutUs from "../components/About-us/AboutUs";
// import Courses from "../components/Courses-section/Courses";
// import ChooseUs from "../components/Choose-us/ChooseUs";
// import FreeCourse from "../components/Free-course-section/FreeCourse";
// import CompanySection from "../components/Company-section/Company";
// import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <Fragment>
      
      <HeroSection />
      {/* <CompanySection /> */}
      <AboutUs />
      {/* <Courses /> */}
      {/* <ChooseUs /> */}
      <Features />
      {/* <FreeCourse /> */}
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
