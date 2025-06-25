import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import bg from "../assets/images/ministerCredential.jpg";
import Form from "./Form";

const MinisterCredentialForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          alert("Form submitted successfully");
        },
        (error) => {
          alert("An error occurred, please try again");
        }
      );
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen py-10 ">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 30%",
        }}
        className="relative py-28 z-20"
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20">
          {" "}
          {/* Added relative and z-20 */}
          <h1 className="text-5xl text-white text-center my-4">
            Minister Credential
          </h1>
        </div>

        <div className="flex absolute bottom-4 translate-x-1/2 right-1/2 justify-end p-2 w-max mx-auto bg-black/10 text-2xl items-center z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <h1 className="text-white">Home </h1>
          <h1 className="text-green-500 mx-1"> Minister Credential</h1>
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center flex-col z-20">
        <h1 className="text-center text-black text-2xl mx-auto w-8/12 py-8">
          Please Answer All Questions & Provide Requested Information.
          Incomplete Applications Will Not Be Processed.
        </h1>

        <div className="w-8/12 mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default MinisterCredentialForm;
