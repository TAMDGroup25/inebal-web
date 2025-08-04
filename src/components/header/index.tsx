import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Menu, Phone, X } from "lucide-react";
import gsap from "gsap";
import Logo from "../../assets/Logo.avif";
import CustomButton from "../customButton";
import LanguageDropdown from "../lenguageDropdown";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuOpen) {
      setShowMenu(true);
      setMenuOpen(true);
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowMenu(false);
          setMenuOpen(false);
        },
      });
    }
  };

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement)?.closest("button[aria-label='Menu']") ===
          null
      ) {
        toggleMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth <= 1700);
    };

    handleResize(); // inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    window.scrollTo({
      top: id === "#" ? 0 : document.getElementById(id)?.offsetTop ?? 0,
      behavior: "smooth",
    });
    toggleMenu();
  };

  const navItems = [
    { label: t("nav.home"), id: "#" },
    { label: t("nav.services"), id: "servicios" },
    { label: t("nav.about"), id: "nosotros" },
    { label: t("nav.contact"), id: "contacto" },
  ];

  const paddingLeftClass = isWideScreen ? "2xl:pl-[10rem]" : "2xl:pl-[25rem]";
  const paddingRightClass = isWideScreen ? "pr-0" : "pr-20";

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div
        className={`relative w-full flex justify-between items-center h-30 px-4 sm:px-8 ${paddingLeftClass}`}
      >
        {/* Logo */}
        <a href="#">
          <img
            className="object-contain w-[8rem] sm:w-[10rem]"
            src={Logo}
            alt="Logo"
          />
        </a>

        {/* Menú desktop centrado */}
        <nav className="hidden 2xl:flex space-x-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2 max-w-[40%] whitespace-nowrap overflow-hidden z-0">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="group relative transition"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#0160A2] transition-all duration-300 origin-left group-hover:w-full group-hover:origin-right"></span>
            </a>
          ))}
        </nav>

        {/* CTA + Info + Idioma */}
        <div className={`hidden 2xl:flex items-center ${paddingRightClass}`}>
          <div className="mr-10">
            <ul>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#0160A2]" />
                <a
                  href="tel:+34664686850"
                  className="hover:underline text-[#0160A2]"
                >
                  +34 664 68 68 50
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#0160A2]" />
                <a
                  href="mailto:info@gregalproperties.com"
                  className="hover:underline text-[#0160A2]"
                >
                  info@gregalproperties.com
                </a>
              </li>
            </ul>
          </div>

          <CustomButton
            size="md"
            className="w-full text-center"
            onClick={() => {
              const target = document.getElementById("contacto");
              if (target) {
                window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
              }
              toggleMenu();
            }}
          >
            {t("nav.contactBtn")}
          </CustomButton>

          <LanguageDropdown />
        </div>

        {/* Botón menú mobile */}
        <button
          className="2xl:hidden"
          onClick={toggleMenu}
          aria-label={t("nav.menu")}
        >
          {menuOpen ? (
            <X className="w-8 h-8 text-primary" color="#0160A2" />
          ) : (
            <Menu className="w-8 h-8 text-primary" color="#0160A2" />
          )}
        </button>
      </div>

      {/* Menú mobile */}
      {showMenu && (
        <div
          ref={menuRef}
          className="2xl:hidden bg-white border-t border-gray-200 z-99 overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <nav className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="hover:text-primary transition"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-center mt-2">
              <CustomButton
                size="sm"
                className="w-full text-center"
                onClick={() => {
                  const target = document.getElementById("contacto");
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop,
                      behavior: "smooth",
                    });
                  }
                  toggleMenu();
                }}
              >
                {t("nav.contactBtn")}
              </CustomButton>
              <LanguageDropdown />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
