import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const WHATSAPP_NUMBER = "923203981965"; // country code + number, no + or spaces
const WHATSAPP_MESSAGE = "Hello Shoppy, I need help with my order.";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-3">
      {/* scroll up */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-ink-900 hover:bg-brand-600 text-white text-xl flex justify-center items-center shadow-lg shadow-black/30 transition-all duration-300 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FiArrowUp />
      </button>

      {/* whatsapp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          WHATSAPP_MESSAGE,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white text-3xl md:text-4xl flex justify-center items-center shadow-lg shadow-black/30 hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingButtons;
