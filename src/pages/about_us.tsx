// import React from "react";
import NavBar from "../components/navBar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <NavBar />

      <section className="relative py-20 px-4 overflow-hidden border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Movie Universe
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            We are dedicated to bringing the world of cinema to your fingertips.
            From timeless classics to the latest blockbusters, discover the
            stories that move us.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px]"></div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-500 text-sm">
        &copy; 2026 Marwan's Movie Lab. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default AboutUs;
