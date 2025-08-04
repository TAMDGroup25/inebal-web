import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/Logo.avif"
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-[#0160A2] bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + descripción */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Logo} alt="Inebal logo" className="w-40 mb-5" />
          <p className="text-sm px-10">
            {t("footer.description", {
              defaultValue:
                "Inebal es una empresa joven especializada en instalaciones eléctricas, climatización y frío industrial en Mallorca.",
            })}
          </p>
        </div>

        {/* Navegación */}
        <div className="hidden md:block text-[#0160A2] text-center">
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
            {t("footer.sections", { defaultValue: "Secciones" })}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#nosotros" className="hover:text-[#014c82] transition hover:underline">
                {t("header.about", { defaultValue: "Sobre Nosotros" })}
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-[#014c82] transition hover:underline">
                {t("header.services", { defaultValue: "Servicios" })}
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#014c82] transition hover:underline">
                {t("header.contact", { defaultValue: "Contacto" })}
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col justify-center items-center text-center">
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
            {t("footer.contact", { defaultValue: "Contacto" })}
          </h4>
          <ul className="space-y-3 text-sm text-">
            <a
              href="tel:+34610429243"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <Phone className="w-4 h-4" />
              +34 610 429 243
            </a>
            <a
              href="mailto:info@inebalmallorca.com"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <Mail className="w-4 h-4" />
              info@inebalmallorca.com
            </a>
            <li className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Mallorca, España
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#0160A2] mt-12 pt-6 text-center text-xs">
        &copy; {new Date().getFullYear()} Inebal.{" "}
        {t("footer.rights", { defaultValue: "Todos los derechos reservados." })}
      </div>
    </footer>
  );
};

export default Footer;
