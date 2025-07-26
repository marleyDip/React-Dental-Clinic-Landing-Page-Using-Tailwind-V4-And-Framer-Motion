import { useState } from "react";
import { FaShieldAlt, FaSmile, FaTooth } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

const Tips = () => {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      title: "Cavity Prevention",
      content:
        "Protect your teeth from decay with fluoride treatments, sealants, and expert hygiene guidance.",
      icon: <FaTooth className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Gum Care",
      content:
        "Maintain healthy gums and prevent periodontal disease with deep cleaning and personalized care.",
      icon: <GiWaterDrop className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Tooth Protection",
      content:
        "Safeguard your smile with custom night guards, mouthguards, and enamel-strengthening treatments.",
      icon: <FaShieldAlt className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Regular Checkups",
      content:
        "Stay on top of your oral health with consistent dental exams and professional monitoring.",
      icon: <FaSmile className="w-8 h-8 text-emerald-500" />,
    },
  ];
  return (
    <section id="tips" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-12">
      {/* info */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Dental Care Tips
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Maintain a healthy smile with simple daily habits like brushing twice,
          flossing regularly, eating a balanced diet, and visiting your dentist
          for routine checkups.
        </p>
      </div>
      {/* info */}

      {/* tips */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {tips.map((tip, index) => (
          <button
            key={index}
            onClick={() => setActiveTip(index)}
            className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
              activeTip === index
                ? "bg-white shadow-lg border-b-8 border-sky-400"
                : "bg-gray-100 hover:bg-blue-200"
            }  `}
          >
            <div>{tip.icon}</div>

            <h3 className="font-medium text-gray-800 text-sm md:text-base">
              {tip.title}
            </h3>
          </button>
        ))}
      </div>
      {/* tips */}

      <div className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md">
            {tips[activeTip].icon}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {tips[activeTip].title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {tips[activeTip].content}
            </p>
          </div>
        </div>
      </div>

      {/* go to tip */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTip === index ? "bg-sky-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to Tip ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      {/* go to tip */}
    </section>
  );
};

export default Tips;
