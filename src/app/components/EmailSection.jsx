"use client";
import React, { useState } from "react";
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: `
      Name: ${e.target.name.value}
      Phone: ${e.target.phone.value}
      Service: ${e.target.service.value}
      Details: ${e.target.details.value}
    `,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";  // Ensure you have an API route setup for this

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
      <section id="contact" className="px-4 sm:px-0">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-white max-w-2xl w-full">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Contact me</h1>
            <p className="mb-4 sm:mb-6 text-[#959595] text-center">Cultivating Connections: Reach Out And Connect With
              Me</p>
            {emailSubmitted ? (
                <p className="text-green-500">Thank you! Your message has been sent.</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          className="w-full px-4 py-2 bg-[#1B1B1B] text-[#959595] placeholder-[#959595] rounded-md"
                      />
                    </div>
                    <div>
                      <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full px-4 py-2 bg-[#1B1B1B] text-[#959595] placeholder-[#959595] rounded-md"
                      />
                    </div>
                    <div>
                      <input
                          type="text"
                          name="subject"
                          placeholder="subject"
                          className="w-full px-4 py-2 bg-[#1B1B1B] text-[#959595] placeholder-[#959595] rounded-md"
                      />
                    </div>
                    <div>
                      <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="w-full px-4 py-2 bg-[#1B1B1B] text-[#959595] placeholder-[#959595] rounded-md"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <select
                          name="service"
                          required
                          className="w-full px-4 py-2 bg-[#1B1B1B] text-[#959595] placeholder-[#959595] rounded-md"
                      >
                        <option value="">Service Of Interest</option>
                        <option value="consultation">Consultation</option>
                        <option value="web-development">Web Development</option>
                        <option value="seo">SEO Optimization</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
              <textarea
                  name="details"
                  placeholder="Project Details..."
                  className="w-full px-4 py-2 bg-[#1B1B1B] text-[#959595] placeholder-[#959595] rounded-md h-32"
              />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                        type="submit"
                        className="border-2 border-[#959595] text-[#959595] py-2 px-4 rounded-lg transition duration-200"
                    >
                      Send
                    </button>
                  </div>
                </form>
            )}
          </div>
        </div>
      </section>
  );
};

export default EmailSection;
