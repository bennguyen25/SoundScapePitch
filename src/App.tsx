import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Features } from "./components/Features";
import { Impact } from "./components/Impact";
import { Prototype } from "./components/Prototype";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Impact />
      <Prototype />
      <Footer />
    </div>
  );
}