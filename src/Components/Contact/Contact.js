import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4urjqyf",
        "template_2vdh5s9",
        e.target,
        "J-jo1bxdG2WXNtHZh"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div class="container mx-auto w-1/3 border border-black-500 bg-white">
      <div class="p-5 space-y-5 shadow-xl">
        <h3 class="text-center bg-primary text-3xl">Contact me</h3>
        <form onSubmit={sendEmail}>
          <div class="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              class="border border-gray-500"
              placeholder="Your Name"
            />
            <input
              type="text"
              name="user-email"
              class="border border-gray-500 col-span-2"
              placeholder="Your Email"
            />

            <textarea
              class="border border-gray-500 col-span-2"
              name="message"
              id=""
              cols="10"
              rows="5"
              placeholder="write your message"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              class="focus:outline-none bg-primary mt-5 px-4 py-2 text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
