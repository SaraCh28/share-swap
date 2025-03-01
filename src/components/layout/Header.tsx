
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-primary transition-all duration-300 hover:opacity-80"
        >
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <span className="text-xl font-bold">H</span>
          </div>
          <span>HelpMart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button asChild variant="default" className="ml-4">
            <Link to="/account">My Account</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 animate-fade-in md:hidden">
          <nav className="flex flex-col items-center gap-6 p-8">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/browse" onClick={() => setIsMenuOpen(false)}>Browse</MobileNavLink>
            <MobileNavLink to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <Button asChild variant="default" className="w-full mt-4">
              <Link to="/account" onClick={() => setIsMenuOpen(false)}>My Account</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to}
    className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to}
    onClick={onClick}
    className="text-2xl font-medium text-foreground hover:text-primary transition-colors py-2"
  >
    {children}
  </Link>
);

export default Header;
