import { useTranslation } from "react-i18next";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      className="flex flex-col md:flex-row h-auto md:h-screen bg-gray-50"
    >
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:py-0 flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 uppercase">
          {t("contact.title")}
        </h2>
        <div className="max-w-xl w-full">
          <div className="flex items-center gap-2 mb-6 md:justify-end justify-center">
            <div className="h-1 bg-[#0160A2] w-full rounded-full max-w-[200px] md:max-w-[300px]" />
          </div>

          <form className="space-y-4">
            <CustomInput
              type="text"
              name="nombre"
              placeholder={t("contact.name")}
              id={"name"}
            />
            <CustomInput
              type="email"
              name="email"
              placeholder={t("contact.email")}
              id={"email"}
            />
            <div>
              <textarea
                name="mensaje"
                placeholder={t("contact.message")}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#00a59e]"
              />
            </div>
            <CustomButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              {t("contact.button")}
            </CustomButton>
          </form>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
        <img
          src="/contact-img.jpg"
          alt="Equipo de trabajo"
          className="w-full h-full object-cover"
        />
        <img
          src="/angle-fill-right.svg"
          alt="Decoración tipo menor que"
          className="hidden md:block absolute top-0 left-0 h-full w-16 z-10 pointer-events-none"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Contact;
