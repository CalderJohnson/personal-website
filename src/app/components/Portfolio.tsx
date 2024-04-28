
import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-section max-w-4xl mx-auto px-4 py-8 mt-16 mobile:flex mobile:justify-center">
      <h2 className="mobile:hidden text-3xl text-white font-bold mb-4">My Projects</h2>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <h2 className="md:hidden text-3xl text-white font-bold mb-4">My Projects</h2>
        <Project
          title="MetaAI ASRBleu Pipeline"
          thumbnail="/personal-website/seamlessM4T.png"
          description="During my participation in the MLH Fellowship, I worked under MetaAI team members to construct a next generation parallelized computational pipeline. Highly configurable and optimized for their cluster, it serves as a research tool to evaluate the performance of 27+ cutting edge ASR (automatic speech recognition) models using the BLEU metric. "
          link="https://github.com/CalderJohnson/seamless_communication/tree/implementing_eval_script/scripts/m4t/evaluate"
        />
        <Project
          title="Cleanserver"
          thumbnail="/personal-website/cleanserver.png"
          description="In an effort to promote constructive dialog on online forums such as Discord, I implemented a finetune of the Google BERT model. Cleanserver is a Discord bot with my model integrated, conducting sentiment analysis on users messages and flagging those over a certain threshold of toxicity."
          link="https://github.com/CalderJohnson/cleanserver"
        />
        <Project
          title="PongOS"
          thumbnail="/personal-website/pong-os.png"
          description="Channeling my passion for low level programming, I created my own OS! Pong OS is a minimal operating system that boots up and runs the classic game pong directly on the cpu, handling all low level tasks itself, meant as an exploration into the development of operating systems and device drivers. It was written in C and x86 assembly and runs in 32 bit mode."
          link="https://github.com/CalderJohnson/pong-os"
        />
        <Project
          title="Foodbox"
          thumbnail="/personal-website/foodbox.jpeg"
          description="To address the ever growing problem of food waste and promote environmental sustainability, my team at McHacks 2023 created Foodbox, an app that partners with grocery stores to deliver surplus food to those in need. Second place winner at McHacks 2023."
          link="https://github.com/CalderJohnson/Foodbox"
        />
        <Project
          title="Autoquest"
          thumbnail="/personal-website/autoquest.jpeg"
          description="To streamline the challenge of selecting the right vehicle, we undertook the Ford challenge at Hack Dearborn 2023 and created Autoquest, a web app that provides an interactive car selection process in a user friendly and accessible modality. Second place winner at Hack Dearborn 2023."
          link="https://github.com/CalderJohnson/autoquest"
        />
      </div>
    </div>
  );
};

export default Portfolio;