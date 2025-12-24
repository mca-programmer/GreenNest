import React from "react";

// Community Members
const communityMembers = [
  { name: "Alice Green", role: "Plant Expert", photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
  { name: "Bob Bloom", role: "Gardening Enthusiast", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
  { name: "Charlie Leaf", role: "Indoor Plant Lover",  photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
  { name: "Diana Flora", role: "Botanist", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
];

// Experts
const experts = [
  { name: "Alice Green", specialization: "Indoor Plants", photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
  { name: "Bob Bloom", specialization: "Air Purifying Plants", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
  { name: "Charlie Leaf", specialization: "Succulents",  photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
  { name: "Diana Flora", specialization: "Orchids", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" },
];

// Workshops
const workshops = [
  { title: "Indoor Plant Care 101", date: "2025-01-15", host: "Alice Green" },
  { title: "Succulent Arrangements", date: "2025-01-22", host: "Charlie Leaf" },
  { title: "Air-Purifying Plants Workshop", date: "2025-02-05", host: "Bob Bloom" },
  { title: "Orchid Growing Tips", date: "2025-02-12", host: "Diana Flora" },
];

// Blogs
const blogs = [
  { title: "5 Tips for Thriving Indoor Plants", date: "2025-01-10" },
  { title: "Best Air-Purifying Plants for Your Home", date: "2025-01-20" },
  { title: "Top 10 Succulent Arrangements", date: "2025-01-30" },
  { title: "How to Grow Healthy Orchids", date: "2025-02-08" },
];

const CommunityHub = () => {
  return (
    <div className="bg-green-50 min-h-screen py-16 px-4 space-y-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-10 text-center">
          👩‍🌾 Our Plant Community
        </h1>
        {/* Community Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Experts */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 my-10 text-center">
          👨‍🌾 Our Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img src={expert.photo} alt={expert.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-green-800">{expert.name}</h3>
              <p className="text-gray-600">{expert.specialization}</p>
            </div>
          ))}
        </div>

        {/* Workshops */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 my-10 text-center">
          🪴 Upcoming Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((ws, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{ws.title}</h3>
              <p className="text-gray-600 mb-1">Date: {ws.date}</p>
              <p className="text-gray-600">Host: {ws.host}</p>
            </div>
          ))}
        </div>

        {/* Blogs */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 my-10 text-center">
          📰 Plant Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600">Published: {blog.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;
