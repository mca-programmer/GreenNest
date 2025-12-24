import React from "react";
import { Link } from "react-router-dom";
import PlantsExperts from "./../Components/PlantsExperts";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            🌿 About Our Green World
          </h1>
          <p className="text-green-700 text-lg md:text-xl max-w-2xl mx-auto">
            We are passionate about bringing greenery into your home and office.
            Our mission is to help you nurture plants while making your space
            beautiful and fresh.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              🌱 Our Mission
            </h2>
            <p className="text-gray-700">
              To provide quality indoor plants and expert guidance for every
              plant lover. We aim to make greenery accessible, enjoyable, and
              easy to maintain.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              🌸 Our Vision
            </h2>
            <p className="text-gray-700">
              Creating greener spaces for healthier and happier lives. We
              envision communities where plants thrive alongside people.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <PlantsExperts />

        {/* Footer / Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Ready to bring greenery home? 🌿
          </h2>
          <p className="text-green-700 mb-6">
            Join our community and start your plant journey today!
          </p>
          <Link to="/plants">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition transform hover:scale-105">
              Explore Plants
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
