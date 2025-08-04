import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      className="flex flex-col md:flex-row h-auto md:h-screen bg-gray-50"
    >
      <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
        <img
          src="/wires.avif"
          alt="Equipo de trabajo"
          className="w-full h-full object-cover"
        />
        <img
          src="/angle-mask.svg"
          alt="Decoración tipo menor que"
          className="hidden md:block absolute top-0 right-0 h-full w-16 z-10 pointer-events-none"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:py-0 flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 uppercase">
          {t("about.title")}
        </h2>
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6 md:justify-start justify-center">
            <div className="h-1 bg-[#0160A2] w-full rounded-full max-w-[200px] md:max-w-[300px]" />
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            {t("about.paragraph2")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("about.paragraph3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
