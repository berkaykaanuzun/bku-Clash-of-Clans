import "./style.scss";
import { Navbar } from "./Sections/Navbar/Navbar";
import { Hero } from "./Sections/Hero/Hero";
import { Features } from "./Sections/Features/Features";
import { Footer } from "./Sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
