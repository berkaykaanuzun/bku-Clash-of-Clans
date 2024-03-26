import "./style.scss";
import { Navbar } from "./Sections/Navbar/Navbar";
import { Hero } from "./Sections/Hero/Hero";
import { Download } from "./Sections/download/Download";
import { News } from "./Sections/news/news";
import { Features } from "./Sections/Features/Features";
import { Footer } from "./Sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Download/>
      <Features />
      <News/>
      <Footer />
    </>
  );
}

export default App;
