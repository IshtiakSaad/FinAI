// src/pages/homepage/CTASection.jsx
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Get Smarter With Your Money?
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Join thousands of users already taking control of their finances with FinAI.
      </p>
      <Link
        to="/register"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
      >
        Get Started Free
      </Link>
    </section>
  );
};

export default CTASection;
