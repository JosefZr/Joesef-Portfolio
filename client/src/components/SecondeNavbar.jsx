import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Brain, ChevronDown, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecondeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isDentalLanding = location.pathname === "/DentalLanding";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Links & sublinks (you can keep them global)


  const isLinkActive = (link) => {
    if (location.pathname === link.path) return true;
    if (link.children) {
      return link.children.some((child) => location.pathname === child.path);
    }
    return false;
  };

  // 🔹 Scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 🔹 Central click handler
  const handleNavClick = (link, opts = {}) => {
    const { closeMenus = true } = opts;

    if (link.sectionId) {
      const targetPath = link.path || "/";

      if (location.pathname !== targetPath) {
        navigate(targetPath);
        setTimeout(() => scrollToSection(link.sectionId), 250);
      } else {
        scrollToSection(link.sectionId);
      }

      if (closeMenus) {
        setIsMobileMenuOpen(false);
        setOpenDesktopDropdown(null);
        setOpenMobileDropdown(null);
      }
      return;
    }

    navigate(link.path);
    if (closeMenus) {
      setIsMobileMenuOpen(false);
      setOpenDesktopDropdown(null);
      setOpenMobileDropdown(null);
    }
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full border border-white/20 shadow-2xl shadow-black/50 bg-white/5 backdrop-blur-2xl transition-all duration-300 ${
          isScrolled ? "scale-[0.98]" : "scale-100"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 relative">
          {/* 🔹 Left side: logo OR DentalLanding header */}
          {isDentalLanding ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <span className="text-lg sm:text-xl font-bold text-white">
                LB Dental Consulting
              </span>
            </div>
          ) : (
            <button
              onClick={() => handleNavClick({ path: "/", sectionId: "hero" })}
              className="flex items-center gap-2 group"
            >
              <img
                src="/logo.svg"
                alt="LB Logo"
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
              <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LB Consulting
              </span>
            </button>
          )}

          

          {/* 🔹 Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {isDentalLanding ? (
              <>
                <button
                  onClick={() => navigate("/MarketingTest")}
                  className="px-6 py-2.5 bg-transparent border border-purple-500/30 text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  Marketing Test
                </button>
                <button
                  onClick={() => navigate("/BookingForm")}
                  className="px-6 py-2.5 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:border-transparent hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                >
                  Book Free Call
                </button>
              </>
            ) : (
              <Button
                onClick={() => navigate("/mind-mastery-test")}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs rounded-full shadow-lg"
              >
                <Brain className="w-4 h-4 mr-1" /> Mind Diagnostics
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white ml-2 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 space-y-2 bg-black/70 backdrop-blur-xl rounded-b-3xl">
             
              {/* 🔹 Mobile CTAs */}
              {isDentalLanding ? (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      navigate("/MarketingTest");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-transparent border border-purple-500/40 text-purple-300 rounded-full py-3 text-sm font-medium hover:bg-purple-600 hover:text-white hover:border-transparent transition-all"
                  >
                    Marketing Test
                  </button>
                  <button
                    onClick={() => {
                      navigate("/BookingForm");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full py-3 text-sm font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all"
                  >
                    Book Free Call
                  </button>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    navigate("/mind-mastery-test");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white rounded-full py-3"
                >
                  <Brain className="w-4 h-4 mr-2" /> Mind Diagnostics
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
