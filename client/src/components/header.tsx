import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card backdrop-blur-md border-b"
          : "bg-background/60 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="brand-name">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="text-primary-foreground text-sm" />
            </div>
            <span className="text-xl font-bold">
              Tribex Alpha
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {location === "/" && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-features"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("platform")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-platform"
                >
                  Platform
                </button>
                <button
                  onClick={() => scrollToSection("technology")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-technology"
                >
                  Technology
                </button>
              </>
            )}
            {location !== "/" && (
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-home"
              >
                Home
              </Link>
            )}
            <Link
              href="/about"
              className={`transition-colors ${
                location === "/about" 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="nav-about"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                location === "/contact" 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </nav>

          

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-4">
              {location === "/" && (
                <>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="nav-mobile-features"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection("platform")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="nav-mobile-platform"
                  >
                    Platform
                  </button>
                  <button
                    onClick={() => scrollToSection("technology")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="nav-mobile-technology"
                  >
                    Technology
                  </button>
                </>
              )}
              {location !== "/" && (
                <Link
                  href="/"
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-mobile-home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                href="/about"
                className={`text-left transition-colors ${
                  location === "/about" 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="nav-mobile-about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`text-left transition-colors ${
                  location === "/contact" 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="nav-mobile-contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
