import { motion } from "framer-motion";
import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-sky-500" />,
    title: "Dental Checkups",
    desc: "Comprehensive dental exams to assess oral health, identify issues early, and ensure a healthy smile.",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-green-500" />,
    title: "Professional Teeth Cleaning",
    desc: "Thorough plaque and tartar removal to prevent cavities, gum disease, and keep your smile fresh.",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-yellow-500" />,
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with whitening, veneers, and other aesthetic treatments tailored to you.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-purple-500" />,
    title: "Digital X-Rays",
    desc: "Fast, safe digital imaging for accurate diagnosis and effective treatment planning.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-50"
    >
      <div className="container mx-auto px-4">
        {/* info */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-900 mb-4">
            Our Dental Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover a full range of dental care solutions designed to keep your
            smile healthy, bright, and confident — from routine cleanings to
            advanced cosmetic treatments.
          </p>
        </div>
        {/* info */}

        {/* services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="grid place-items-center mb-4">{service.icon}</div>

              <h3 className="text-lg font-semibold text-sky-800 mb-2 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm text-center">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        {/* services */}
      </div>
    </section>
  );
};

export default Services;
