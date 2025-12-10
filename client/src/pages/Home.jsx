import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TouristSitesList from "../components/TouristSitesList";
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import BlogsCarousel from "../components/BlogsCarousel"; // import

function Home() {
  return (
    <>
      <Hero />
      {/* Insert blogs carousel here */}
      <BlogsCarousel />
      <TouristSitesList />
      <BookingForm />
      <Contact />
    </>
  );
}

export default Home;
