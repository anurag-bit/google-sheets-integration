"use client";
import  React, { useState } from "react";
import axios from 'axios';

export function Form() {
  const [formData, setFormData] = useState({
    teamName: '',
    collegeName: '',
    numberOfParticipants: '',
    members: Array.from({ length: 6 }, () => ({
      name: '',
      gender: '',
      mobileNo: '',
      email: '',
      course: '',
      year: '',
      admissionNo: '',
    })),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'YOUR_GOOGLE_FORMS_API_ENDPOINT',
        formatFormDataForGoogleForms(formData)
      );
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMemberChange = (index, memberData) => {
    setFormData((prevData) => ({
      ...prevData,
      members: prevData.members.map((member, i) => (i === index ? memberData : member)),
    }));
  };

  // Function to format form data for Google Forms API
  const formatFormDataForGoogleForms = (data) => {
    const formData = new FormData();
    formData.append('entry.1234567890', data.teamName); // Replace 'entry.1234567890' with your actual field IDs
    formData.append('entry.0987654321', data.collegeName); // Replace 'entry.0987654321' with your actual field IDs
    formData.append('entry.9876543210', data.numberOfParticipants); // Replace 'entry.9876543210' with your actual field IDs

    data.members.forEach((member, index) => {
      Object.entries(member).forEach(([key, value]) => {
        formData.append(`entry.${index + 1}${key}`, value); // Replace `${index + 1}${key}` with your actual field IDs
      });
    });

    return formData;
  };

  return (
    <div className="sky bg-center  w-auto h-3000 overflow-hidden">
    <div className="stars"></div>
    <div className="stars1"></div>
    <div className="stars2"></div>
    <div className="shooting-stars absolute bottom-0 right-0"></div>
    <div className="shooting-stars absolute bottom-10 right-32"></div>
    <div className="shooting-stars absolute bottom-20 right-72"></div>
    <div className="lg:p-10 bg-zinc-900">
      <div className="lg:w-10/12 w-[96%] mx-auto rounded-none md:rounded-2xl sm:rounded-xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
        <h2 className="font-bold text-3xl text-center text-neutral-800 dark:text-[#E9E3D5] border-gray-300 border-b-2 w-full pb-2 ">
          Register for Dexterix 4.0
        </h2>
        <p className="text-[#f9f5ed] my-2 pt-6">
          <b>
            Thank you for your interest in participating in the Dexterix 4.0
            Hackathon!
          </b>
          <br />
          
          Dexterix 4.0: A 36-hour innovation marathon where creativity meets
          technology. Join us at Galgotias University for an exhilarating
          journey of coding, collaboration, and competition. Unleash your
          potential, solve real-world challenges, and win exciting prizes!
        </p>
        {/* Event Details */}
        <div className="flex lg:flex-row justify-between items-start sm:flex-col mb-5">
          <p className="text-[#f9f5ed] my-2">
            <b>Event Details :</b>
            <br />
            Date:<b> 24th-26th September 2021 </b>
            <br />
            Team Size : <b>4</b>(min) <b>6</b>(max)
            <br />
            Location : <b>Galgotias University, Greater Noida.</b>
            <br />
            Registration Fees : <b>100 per person</b>
            <br />
            <br />
            <b>Contact</b>
            <br />
            Vedansh Tripathi 9598157259
            <br />
            Priyangana Gupta 9627311165
            <br />
            <b>Team TechnoJam</b>
            <br />
            <b>Galgotias University Students Council.</b>
          </p>
          {/* Steps to follow */}
          <p className="text-[#f9f5ed] my-2">
            <b>Steps to be Followed:</b>
            <br />
            1. <b>Enter Team Leader details.</b>
            <br />
            <br />
            2. <b>Enter member details.</b>
            <br />
            <br />
            3. <b>Complete your payment. (person * RS 100)</b>
            <br />
            <br />
            4. <b>Upload proof of payment.</b>
            <br />
            5. <b>Submit the form.</b>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="my-2" method="post" action="">


          {/* Team Details */}
          <div className="flex justify-between flex-wrap ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Team Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage name <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="justify-start pt-5   lg:w-2/5 w-full ">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                No. of Partcipants{" "}
                <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>

          {/* Team Leader Detials */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
            Team Leaders Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap  ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="email"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No.*  (if from GALGOTIAS UNIVERSITY)
              </label>
              <input
              placeholder="If not from Galgotias University, write NA"
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>
          
          {/* Member 2 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
            Member 2 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
           {/* College Name Holder */}
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="email"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No.*  (if from GALGOTIAS UNIVERSITY)
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>
          {/* Member 3 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
            Member 3 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap  ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
           {/* College Name Holder */}
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="email"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No.*  (if from GALGOTIAS UNIVERSITY)
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>
          {/* Member 4 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
            Member 4 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
           {/* College Name Holder */}
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="email"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
              required
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No.*  (if from GALGOTIAS UNIVERSITY)
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>
          {/* Member 5 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
            Member 5 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            {/* College Name Holder */}
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No.
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id
              </label>
              <input
                type="email"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No.*  (if from GALGOTIAS UNIVERSITY)
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>
          {/* Member 6 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
            Member 6 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap ">
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            {/* College Name Holder */}
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor=""
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No.
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id
              </label>
              <input
                type="email"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year
              </label>
              <input
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
            <div className="lg:w-2/5 w-full">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No.*  (if from GALGOTIAS UNIVERSITY)
              </label>
              <input
              placeholder="If not from Galgotias University, write NA"
                type="text"
                name=""
                className={`flex w-full h-10  bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
              />
            </div>
          </div>
          <br></br>
          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block mt-2 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className="stars"></div>
    <div className="stars1"></div>
    <div className="stars2"></div>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};


