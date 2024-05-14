import React, { useState } from "react";

// Define the prop types
type FAQType = {
  question: string;
  answer: string;
};

const FAQ: React.FC<{ faqs: FAQType[] }> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border-2 rounded-md border-neutral-500"
        >
          <div
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between p-4 cursor-pointer bg-gray-200 dark:bg-neutral-800 rounded-lg"
          >
            <p className="font-semibold text-neutral-800 dark:text-white">
              {faq.question}
            </p>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndex === index ? "rotate-0" : "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`${
              activeIndex === index ? "block" : "hidden"
            } mt-2 p-4 bg-gray-100 dark:bg-neutral-700 rounded-lg`}
          >
            <p className="text-gray-800 dark:text-white">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
