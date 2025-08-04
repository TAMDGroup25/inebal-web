import {
  Fan,
  Flame,
  Droplet,
  Sun,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Fan size={32} className="text-[#0160A2]" />,
      title: t("services.items.climatizacion.title"),
      description: t("services.items.climatizacion.description"),
    },
    {
      icon: <Droplet size={32} className="text-[#0160A2]" />,
      title: t("services.items.fontaneria.title"),
      description: t("services.items.fontaneria.description"),
    },
    {
      icon: <Zap size={32} className="text-[#0160A2]" />,
      title: t("services.items.electricidad.title"),
      description: t("services.items.electricidad.description"),
    },
    {
      icon: <Flame size={32} className="text-[#0160A2]" />,
      title: t("services.items.piscinas.title"),
      description: t("services.items.piscinas.description"),
    },
    {
      icon: <ShieldCheck size={32} className="text-[#0160A2]" />,
      title: t("services.items.integral.title"),
      description: t("services.items.integral.description"),
    },
    {
      icon: <Sun size={32} className="text-[#0160A2]" />,
      title: t("services.items.complementarios.title"),
      description: t("services.items.complementarios.description"),
    },
  ];

  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-4">
          {t("services.title")}
        </h2>

        {/* Línea decorativa */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <div className="h-1 bg-[#0160A2] w-[200px] rounded-full" />
        </div>

        {/* Grid de servicios */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 uppercase">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
