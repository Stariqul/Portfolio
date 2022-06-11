import React from "react";

const Banner = () => {
  return (
    <div class="px-12">
      <div class="hero min-h-screen  ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/kQfqRkv/Background-7.png"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Hello</h1>
            <h1 class="text-5xl font-bold">I am Tariqul Alam</h1>
            <p class="py-6">
              I am a new learner in the web development sector but I always try
              to learn something day by day. I have the knowledge on HTML5,
              CSS3, Bootstrap, Javascript, ES6, REACT, REACT ROUTER DOM .
            </p>
            <button class="btn btn-primary">
              <a href="https://drive.google.com/file/d/1fWaFtx8tgvxefoP39jlX0fEcrdbmg_EB/view">
                My Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
