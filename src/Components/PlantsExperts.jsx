import React, { use } from "react";

const expertsPromise = fetch("/experts.json").then((res) => res.json());

const PlantsExperts = () => {
  const experts = use(expertsPromise);

  return (
    <div className="py-10 bg-gradient-to-r from-green-100 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            👩‍🌾 Meet Our Team
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Our team of green experts is dedicated to helping you grow,
            maintain, and enjoy your plants.
          </p>
        </div>

        <div className="experts-marquee-wrapper">
          <div className="experts-marquee">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="experts-card bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 text-center"
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-8"
                />
                <h3 className="text-lg font-semibold text-green-800">
                  {expert.name}
                </h3>
                <p className="text-gray-600">{expert.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsExperts;
