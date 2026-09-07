import React from "react";
import Image from "next/image";
import { withSiteBasePath } from "./assetPath";

const About = () => {
  return (
    <section id="about" className="intro-section">
      <div className="intro-grid">
        <div>
          <span className="eyebrow">AI Researcher and Software Engineer</span>
          <h1 className="page-title">Hi, I&apos;m Calder.</h1>
          <p className="intro-copy">
            Modern artificial intelligence continues to rapidly transform the way we solve problems across every industry, giving us powerful operational automation and accelerated scientific discoveries. I work to develop robust, sophisticated machine learning models supporting data driven workflows and decision making, as well as software infrastructure to optimally apply AI to problems in industry, emphasizing safe and performant integration. 
            <br></br><br></br>Currently, I am pursuing my Masters in Computer Science at the University of Waterloo where my research focuses on model explanation methods as a foundation for monitoring efficacy and alignment, supporting powerful and trustworthy AI moving forward.
            <br></br><br></br>In my free time I enjoy playing perfect information games like Chess and Go, lifting weights, folding origami, and reading classic and science fiction as well as non-fiction on topics like philosophy, physics, biology and pure mathematics.
          </p>
        </div>
        <div>
          <Image
            className="profile-image"
            src={withSiteBasePath("/calder.JPEG")}
            alt="Calder Johnson"
            width={260}
            height={260}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
