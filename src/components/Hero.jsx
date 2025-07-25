import { CalendarCheck } from "lucide-react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="scroll-m-20 bg-sky-50 py-16 ">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex lg:flex-row items-center  justify-between gap-10">
        {/* Info */}
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-sky-500 leading-tight">
            Brighten Your Teeth <br /> with Expert Dental Care
          </h1>

          <p className="text-gray-700 text-sm lg:text-lg  lg:text-justify ">
            Experience a confident smile with our expert dental care services.
            From teeth whitening to routine cleanings, we use advanced
            techniques to ensure your smile stays bright, healthy, and
            beautiful.
          </p>

          <a
            href="#"
            className="inline-block items-center bg-sky-600 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-sky-700 transition  text-base font-medium"
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Appointment
          </a>
        </div>
        {/* Info */}

        {/* image */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Dental"
            className="w-80 lg:w-[429px] rounded-4xl"
          />
        </div>
        {/* image */}
      </div>
    </section>
  );
};

export default Hero;
