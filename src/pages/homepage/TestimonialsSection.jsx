// src/pages/homepage/TestimonialsSection.jsx

const testimonials = [
    {
      name: "Sarah T.",
      feedback:
        "FinAI helped me get a clear picture of where my money was going. The insights are spot-on and easy to understand!"
    },
    {
      name: "Jason R.",
      feedback:
        "I was skeptical at first, but FinAI’s budgeting suggestions have truly helped me save more every month."
    },
    {
      name: "Aditi M.",
      feedback:
        "The AI predictions are incredible. I actually look forward to checking my dashboard now!"
    }
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow-sm bg-gray-50">
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <p className="text-sm text-gray-900 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  