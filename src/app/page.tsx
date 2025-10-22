"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/HomePage";
import { AboutPage } from "@/components/AboutPage";
import { ServicesPage } from "@/components/ServicesPage";
import { IndustriesPage } from "@/components/IndustriesPage";
import { ContactPage } from "@/components/ContactPage";
import { Toaster } from "@/components/sonner";
import { AnimatedBackground } from "@/components/AnimatedBackground";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "industries":
        return <IndustriesPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <AnimatedBackground />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#2C4A7C]/[0.02] via-white to-[#5A9F3F]/[0.03] relative z-10">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer onNavigate={handleNavigate} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
