import "./style.scss";
import { Navbar } from "./Sections/Navbar/Navbar";
import { Hero } from "./Sections/Navbar/Hero/Hero";
import { Features } from "./Sections/Navbar/Features/Features";
import { Footer } from "./Sections/Navbar/Footer/Footer";
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
