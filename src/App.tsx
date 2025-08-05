import { useTranslation } from "react-i18next";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Services from "./sections/services";
import { useEffect } from "react";
import LanguageManager from "./components/lenguajeManager";

function App() {
    const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      <LanguageManager />
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
