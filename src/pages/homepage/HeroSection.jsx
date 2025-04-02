// src/pages/homepage/HeroSection.jsx
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Take Control of Your Finances with <span className="text-blue-600">FinAI</span>
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        Your smart, AI-powered personal finance assistant that tracks, predicts,
        and helps you save better.
      </p>
      <div className="space-x-4">
        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </Link>
        <Link to="/login" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
          Log In
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
