// src/pages/homepage/HowItWorksSection.jsx
import { FaLink, FaSearchDollar, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaLink size={26} className="text-blue-600" />,
    title: "Connect Your Bank",
    description: "Securely link your financial accounts using Plaid."
  },
  {
    icon: <FaSearchDollar size={26} className="text-blue-600" />,
    title: "Analyze Spending",
    description: "Let FinAI categorize and analyze your transactions."
  },
  {
    icon: <FaRocket size={26} className="text-blue-600" />,
    title: "Get Smarter Insights",
    description: "Receive AI-driven tips and predictions to improve savings."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        How FinAI Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center p-6 border rounded-lg bg-white shadow-md hover:shadow-lg transition">
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-black">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;