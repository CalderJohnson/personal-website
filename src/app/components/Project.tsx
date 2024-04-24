'use client';
import React from "react";

interface ProjectProps {
  title: string;
  thumbnail: string;
  description: string;
  link: string;
}

import Image from "next/image";

const Project = ({ title, thumbnail, description, link }: ProjectProps) => {

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Image className="w-full" src={thumbnail} alt={title} width={500} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

export default Project;
