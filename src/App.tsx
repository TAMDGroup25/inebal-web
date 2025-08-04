import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Services from "./sections/services";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
