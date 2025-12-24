import React from "react";

// Care Tips
const careTips = [
  {
    title: "Watering",
    description:
      "Water your plants regularly but avoid overwatering. Most indoor plants need water once a week.",
    icon: "💧",
  },
  {
    title: "Sunlight",
    description:
      "Provide bright, indirect sunlight for most indoor plants. Avoid direct harsh sunlight.",
    icon: "☀️",
  },
  {
    title: "Soil",
    description:
      "Use well-draining potting soil. Avoid garden soil as it can retain too much water.",
    icon: "🌱",
  },
  {
    title: "Fertilizer",
    description:
      "Feed plants with balanced fertilizer once a month during growing season.",
    icon: "🌿",
  },
];

// Common Mistakes
const mistakes = [
  {
    title: "Overwatering",
    description: "Giving too much water can lead to root rot. Check soil moisture first.",
  },
  {
    title: "Too Much Sun",
    description: "Direct sunlight may burn leaves. Observe your plant’s sun preference.",
  },
  {
    title: "Wrong Soil",
    description: "Garden soil can retain too much water. Use proper indoor potting soil.",
  },
];

// Recommended Tools
const tools = [
  { name: "Watering Can", emoji: "🪣" },
  { name: "Pruning Shears", emoji: "✂️" },
  { name: "Plant Fertilizer", emoji: "🌿" },
  { name: "Moisture Meter", emoji: "📏" },
];

// Related Plants
const relatedPlants = [
  { name: "Snake Plant", emoji: "🪴" },
  { name: "Aloe Vera", emoji: "🌵" },
  { name: "Spider Plant", emoji: "🌿" },
  { name: "Peace Lily", emoji: "🌸" },
];

const CareTipsHub = () => {
  return (
    <div className="bg-green-50 min-h-screen py-16 px-4 space-y-20">
      <div className="max-w-6xl mx-auto">
        {/* Care Tips */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-10 text-center">
          🌼 Plant Care Tips
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careTips.map((tip, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* Common Mistakes */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-16 mb-6 text-center">
          ⚠️ Common Mistakes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mistakes.map((mistake, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{mistake.title}</h3>
              <p className="text-gray-600">{mistake.description}</p>
            </div>
          ))}
        </div>

        {/* Recommended Tools */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-16 mb-6 text-center">
          🛠️ Recommended Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="text-5xl mb-2">{tool.emoji}</div>
              <h3 className="text-lg font-semibold text-green-800">{tool.name}</h3>
            </div>
          ))}
        </div>

        {/* Related Plants */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-16 mb-6 text-center">
          🪴 Related Plants
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {relatedPlants.map((plant, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="text-5xl mb-2">{plant.emoji}</div>
              <h3 className="text-lg font-semibold text-green-800">{plant.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareTipsHub;
