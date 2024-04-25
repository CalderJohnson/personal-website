import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="about-section max-w-4xl mx-auto px-4 py-8 mt-16">
      <h2 className="text-3xl text-white font-bold mb-4">About Me</h2> 
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="text-white text-lg leading-relaxed">
            I am Calder Johnson, an aspiring software engineer with a deep passion for technology and innovation. I have a wealth of experience in a variety of programming languages and technologies, and I am currently avidly pursuing expertise in web development and machine learning. Check out my projects below!
          </p>
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <Image
            className="w-48 h-48 rounded-full mx-auto lg:mx-0"
            src="/calder.png"
            alt="(Image of me could not be loaded)"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
