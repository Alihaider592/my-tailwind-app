import React from "react";
import Button from "../../components/card/cardbtns/ReadMore";
const About = () => {
  const aboutData = [
    {
      id: 1,
      title: "What Devlogix is",
      desc: "Devlogix is a platform dedicated to simplifying web development concepts and helping learners build real-world projects.",
    },
    {
      id: 2,
      title: "Mission / Purpose",
      desc: "Our mission is to empower beginners and developers with clear, practical tutorials in React, Tailwind CSS, and modern web technologies.",
    },
    {
      id: 3,
      title: "What You Provide",
      desc: "We provide step-by-step guides, coding tips, and project-based learning resources so you can level up your skills.",
    },
    {
      id: 4,
      title: "Audience / Community",
      desc: "Whether you’re just starting your coding journey or looking to refine your front-end skills, Devlogix is here to guide you.",
    },
    {
      id: 5,
      title: "Vision (Future Goals)",
      desc: "Our vision is to build a community of passionate developers who share knowledge, collaborate, and grow together.",
    },
  ];

  return (
    <div className="flex justify-center max-sm:relative fixed w-full min-h-screen p-10 bg-purple-500">
      <div className="w-full max-w-6xl">
        <h1 className="font-bold text-gray-100 text-4xl sm:text-5xl mb-10">
          About DevLogix
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="text-gray-200 md:w-1/2 space-y-4">
            {aboutData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-4 bg-purple-600 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-bold">
                  {item.id}) {item.title}
                </h2>
                <p className="mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-white md:w-1/2 space-y-4">
            {aboutData.slice(3).map((item) => (
              <div
                key={item.id}
                className="p-4 bg-purple-700 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-bold">
                  {item.id}) {item.title}
                </h2>
                <p className="mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <Button
            text="Read More"
            textColor="text-white"
            bgColor="bg-pink-600"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
