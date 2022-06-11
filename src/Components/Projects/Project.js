import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div>
      <h1 className="mt-5 mb-5 text-center  text-4xl">My Websites</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10">
        <div>
          <h2 class="card-title mb-3 ml-5">Your Study Tutor</h2>
          <figure>
            <img
              src="https://i.ibb.co/S089gLY/Background-9.png"
              alt="Album"
              class="ml-5"
            />
          </figure>
          <div class="card-body">
            <p>
              I have created this project with the help of HTML, CSS, React and
              React Router dom. This projects includes a section which is called
              Service section where a user can easily see alll the services we
              provide
            </p>
            <div class="card-actions">
              <button class="btn btn-primary">
                <a href=" https://your-study-tutor.web.app/">Live Link</a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/programming-hero-web-course-4/independent-service-provider-Stariqul">
                  GitHub Link
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 class="card-title mb-5 ">Special Shoes</h2>
          <figure>
            <img
              src="https://i.ibb.co/YQg70m1/Background-10.png"
              alt="Album"
              class="mb-7"
            />
          </figure>
          <div class="card-body">
            <p>
              In this project user can find some reviews on the basis of which a
              user can buy the best products. In this project there are charts
              also in the dashboard. There is also a blog section. I use react
              router dom for routing
            </p>
            <div class="card-actions">
              <button class="btn btn-primary">
                <a href="https://sparkly-zabaione-4af820.netlify.app/">
                  Live Link
                </a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/programming-hero-web-course-4/product-analysis-website-Stariqul">
                  GitHub Link
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 class="card-title mb-7 ml-3">Money Calculator</h2>
          <figure>
            <img src="https://i.ibb.co/Mfbqtmb/Background-11.png" alt="Album" />
          </figure>
          <div class="card-body">
            <p>
              This project is a kind of calculator. In this project a user can
              calculate his montly expenses from his incomes and also can be
              able to find how much amount he can save
            </p>
            <div class="card-actions ">
              <button class="btn btn-primary">
                <a href="https://determined-ptolemy-e6140c.netlify.app/">
                  Live Link
                </a>
              </button>
              <button class="btn btn-primary">
                <a href="https://github.com/Porgramming-Hero-web-course/money-master-Stariqul">
                  GitHub Link
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
