import { Hospital, Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#tips", label: "Tips" },
  { href: "#book", label: "Book Appointment" },
  { href: "#testimonial", label: "Testimonials" },
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      {/* start */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4   xl:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Hospital className="w-8 h-8 text-sky-600" />
          <span className="text-xl font-bold text-sky-600">
            Smile Dental Clinic
          </span>
        </div>
        {/* Logo */}

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          {NavLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="hover:text-sky-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-2">
          <PhoneCall className="text-sky-600 hover:transform hover:-translate-y-1.5 hover:transition-all duration-300 " />
          <a
            href="#"
            className="bg-sky-600 text-white px-4 py-2  rounded-xl hover:bg-sky-700 transition text-sm
            "
          >
            Book Appointment
          </a>
        </div>
        {/* Desktop Navbar */}

        {/* mobile menu & close */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? (
              <X className="text-gray-700" />
            ) : (
              <Menu className="text-gray-700" />
            )}
          </button>
        </div>
        {/* mobile menu & close */}
      </div>
      {/* End */}

      {/* Mobile Navbar */}
      {isOpenMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3 font-bold text-xl text-center">
          {NavLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="block hover:text-sky-600 transition"
              onClick={() => setIsOpenMenu(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {/* Mobile Navbar */}
    </header>
  );
};

export default Header;
