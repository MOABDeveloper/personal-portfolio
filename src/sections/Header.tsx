"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  // Function to handle button click
  const handleButtonClick = (id: string, offset = 0) => {
    setActiveButton(id);

    const element = document.getElementById(id);

    if (element) {
      const yOffset = offset;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  // Function to update active button on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "about", "contact"];
      let currentSection = "";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      if (currentSection && currentSection !== activeButton) {
        setActiveButton(currentSection);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeButton]);

  return (
    <div className="flex justify-center items-center fixed top-3 md:w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        <button
          onClick={() => handleButtonClick("hero")}
          className={`nav-item ${activeButton === "hero" ? "bg-gray-1100 text-gray-1000" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => handleButtonClick("projects", -130)}
          className={`nav-item ${activeButton === "projects" ? "bg-gray-1100 text-gray-1000" : ""}`}
        >
          Projects
        </button>
        <button
          onClick={() => handleButtonClick("experience")}
          className={`nav-item ${activeButton === "experience" ? "bg-gray-1100 text-gray-1000" : ""}`}
        >
          Experience
        </button>
        <button
          onClick={() => handleButtonClick("about")}
          className={`nav-item ${activeButton === "about" ? "bg-gray-1100 text-gray-1000" : ""}`}
        >
          About
        </button>
        <button
          onClick={() => handleButtonClick("contact")}
          className={`nav-item ${activeButton === "contact" ? "bg-gray-1100 text-gray-1000" : ""}`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
