import React from "react";
import { commonArgs } from "../../configs/types";
import data, { contact_type } from "../../configs/about/data";

interface ContactWayProps {
  way: contact_type;
}

const ContactWay: React.FC<ContactWayProps> = ({ way }) => (
  <a
    href={way.url}
    className={`contact-way flex bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg items-center px-4 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 space-x-2`}
    target="_blank"
    rel="noreferrer"
  >
    <way.icon className="contact-icon w-6 h-6 text-gray-600" />
    <span className="contact-text text-sm text-gray-700 dark:text-white">
      {way.content}
    </span>
  </a>
);

const About: React.FC<commonArgs> = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="about-image">
          <img
            src={data.image}
            alt={data.imageText}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="about-content">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {data.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 prose mb-6">
            {data.content}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.contact_ways.ways.map((way, index) => (
              <ContactWay key={index} way={way} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
