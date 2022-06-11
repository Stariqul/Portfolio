import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Expertise from "../Expertise/Expertise";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <div>
      <h2>
        <Banner></Banner>
        <Project></Project>
        <Expertise></Expertise>
        <Contact></Contact>
      </h2>
    </div>
  );
};

export default Home;
