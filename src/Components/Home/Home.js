import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <div>
      <h2>
        <Banner></Banner>
        <Project></Project>
        <Contact></Contact>
      </h2>
    </div>
  );
};

export default Home;
