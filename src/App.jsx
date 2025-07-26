import About from "./components/About";
import BookAppointment from "./components/BookAppointment";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tips from "./components/Tips";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Tips />
      <BookAppointment />
    </div>
  );
}
