import React from "react";
import PlantsCard from "./PlantsCard";
import { Link } from "react-router-dom"; // for All Plants button navigation

const PlantsCategory = ({ data }) => {
  // Filter top-rated plants and show only 8
  const rating = data.filter((plant) => plant.rating > 4.7).slice(0, 8);

  return (
    <div className="py-10">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl font-bold text-green-800 text-center mb-6">
        Top Rated Indoor Plants
      </h2>
     

      {/* Plants Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {rating.map((plant) => (
            <PlantsCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      </div>
       {/* All Plants Button */}
      <div className="flex justify-center mb-10">
        <Link to="/plants">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold m-6 px-6 py-3 rounded-full transition transform hover:scale-105">
            All Plants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantsCategory;
