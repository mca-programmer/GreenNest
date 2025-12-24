import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How often should I water my indoor plants?",
    answer:
      "Most indoor plants need watering once a week, but this may vary depending on the plant type, pot size, and season.",
  },
  {
    question: "What type of soil is best for indoor plants?",
    answer:
      "Well-draining potting soil is ideal for most indoor plants. Avoid garden soil as it can retain too much water.",
  },
  {
    question: "How much sunlight do indoor plants need?",
    answer:
      "It depends on the plant. Some require bright indirect sunlight, while others thrive in low-light conditions.",
  },
  {
    question: "How do I prevent pests on my plants?",
    answer:
      "Regularly inspect your plants, remove dead leaves, and consider natural remedies like neem oil to prevent pests.",
  },
  {
    question: "How can I improve air quality with plants?",
    answer:
      "Plants like Snake Plant, Aloe Vera, and Spider Plant can help purify indoor air naturally.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-green-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            🌿 Frequently Asked Questions
          </h1>
          <p className="text-green-700 text-lg md:text-xl max-w-2xl mx-auto">
            Learn how to care for your plants, improve indoor air quality, and
            keep your greenery thriving with our helpful tips!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-green-800">
                  {faq.question}
                </h3>
                <span className="text-green-600 font-bold text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-700 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Want more plant care tips?
          </h2>
          <p className="text-green-700 mb-6">
            Explore our wide range of indoor plants and start your green journey today!
          </p>
          <Link to="/plants">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition transform hover:scale-105">
              Explore Plants
            </button>
          </Link>
        </div>

        {/* Illustration / Fun Section */}
        <div className="flex justify-center mt-10">
          <img
            src="https://png.pngtree.com/png-vector/20241024/ourmid/pngtree-decorative-plants-png-image_14163135.png" // replace with your image in public folder
            alt="Fun plant illustration"
            className="w-80 md:w-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
