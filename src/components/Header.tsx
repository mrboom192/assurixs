import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/button";
import logo from "@/../public/logo.png";
import Image from "next/image";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Industries", id: "industries" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a
            href="tel:714-729-0500"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">714-729-0500</span>
          </a>
          <a
            href="mailto:ains@assurix.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">ains@assurix.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center"
          >
            <Image
              src={logo}
              alt="Assurix Insurance Services"
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-primary transition-colors ${
                  currentPage === item.id ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => handleNavClick("contact")}>
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 hover:text-primary transition-colors ${
                  currentPage === item.id ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              className="w-full"
            >
              Get a Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
