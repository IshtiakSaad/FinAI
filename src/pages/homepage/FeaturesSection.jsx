// src/pages/homepage/FeaturesSection.jsx
import { FaBrain, FaChartPie, FaLock, FaWallet } from "react-icons/fa";

const features = [
  {
    icon: <FaWallet size={28} className="text-blue-600" />,
    title: "Smart Expense Tracking",
    description: "Automatically categorize and visualize your spending."
  },
  {
    icon: <FaBrain size={28} className="text-blue-600" />,
    title: "AI-Powered Insights",
    description: "Get personalized suggestions and financial forecasts."
  },
  {
    icon: <FaChartPie size={28} className="text-blue-600" />,
    title: "Budget Planning",
    description: "Set monthly budgets and track progress in real-time."
  },
  {
    icon: <FaLock size={28} className="text-blue-600" />,
    title: "Bank-Level Security",
    description: "Your data is encrypted and protected at all times."
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Why Choose FinAI?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
